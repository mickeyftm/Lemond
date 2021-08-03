module.exports = {
    stake: {
        lp: {
            name: "LEMD-USDT LP Pool",
            description: "Get LEMD-USDT LP Token",
            icon: "icon_domo_eth",
            link: "https://www.cherryswap.net/#/add/ETH/0x148A059Ccc356Df25195155Ce32008B42B50094F",
            swap: "https://www.cherryswap.net/#/swap?inputCurrency=OKT&outputCurrency=0x148A059Ccc356Df25195155Ce32008B42B50094F",
            address: "0x994af547f45d4ad85d622fddbaa7956a3a5c13f0",
            abi: require("./tokenAbi/LP.json"),
            speed: "Genesis",
        },
    },
    token: {
        lemond: {
            address: "0x148A059Ccc356Df25195155Ce32008B42B50094F",
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
                address: "0xdf54b6c6195ea4d948d03bfd818d365cf175cfc2",
                abi: require("./tokenAbi/OKB.json"),
            },
            USDT: {
                address: "0x382bb369d343125bfb2117af9c149795c6c65c50",
                abi: require("./tokenAbi/USDT.json"),
            },
            ETHK: {
                address: "0xef71ca2ee68f45b9ad6f72fbdb33d707b872315c",
                abi: require("./tokenAbi/ETHK.json"),
            },
            BTCK: {
                address: "0x54e4622dc504176b3bb432dccaf504569699a7ff",
                abi: require("./tokenAbi/BTCK.json"),
            },
            DAIK: {
                address: "0x21cde7e32a6caf4742d00d44b07279e7596d26b9",
                abi: require("./tokenAbi/DAIK.json"),
            },
            USDC: {
                address: "0xc946daf81b08146b1c7a8da2a851ddf2b3eaaf85",
                abi: require("./tokenAbi/USDC.json"),
            },
            UNIK: {
                address: "0x59d226bb0a4d74274d4354ebb6a0e1a1aa5175b6",
                abi: require("./tokenAbi/UNIK.json"),
            },
        },
        lTokens: {
            lEther: {
                address: "0x8Cfb393B6CfE29bc0FE0a68015Fa9607748cD67c",
                abi: require("./abi/LEther.json"),
                className: "okb",
                name: "OKT",
                description: "OKExChain Token",
            },
            lOKB: {
                address: "0xB1246bf015CaA51F95ecc68eA91e11312A50fE63",
                abi: require("./abi/LERC20.json"),
                className: "okb",
                name: "OKB",
                description: "OKEx Token",
            },
            lUSDT: {
                address: "0xA615900218a05fC2D0312108dc264D96031c86FF",
                abi: require("./abi/LERC20.json"),
                className: "usdt",
                name: "USDT",
                description: "Tether USD",
            },
            lETHK: {
                address: "0x426B67dC3Be18F0511e0CcD535a0eb878f3cB30F",
                abi: require("./abi/LERC20.json"),
                className: "eth",
                name: "ETHK",
                description: "Ethereum",
            },
            lBTCK: {
                address: "0x37c20c42ABDcD6f4721d87dc8d271Ff588dB749a",
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
                address: "0x0434A09e5DC29F15F7dCE9479b0094dA54a1F273",
                abi: require("./abi/LemdBreeder.json"),
            },
            lemdDistribution: {
                address: "0xeF56A8C78042347Ace88FD99EC96Ca953071DDF6",
                abi: require("./abi/LemdDistribution.json"),
            },
            priceOracle: {
                address: "0x2f35307700fEdA6DaEDA5ed274333A105A5f7A9A",
                abi: require("./abi/SimplePriceOracle.json"),
            },
            comptroller: {
                address: "0x2768683c9314eF13bDEb92FdF75A24D7229bb2Da",
                abi: require("./abi/Comptroller.json"),
            },
            jumpRateModel: {
                address: "0xA8D22fb198Ec73613D41C514851017CFe438E2c8",
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
