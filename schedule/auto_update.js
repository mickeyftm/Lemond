import schedule from 'node-schedule'
import axios from 'axios' 

const  scheduleCronstyle = ()=>{
    schedule.scheduleJob("30 * * * * *", () => {
        console.log("执行任务")
        const host = "http://localhost:8000/"
        axios.get(host + "api/updateLendTotalInfo")
        axios.get(host + "api/updatePriceOracle")
    })
}

scheduleCronstyle()