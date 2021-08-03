import Head from "next/head"
import useWallet from "use-wallet"
import { Link, withTranslation } from "../i18n"
import React, { useState, useEffect } from "react"
import HeaderFooter from "../layout/HeaderFooter"
import classNames from "classnames/bind"
import styles from "../styles/farm.less"
import { confirmAlert } from 'react-confirm-alert'
import { ToastContainer, toast } from 'react-toastify'
import { toastConfig } from '../libs/utils'
import Timer from 'react-compound-timer'
import BigNumber from 'bignumber.js'
import { withRouter } from 'next/router'
import Clipboard from 'react-clipboard.js'
import '../styles/react-confirm-alert.less'
const cx = classNames.bind(styles)
import Web3 from 'web3'
import {
  formatNumber,
  unFormatNumber,
  formatStringNumber,
} from '../libs/utils'
import tokenConfig from '../contract.config.js'
import CountUp from 'react-countup'
import {
  getLPPairInfo,
  getLemdPrice
} from '../api/api'

const Home = ({ t,router }) => {
  const wallet = useWallet()
  const { account, ethereum } = wallet
  const [userStakeNum, setUserStakeNum] = useState(0)
  const [userUnstakeNum, setUserUnstakeNum] = useState(0)
  const [stakeNum, setStakeNum] = useState(0)
  const [unStakeNum, setUnStakeNum] = useState(0)
  const [earnedNum, setEarnedNum] = useState(0)
  const [start, setStart] = useState(false)
  const [tvl, setTvl] = useState(0)
  const [apy, setApy] = useState(0)
  const [LEMDPrice, setLEMDPrice ] = useState(0)

  const web3 = new Web3(ethereum)
  const poolConfig = tokenConfig.lend.controller.lemdBreeder
  const lpConfig = tokenConfig.stake.lp
  const lpContract = new web3.eth.Contract(
    lpConfig.abi,
    lpConfig.address
  )
  const poolContract = new web3.eth.Contract(
    poolConfig.abi,
    poolConfig.address
  )

  useEffect(() => {
    const timer = setInterval(async () => {
      const {data} = await getLPPairInfo()
      const tvl = data?.data?.uniswapFactories[0].totalLiquidityUSD
      setTvl(!!tvl?tvl:0)
      const lemdPrice = await getLemdPrice()
      setLEMDPrice(lemdPrice)
      const apy = lemdPrice * 60 * 60 * 24 * 364 * 19.5 / 4 / tvl * 100
      setApy(apy.toFixed(2))
      if (account) {
        const startTime = await poolContract.methods.startBlock().call()
        console.log('startTime',startTime)
          const userInfo = await poolContract.methods.userInfo(0, account).call()
          console.log("userInfo", userInfo)
          const poolLength = await poolContract.methods.poolLength().call()
          const usersLength = await poolContract.methods.usersLength(0).call()
          const pendingLemd = userInfo['pendingReward']
          const stakeNum = userInfo['amount']
          const unStakeNum = await lpContract.methods.balanceOf(account).call()
          const reward = await poolContract.methods.allPendingLemd(account).call()
          console.log("reward", reward)
          // console.log("unStakeNum", unStakeNum)
          setStart(true)
          setStakeNum(stakeNum)
          setUnStakeNum(unStakeNum)
          setEarnedNum(reward)
        }
    }, 3000)
    return () => {
      clearInterval(timer)
    }
  }, [account])

  const checkStart = () => {
    if (!start) {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className={styles.confirmAlert}>
              <h1>Not start!</h1>
              <p className={styles.center}>
                <button onClick={onClose}> OK </button>
              </p>
            </div>
          )
        },
      })
      return true
    }
    return false
  }

  const checkZero = (amount) => {
    if (amount == 0) {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className={styles.confirmAlert}>
              <h1>Input 0 prohibited!</h1>
              <p className={styles.center}>
                <button onClick={onClose}> OK </button>
              </p>
            </div>
          )
        },
      })
      return true
    }
    return false
  }

  const checkMax = (amount) => {
    if (amount > 100) {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className={styles.confirmAlert}>
              <h1>Max amount of staking PER TIME: 100 OKT.</h1>
              <p className={styles.center}>
                <button onClick={onClose}> OK </button>
              </p>
            </div>
          )
        },
      })
      return true
    }
    return false
  }

  const checkWallet = () => {
    if (!account) {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className={styles.confirmAlert}>
              <h1>Please connect wallet</h1>
              <p className={styles.center}>
                <button
                  onClick={() => {
                    wallet.connect()
                    onClose()
                  }}
                >
                  OK
                </button>
                <button onClick={onClose}>Cancel</button>
              </p>
            </div>
          )
        },
      })
      return true
    }
    return false
  }

  const deposit = async () => {
    if (checkWallet()) return
    if (checkStart()) return
    if (checkZero(userStakeNum * 1)) return
    console.log("userStakeNum", userStakeNum)
    let isApproval =
      (await lpContract.methods
        .allowance(account, poolConfig.address)
        .call()) > 0 ?
      true :
      false
    if (!isApproval) {
      await lpContract.methods
        .approve(
          poolConfig.address,
          '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        )
        .send({
          from: account
        })
    }
    console.log("isApproval", isApproval, "userStakeNum", userStakeNum, "unFormatNumber", unFormatNumber(userStakeNum, 18))
    await poolContract.methods
      .stake(0, unFormatNumber(userStakeNum, 18))
      // .stake(0, '1')
      .send({ 
        from: account
      })
    toast.dark('🚀 Deposit success!', toastConfig)
    setUserStakeNum(0)
  }

  const getReward = async () => {
    if (checkWallet()) return
    if (checkStart()) return
    await poolContract.methods.claim(0).send({
      from: account
    })
    toast.dark('🚀 Get reward success!', toastConfig)
  }

  const withdraw = async () => {
    if (checkWallet()) return
    if (checkStart()) return
    if (checkZero(userUnstakeNum * 1)) return
    console.log(unFormatNumber(userUnstakeNum, 18))
    await poolContract.methods
      .unStake(0 , unFormatNumber(userUnstakeNum, 18))
      // .unStake(0, 1)
      .send({ from: account })
    toast.dark('🚀 Withdraw success!', toastConfig)
    setUserUnstakeNum(0)
  }

  const showConfirm = (type = '') => {
    if (type == '') return
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className={styles.confirmAlert}>
            <h1>
              Confirm to{' '}
              {type == 'getReward' ? 'claim ?' : 'claim & withdraw ?'}
            </h1>
            <p>Your Actual Earned will be{' '}<b>{formatStringNumber(earnedNum,18)}</b> LEMD.</p>
            <p className={styles.center}>
              <button
                onClick={() =>
                  type == 'getReward'
                    ? (getReward() && onClose())
                    : (withdraw() && onClose())
                }
              >
                Yes
              </button>
              <button onClick={onClose}>No</button>
            </p>
          </div>
        )
      },
    })
  }

  return (
      <HeaderFooter activeIndex={3}>
          <ToastContainer />
          <Head>
              <title>{t("title")}</title>
          </Head>
          <div className={styles.wrapper}>
              <div className={styles.farm_top}>
                  <div className={styles.farm_text}>
                      <h1>{t("LEMD_Genesis_Mining")}</h1>
                      <h2>{t("info")}</h2>
                      <h3>{t("Total_Value_Locked")}</h3>
                      <h4>
                          $<CountUp start={0} end={tvl} separator="," decimal="." prefix="" />
                      </h4>
                      <h3>LEMD Price</h3>
                      <h4>
                          <p>$<CountUp start={0} end={LEMDPrice} separator="," decimal="." decimals={6} prefix="" /></p>
                          <button onClick={() => window.open(lpConfig.swap)}>Go to Swap $LEMD</button>
                      </h4>
                  </div>
                  <div className={styles.farm_car}></div>
                  <div className={styles.compound_time}>{t("Tanked_up")}</div>
              </div>
              <div className={styles.farm_list}>
                  <h1>
                      <p className={styles.title}>{t("now")}!</p>
                      <p>{t("Store_goods_in_Lemond_box")}!</p>
                  </h1>
                  {/* <h2>
              <i className={styles.speed}>Notice</i>
              <p className={styles.title}>Last Call ！！！</p>
              <p>Time of Snapshot : <b>12.00 UTC Mar 24th</b></p>
              <p>Approx. Block Height: <b>1,565,421</b></p>
              <p>Do remember to claim your <b>LEMD</b> test tokens to your wallet before it’s too late!</p>
            </h2> */}
                  <ul className={styles.pool_content}>
                      <li>
                          <i className={styles.speed}>APY: {apy}%</i>
                          <span className={styles.pool}>
                              <i className={styles.icon}></i>
                              <h1>{lpConfig.name}</h1>
                              <h2 onClick={() => window.open(lpConfig.link)}>{lpConfig.description}</h2>
                              <h3>{formatNumber(stakeNum, 18, 8)}</h3>
                              <h4>{t("Staked")} LEMD-USDT LP {t("tokens")}</h4>
                              <div className={styles.claim}>
                                  <div className={styles.claimText}>
                                      <h3>{formatNumber(earnedNum, 18, 8)}</h3>
                                      <h4>{t("unclaimed")} LEMD {t("in_pool")}</h4>
                                  </div>
                                  <button disabled={stakeNum == 0} onClick={() => showConfirm("getReward")} className={styles.stake}>
                                      {t("claim")}
                                  </button>
                              </div>
                              <dl className={styles.btns}>
                                  <dt>
                                      <p>
                                          <input type="text" value={userStakeNum} onChange={(e) => setUserStakeNum(e.target.value)} />
                                          <i className={styles.balance}>{formatStringNumber(unStakeNum, 18)}</i>
                                          <i onClick={() => setUserStakeNum(formatStringNumber(unStakeNum, 18))} className={styles.max}>
                                              {t("max")}
                                          </i>
                                          <b></b>
                                          <button className={styles.stake} onClick={() => deposit()}>
                                              {t("Staked")}
                                          </button>
                                      </p>
                                  </dt>
                                  <dt>
                                      <p>
                                          <input type="text" value={userUnstakeNum} onChange={(e) => setUserUnstakeNum(e.target.value)} />
                                          <i className={styles.balance}>{formatStringNumber(stakeNum, 18)}</i>
                                          <i onClick={() => setUserUnstakeNum(formatStringNumber(stakeNum, 18))} className={styles.max}>
                                            {t("max")}
                                          </i>
                                          <b></b>
                                          <button disabled={stakeNum == 0} className={styles.withdraw} onClick={() => showConfirm("withdraw")}>
                                              {t("withdraw")}
                                          </button>
                                      </p>
                                  </dt>
                              </dl>
                          </span>
                      </li>
                      {/* <li>
                          <span className={styles.stop_cover}>
                              <span>End of the mining.</span>
                          </span>
                          <i className={styles.speed}>{oktConfig.speed}</i>
                          <span className={styles.pool}>
                              <i className={styles.icon}></i>
                              <h1>{oktConfig.name}</h1>
                              <h2 onClick={() => window.open(oktConfig.link)}>{oktConfig.description}</h2>
                              <h3>{formatNumber(stakeNum, 18, 8)}</h3>
                              <h4>Staked OKT Tokens</h4>
                              <div className={styles.claim}>
                                  <div className={styles.claimText}>
                                      <h3>{formatNumber(earnedNum, 18, 8)}</h3>
                                      <h4>Unclaimed LEMD in pool</h4>
                                  </div>
                                  <button disabled={stakeNum == 0} onClick={() => showConfirm("getReward")} className={styles.stake}>
                                      Claim
                                  </button>
                              </div>
                              <dl className={styles.btns}>
                                  <dt>
                                      <p>
                                          <input type="text" value={userStakeNum} onChange={(e) => setUserStakeNum(e.target.value)} />
                                          <i className={styles.balance}>{formatStringNumber(unStakeNum, 18)}</i>
                                          <i onClick={() => setUserStakeNum(formatStringNumber(unStakeNum, 18))} className={styles.max}>
                                              MAX
                                          </i>
                                          <b></b>
                                          <button className={styles.stake} onClick={() => deposit()}>
                                              Stake
                                          </button>
                                      </p>
                                  </dt>
                                  <dt>
                                      <p>
                                          <input type="text" value={userUnstakeNum} onChange={(e) => setUserUnstakeNum(e.target.value)} />
                                          <i className={styles.balance}>{formatStringNumber(stakeNum, 18)}</i>
                                          <i onClick={() => setUserUnstakeNum(formatStringNumber(stakeNum, 18))} className={styles.max}>
                                              MAX
                                          </i>
                                          <b></b>
                                          <button disabled={stakeNum == 0} className={styles.withdraw} onClick={() => showConfirm("withdraw")}>
                                              Withdraw
                                          </button>
                                      </p>
                                  </dt>
                              </dl>
                          </span>
                      </li> */}
                      {/* <li>
                      <span className={styles.rules}>
                        <h1>Airdrop Episode I</h1>
                        <p>Total LEMD to be airdropped : <b>1,000,000 LEMD</b><br/>
                        Period of airdrop: <b>12.00 UTC, Mar 12 to 12.00 UTC, Mar 22</b>
                        </p>
                        <p>*Real minted LEMD for Airdrop Episode I will be distributed on a <b>1:1</b> basis before the official launch of OKExChain by further notice.</p>
                        <h1>Invite to Stake MORE!</h1>
                        <p>You can invite up to <b>4</b> persons to increase your max amount of <b>OKT</b> for staking from <b>100</b> to <b>500</b>.(100 up per invited person)</p>
                        <p>*Effect will be activated after invited person stakes in the pool.</p>
                        <h2>
                            <span>Invited people: <b>{invitedNum}</b></span>
                        </h2>
                        <p>
                          <Clipboard
                            className={styles.btn} 
                              onClick={() => {
                              if (checkWallet()) return
                                toast.dark('🚀 Copy success!', toastConfig)
                              }}
                            data-clipboard-text={`https://www.lemond.money/farm?inviter=${account}`}>
                            Copy Link & Share
                          </Clipboard>
                        </p>
                        <p>Click for <a target="_blank" href="https://lemondfinance.medium.com/lemond-x-okexchain-test-to-get-airdrop-cc48c26812f">detailed instructions.</a></p>
                      </span>
                    </li> */}
                  </ul>
              </div>
          </div>
      </HeaderFooter>
  )
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "header", "home"],
});

export default withTranslation('home')(withRouter(Home))
