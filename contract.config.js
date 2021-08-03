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
                address: "0x8B05ea984d8E47d7B73a67Bf0A8114291535B983",
                abi: require("./abi/LEther.json"),
                className: "okb",
                name: "OKT",
                description: "OKExChain Token",
            },
            lOKB: {
                address: "0x846F4c653A59F9eC744Fe180C7e89F0a59eefC07",
                abi: require("./abi/LERC20.json"),
                className: "okb",
                name: "OKB",
                description: "OKEx Token",
            },
            lUSDT: {
                address: "0x916b0EB5A9b7F3A3f4a72aF9214c1B3F5329A1ad",
                abi: require("./abi/LERC20.json"),
                className: "usdt",
                name: "USDT",
                description: "Tether USD",
            },
            lETHK: {
                address: "0x1f76917502c50Af4D19Ee5594cdD2cF96f7EB0F4",
                abi: require("./abi/LERC20.json"),
                className: "eth",
                name: "ETHK",
                description: "Ethereum",
            },
            lBTCK: {
                address: "0xAf708bE7f167751B7a49B506427f250532649b92",
                abi: require("./abi/LERC20.json"),
                className: "btc",
                name: "BTCK",
                description: "BitCoin",
            },
            lUSDC: {
                address: "0x460c60e179C209dB79E44cd10ed5dbFE5De81223",
                abi: require("./abi/LERC20.json"),
                className: "usdc",
                name: "usdc",
                description: "USD Coin",
            },
            lDAIK: {
                address: "0xf8d3A4aeb14370f8c0e45CDDC240679cF1000Ef6",
                abi: require("./abi/LERC20.json"),
                className: "dai",
                name: "DAIK",
                description: "Dai Stablecoin",
            },
            lUNIK: {
                address: "0x9FA53E22b71E0ECD0B5401CE0D78bb91bA46aB5a",
                abi: require("./abi/LERC20.json"),
                className: "uni",
                name: "UNIK",
                description: "Uniswap",
            },
        },
        controller: {
            lemdBreeder: {
                address: "0x41750b7827a21689728848aA19962cb3A24B11b7",
                abi: require("./abi/LemdBreeder.json"),
            },
            lemdDistribution: {
                address: "0x9F097EE2dAad4487F6780D451cB277836B954FC1",
                abi: require("./abi/LemdDistribution.json"),
            },
            priceOracle: {
                address: "0x0c6C4fd2Fa9bA4D131B1D1716a02557a15bF56e7",
                abi: require("./abi/SimplePriceOracle.json"),
            },
            comptroller: {
                address: "0x7D9eBc646E3f1750C5D164cf29Ef14884Df10714",
                abi: require("./abi/Comptroller.json"),
            },
            jumpRateModel: {
                address: "0x8d6Df88619E62E9f010A5F16A49E8DE92B57e493",
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
