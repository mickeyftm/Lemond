module.exports = {
    stake: {
        okt: {
            name: "LEMD Genesis Pool",
            description: "Get OKT Token",
            icon: "icon_domo_eth",
            link: "https://gitter.im/okexchain-testnet/faucet",
            address: "0x2c91AA5F6586e9E13D4EC50dA16b336beC448BCf",
            abi: require("./abi/OKTPool.json"),
            speed: "Genesis",
        },
        lp: {
            name: "LEMD-OKT LP Pool",
            description: "Get LEMD-OKT LP Token",
            icon: "icon_domo_eth",
            link: "https://gitter.im/okexchain-testnet/faucet",
            address: "0x2c91AA5F6586e9E13D4EC50dA16b336beC448BCf",
            abi: require("./abi/OKTPool.json"),
            speed: "Genesis",
        },
    },
    token: {
        lemond: {
            address: "0xE667d8bD182D165D2E71cF72315bD117f6940094",
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
        },
        lTokens: {
            lEther: {
                address: "0x685589085349c1538d7B54f01dBf6232e66b7c08",
                abi: require("./abi/LEther.json"),
                className: "okb",
                name: "OKT",
                description: "OKExChain Token",
            },
            lOKB: {
                address: "0xb79e686d4FDDE2962d1Cfa9156A4D46C40a4B094",
                abi: require("./abi/LERC20.json"),
                className: "okb",
                name: "OKB",
                description: "OKEx Token",
            },
            lUSDT: {
                address: "0xa56A9975e3CdD82D7349063196DB2DD42cdfAdE5",
                abi: require("./abi/LERC20.json"),
                className: "usdt",
                name: "USDT",
                description: "Tether USD",
            },
            lETHK: {
                address: "0xe6d36f15C16fb46237597100a25ee3096A6EB058",
                abi: require("./abi/LERC20.json"),
                className: "eth",
                name: "ETH",
                description: "Ethereum",
            },
            lBTCK: {
                address: "0x7b2d80Ec80eECD36950239fa3cDCF1300Fa29410",
                abi: require("./abi/LERC20.json"),
                className: "btc",
                name: "BTC",
                description: "BitCoin",
            },
        },
        controller: {
            lemdBreeder: {
                address: "0x561580FF176e19Ca8AAA3e69b3F6c7621Bc33768",
                abi: require("./abi/LemdBreeder.json"),
            },
            lemdDistribution: {
                address: "0x8d3D3AAa6748Fd4755225824C3153B81813Bec4F",
                abi: require("./abi/LemdDistribution.json"),
            },
            priceOracle: {
                address: "0x239b060c2Bfc0935B5F84ae9196D52D2a25CBb1b",
                abi: require("./abi/SimplePriceOracle.json"),
            },
            comptroller: {
                address: "0x384a84baD939010022C77Fc75d98dDB982513D91",
                abi: require("./abi/Comptroller.json"),
            },
            jumpRateModel: {
                address: "0x2cD8b091bc8f7B9C1caE08A59c8De6d55B553913",
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
