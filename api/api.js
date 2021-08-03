import axios from 'axios'
import tokenConfig from '../contract.config'

export const getPrice = async() => {
    const request  = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=lemond,bitcoin,ethereum,okb,okexchain,tether&vs_currencies=usd")
    return request
}

export const getTotalValueLocked = async () => {
    const request = await axios.get("/api/getTotalValueLocked")
    return request
}

export const getLendInfo = async () => {
    const request = await axios.get("/api/getLendInfo")
    return request
}

export const getLemdPrice = async () => {
    const request = await axios.post(
            "https://okinfo.cherryswap.net/subgraphs/name/cherryswap/cherrysubgraph", 
            {
                "operationName": "pairs",
                "variables": {
                    "allPairs": ["0x089dedbfd12f2ad990c55a2f1061b8ad986bff88"]
                },
                "query": "fragment PairFields on Pair {\n  id\n  txCount\n  token0 {\n    id\n    symbol\n    name\n    totalLiquidity\n    derivedETH\n    __typename\n  }\n  token1 {\n    id\n    symbol\n    name\n    totalLiquidity\n    derivedETH\n    __typename\n  }\n  reserve0\n  reserve1\n  reserveUSD\n  totalSupply\n  trackedReserveETH\n  reserveETH\n  volumeUSD\n  untrackedVolumeUSD\n  token0Price\n  token1Price\n  createdAtTimestamp\n  __typename\n}\n\nquery pairs($allPairs: [Bytes]!) {\n  pairs(where: {id_in: $allPairs}, orderBy: trackedReserveETH, orderDirection: desc) {\n    ...PairFields\n    __typename\n  }\n}\n"
            }
        )
        const price = request?.data?.data?.pairs[0]?.token0Price
    return !!price ? price : 0
}

export const getLPPairInfo = async () => {
    const request = await axios.post(
        "https://okinfo.cherryswap.net/subgraphs/name/cherryswap/cherrysubgraph", {
            "operationName": "uniswapFactories",
            "variables": {},
            "query": "query uniswapFactories {\n  uniswapFactories(where: {id: \"0x709102921812b3276a65092fe79edfc76c4d4afe\"}) {\n    id\n    totalVolumeUSD\n    totalVolumeETH\n    untrackedVolumeUSD\n    totalLiquidityUSD\n    totalLiquidityETH\n    txCount\n    pairCount\n    __typename\n  }\n}\n"
        }
    )
    return request
}

export const getTokensPrice = async () => {
    const request = await axios.post(
        "https://okinfo.cherryswap.net/subgraphs/name/cherryswap/cherrysubgraph", {
            "operationName": "pairs",
            "variables": {
                "allPairs": [
                    "0xf3098211d012ff5380a03d80f150ac6e5753caa8",
                    "0xcc6d70b44811b4b3346967340647e9c5fdc53ba6",
                    "0x67faa182851635e417218f5ce2b70e01a4c77e51",
                    "0x407f7a2f61e5bab199f7b9de0ca330527175da93",
                    "0x94e01843825ef85ee183a711fa7ae0c5701a731a",
                    "0x6f42c87eff17e3303fa9994a254a477474228cec"
                ]
            },
            "query": "fragment PairFields on Pair {\n  id\n  txCount\n  token0 {\n    id\n    symbol\n    name\n    totalLiquidity\n    derivedETH\n    __typename\n  }\n  token1 {\n    id\n    symbol\n    name\n    totalLiquidity\n    derivedETH\n    __typename\n  }\n  reserve0\n  reserve1\n  reserveUSD\n  totalSupply\n  trackedReserveETH\n  reserveETH\n  volumeUSD\n  untrackedVolumeUSD\n  token0Price\n  token1Price\n  createdAtTimestamp\n  __typename\n}\n\nquery pairs($allPairs: [Bytes]!) {\n  pairs(where: {id_in: $allPairs}, orderBy: id, orderDirection: desc) {\n    ...PairFields\n    __typename\n  }\n}\n"
        }
    )
    return request
}