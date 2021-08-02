module.exports = {
    stake: {
        lp: {
            name: "LEMD-USDT LP Pool",
            description: "Get LEMD-USDT LP Token",
            icon: "icon_domo_eth",
            link: "https://www.cherryswap.net/#/add/ETH/0x148A059Ccc356Df25195155Ce32008B42B50094F",
            address: "0x2Db7d2Db2598319fE82b772Df221533679F1dADc",
            abi: require("./tokenAbi/LP.json"),
            speed: "Genesis",
        },
    },
    token: {
        lemond: {
            address: "0x362A6DF849Dd795a8fF7eF2eC9Eb3f15Fc6e3b39",
            abi: require("./abi/LEMD.json"),
        },
    },
    lend: {
        tokens: {
            OKT: {
                address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                abi: require("./tokenAbi/OKB.json"),
            },
            OKB: {
                address: "0xDa9d14072Ef2262c64240Da3A93fea2279253611",
                abi: require("./tokenAbi/OKB.json"),
            },
            USDT: {
                address: "0xe579156f9dEcc4134B5E3A30a24Ac46BB8B01281",
                abi: require("./tokenAbi/USDT.json"),
            },
            ETHK: {
                address: "0xDF950cEcF33E64176ada5dD733E170a56d11478E",
                abi: require("./tokenAbi/ETHK.json"),
            },
            BTCK: {
                address: "0x09973e7e3914EB5BA69C7c025F30ab9446e3e4e0",
                abi: require("./tokenAbi/BTCK.json"),
            },
            DAIK: {
                address: "0x7eb24c8957e363f2b494f672dd1dc13951daf0db",
                abi: require("./tokenAbi/DAIK.json"),
            },
            USDC: {
                address: "0xffc3ae494e9a6c315777ba25eed04bd6bc17ab84",
                abi: require("./tokenAbi/USDC.json"),
            },
            UNIK: {
                address: "0x1702332032b7939baefc6c6fef66bdf088f2d9a2",
                abi: require("./tokenAbi/UNIK.json"),
            },
        },
        lTokens: {
            lEther: {
                address: "0xFb89FF287F07b322868eB64CAE604c7C43C57F0C",
                abi: require("./abi/LEther.json"),
                className: "okb",
                name: "OKT",
                description: "OKExChain Token",
            },
            lOKB: {
                address: "0xe9870D3e0983922904c0Fa398FEdEbCc3CA16746",
                abi: require("./abi/LERC20.json"),
                className: "okb",
                name: "OKB",
                description: "OKEx Token",
            },
            lUSDT: {
                address: "0x7a0041C4a5ADD4051BCD76d1EeBbB04C5a77C361",
                abi: require("./abi/LERC20.json"),
                className: "usdt",
                name: "USDT",
                description: "Tether USD",
            },
            lETHK: {
                address: "0x98A938fDB184B92522783A5A95D9d148720FFE6f",
                abi: require("./abi/LERC20.json"),
                className: "eth",
                name: "ETHK",
                description: "Ethereum",
            },
            lBTCK: {
                address: "0x1c489fC415b747fbb0eC8a7906634Eb629F533E9",
                abi: require("./abi/LERC20.json"),
                className: "btc",
                name: "BTCK",
                description: "BitCoin",
            },
            lUSDC: {
                address: "0x7b2d80Ec80eECD36950239fa3cDCF1300Fa29411",
                abi: require("./abi/LERC20.json"),
                className: "usdc",
                name: "usdc",
                description: "USD Coin",
            },
            lDAIK: {
                address: "0x7b2d80Ec80eECD36950239fa3cDCF1300Fa29412",
                abi: require("./abi/LERC20.json"),
                className: "dai",
                name: "DAIK",
                description: "Dai Stablecoin",
            },
            lUNIK: {
                address: "0x7b2d80Ec80eECD36950239fa3cDCF1300Fa29413",
                abi: require("./abi/LERC20.json"),
                className: "uni",
                name: "UNIK",
                description: "Uniswap",
            },
        },
        controller: {
            lemdBreeder: {
                address: "0xCd74B9482a19175f9a030E1862Af12C203bbC08e",
                abi: require("./abi/LemdBreeder.json"),
            },
            lemdDistribution: {
                address: "0xed11Cd1332A3B123C281e9694b5C9Ba4641C15aB",
                abi: require("./abi/LemdDistribution.json"),
            },
            priceOracle: {
                address: "0xC8Cd7F4183Ae7B7566A8b8377cca67f703f9323E",
                abi: require("./abi/SimplePriceOracle.json"),
            },
            comptroller: {
                address: "0x02AB59F20486322B280eb99f3449497928BF236A",
                abi: require("./abi/Comptroller.json"),
            },
            jumpRateModel: {
                address: "0x54E28F742aAA9fae0ca846Fe1F3438411950Bb2b",
                abi: require("./abi/JumpRateModel.json"),
            },
        },
    },
    pool: {
        okt_pool: {
            address: "0x6eF0adF5dB077FE8A69f94D25e4EF29a0726e779",
            abi: require("./abi/OKTPool.json"),
        },
    },
    airdrop: {
        onto: {
            address: "0xDb63743aC2fc520217C2ef99F282163bfDcA70bf",
            abi: require("./abi/ONOTAirdrop.json"),
        },
        bsc: {
            address: "0xe287982d82b2b6d27dB3a41BD7179DeF69503106",
            abi: require("./abi/Airdrop.json"),
        },
    },
}
