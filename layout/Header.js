import styles from '../styles/layout.less'
import React, { useState, useEffect } from "react"
import {  Link, withTranslation } from '../i18n'
import Wallet from '../components/wallet'
import Locales from '../components/locales'
import classNames from "classnames/bind"
const cx = classNames.bind(styles)

const Header = (props,t) => {
    const { activeIndex } = props
    const [toggleNav, setToggleNav] = useState(true)

    useEffect(async () => {
        initNetWork()
    }, [])

    const initNetWork = async () => {
        let ethereum = window.ethereum
        const data = [
            {
                // chainId: "0x61",
                chainId: "0x42",
                chainName: "OKExChain Mainnet",
                nativeCurrency: {
                    name: "OKT",
                    symbol: "OKT",
                    decimals: 18,
                },
                rpcUrls: ["https://exchainrpc.okex.org"],
                blockExplorerUrls: ["https://www.oklink.com/okexchain/"],
            },
        ]
        
        /* eslint-disable */
        const tx = await ethereum.request({ method: "wallet_addEthereumChain", params: data }).catch()
        if (tx) {
            console.log(tx)
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.logo}></div>
                <div className={cx(styles.overflow, toggleNav && styles.hide)} onClick={() => setToggleNav(true)}>
                    <ul>
                        <Link href="/">
                            <li className={activeIndex == 1 ? styles.active : ""}>Home</li>
                        </Link>
                        <Link href="/lend">
                            <li className={activeIndex == 2 ? styles.active : ""}>Lend</li>
                        </Link>
                        <Link href="/farm">
                            <li className={activeIndex == 3 ? styles.active : ""}>Farm</li>
                        </Link>
                        <Link href="/cross_chain">
                            <li className={activeIndex == 4 ? styles.active : ""}>Cross Chain</li>
                        </Link>
                        <li onClick={() => window.open("https://docs.lemond.money/")}>Doc</li>
                        <Link href="/about">
                            <li className={activeIndex == 5 ? styles.active : ""}>About</li>
                        </Link>
                    </ul>
                </div>
                <i className={styles.toggle} onClick={() => setToggleNav(!toggleNav)}></i>
                <Locales / >
                <Wallet />
            </div>
            {props.children}
        </header>
    )
}


export default withTranslation('header')(Header)
