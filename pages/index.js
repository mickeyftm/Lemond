import Head from "next/head";
import React, { useState, useEffect } from "react";
import { render } from 'react-dom';
import useWallet from "use-wallet";
import { Link, withTranslation } from "../i18n";
import HeaderFooter from "../layout/HeaderFooter";
import classNames from "classnames/bind";
import styles from "../styles/home.less";
import CountUp from 'react-countup';
import axios from 'axios';
import { getLendInfo, getTotalValueLocked } from "../api/api"
import ReactTypingEffect from "react-typing-effect"
const cx = classNames.bind(styles);

const Home = ({ t }) => {
    const [totalValueLocked, setTotalValueLocked] = useState(0)

    useEffect(async () => {
        //   const { data } = await getTotalValueLocked()
        //   setTotalValueLocked(data.data)
    }, [])

    return (
        <HeaderFooter activeIndex={1}>
            <Head>
                <title>{t("title")}</title>
            </Head>
            <div className={styles.wrapper}>
                <div className={styles.bg_cute}>
                    <div className={styles.bg_box}></div>
                </div>
                <div className={styles.slogan}>
                    <h1></h1>
                    <h2>
                        {t("a")}<b>{t("juicy_defi")}</b>{t("protocol")}
                    </h2>
                    <h4 id="count">
                        <CountUp start={0} end={totalValueLocked} separator="," decimal="." decimal="," prefix="$" />
                    </h4>
                    <p>
                        <b>{t("lemond")}</b>{t("introduction_to_lemond")}
                    </p>
                    <p>
                        <Link href="/lend">
                            <button>{t("get_app")}</button>
                        </Link>
                    </p>
                </div>
                <div className={styles.multiple_chain}>
                    <h1>{t("lemond")}{t("protocol")}</h1>
                    <h2>
                        {t("money_markets_built_on")}
                        <br />
                        <b>
                            <ReactTypingEffect typingDelay={300} eraseSpeed={0} text={["Ethereum", "Binance Smart Chain", "OKExChain"]} />
                        </b>
                    </h2>
                    <p>{t("introduction_to_chain")}</p>
                </div>
                <div className={styles.feature}>
                    <ul>
                        <li className={styles.cross_chain}>
                            <h1>
                                <img src="/img/cross_chain_title.png" height="35" />
                            </h1>
                            <h2>{t("cross_chain")}</h2>
                            <p>{t("introduction_to_cross")}</p>
                        </li>
                        <li className={styles.dao}>
                            <h1>
                                <img src="/img/dao_title.png" height="35" />
                            </h1>
                            <h2>{t("DAO")}</h2>
                            <p>{t("introduction_to_dao")}</p>
                        </li>
                        <li className={styles.nft}>
                            <h1>
                                <img src="/img/nft_title.png" height="35" />
                            </h1>
                            <h2>{t("nft")}</h2>
                            <p>{t("introduction_to_nft")}</p>
                        </li>
                        <li className={styles.aggregate}>
                            <h1>
                                <img src="/img/aggregate_title.png" height="35" />
                            </h1>
                            <h2>{t("aggregate_income")}</h2>
                            <p>
                                {t("simply_hodl_LEMD_to")}
                                <br />
                                {t("vote_govern_and_more")}
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={styles.airdrop}>
                    <div className={styles.airdrop_box}></div>
                    <h1>
                        <i></i>
                        <span>{t("lemond_airdrop")}</span>
                    </h1>
                    <h2>{t("lemond_airdrop")}</h2>
                    <p>
                        {t("besides")} <b>OKExChain</b> {t("testing_bounty")} <b>{t("lemond")}</b> {t("introduction_to_airdrop")}
                    </p>
                    <p>
                        {t("massive")} <b>$LEMD</b> {t("in_the_box")}
                    </p>
                    <p>{t("suit_up_for_our_juicy_candies")}</p>
                    <p className={styles.btns}>
                        {t("episode")} ①{" "}
                        <Link href="/farm">
                            <button>{t("ended")}</button>
                        </Link>{" "}
                    </p>
                    <p className={styles.btns}>
                        {t("episode")} ②{" "}
                        <Link href="/lend">
                            <button>{t("ended")}</button>
                        </Link>
                    </p>
                    <p className={styles.btns}>
                        {t("episode")} ③{" "}
                        <Link href="/airdrop">
                            <button>{t("ended")}</button>
                        </Link>
                    </p>
                </div>
                <div className={styles.partners}>
                    <h1>{t("road_map")}</h1>
                    <p className={styles.road_map}></p>
                </div>
                <div className={styles.partners}>
                    <h1>{t("partners")}</h1>
                    <ul>
                        <li className={styles.okexchain}></li>
                        <li className={styles.gate}></li>
                        <li className={styles.mxc}></li>
                        <li className={styles.zb}></li>
                        <li className={styles.hoo}></li>
                        <li className={styles.bkex}></li>
                        <li className={styles.coinshub}></li>
                        <li className={styles.bigone}></li>
                        <li className={styles.crypto_venture_capital}></li>
                        <li className={styles.roots_cap}></li>
                        <li className={styles.tokenpocket}></li>
                        <li className={styles.onto}></li>
                        <li className={styles.hyper}></li>
                        <li className={styles.bitkeep}></li>
                    </ul>
                </div>
            </div>
        </HeaderFooter>
    )
};

Home.getInitialProps = async () => ({
    namespacesRequired: ["common", "header", "home"],
});


export default withTranslation("home")(Home);
