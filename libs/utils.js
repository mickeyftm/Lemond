import { utils } from 'web3'
// import {utils} from 'ethers'
import BigNumber from 'bignumber.js'
import numbro from "numbro"

const roundFun =  (value, n) => {
    value = Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
    value = new BigNumber(value).times(new BigNumber(10).pow(n)).div(new BigNumber(10).pow(n))
    console.log("roundFun", value)
    return value.toString()
}

export function formatNumber(number, digits, decimals){
  const bn = new BigNumber(String(number))
  return numbro(bn.div(new BigNumber(10).pow(digits))).format({
      thousandSeparated: true,
      mantissa: decimals,
  })
}

export function formatStringNumber(number, digits) {
    const bn = new BigNumber(String(number))
    console.log("formatStringNumbers", bn.toString())
    console.log("formatStringNumbers", bn.div(new BigNumber(10).pow(digits)).toString())
    return bn.div(new BigNumber(10).pow(digits)).toString()
}

export function formatStringNumberFixed(number, digits) {
    console.log("formatStringNumberFixed",number)
    const num = String(number).substring(0, String(number).length - 10) + "0000000000"
    console.log("formatStringNumberFixed",num)
    const bn = new BigNumber(num)
    return bn.div(new BigNumber(10).pow(digits)).toString()
}

export function formatUSDNmuber(number, decimals){
   return numbro(number).formatCurrency({
       average: true,
       mantissa: decimals,
   })
}

export function formatThousandNumber(number, decimals) {
    const num = Math.floor(number * 100000000) / 100000000
    return numbro(num).format({
        thousandSeparated: true,
        mantissa: decimals,
    })
}

export function formatAverageNumber(number, decimals) {
    return numbro(number).formatCurrency({
        average: true,
        mantissa: decimals,
    })
}

export function unFormatNumber(number, decimals) {
    const bn = new BigNumber(String(number))
    console.log("1000",(new BigNumber(String("1000")).times(new BigNumber(10).pow(decimals))).toString())
    return numbro(bn.times(new BigNumber(10).pow(decimals))).format({
        mantissa: 0,
    })
}

export function unFormatNumberFixed(number, decimals) {
    const bn = new BigNumber(String(roundFun(number, 8)))
    console.log("bn", bn.toString())
    console.log("1000", (new BigNumber(String("1000")).times(new BigNumber(10).pow(decimals))).toString())
    return numbro(bn.times(new BigNumber(10).pow(decimals))).format({
        mantissa: 0,
    })
}

export function formatDecimals(number, decimals) {
    const bn = new BigNumber(String(number))
    return numbro(bn).format({
        mantissa: decimals,
    })
}

export function formatDecimalsFixed(number, decimals) {
    const bn = new BigNumber(String(number, 8))
    // const bn = new BigNumber(Number(String(number).toString().match(/^\d+(?:\.\d{0,8})?/)))
    console.log(
        numbro(bn).format({
            mantissa: decimals,
        })
    )
    return numbro(bn).format({
        mantissa: decimals,
    })
}


export const toastConfig = {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: null,
    pauseOnHover: false,
}