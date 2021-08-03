// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat")
const { ethers, upgrades } = require("hardhat")
const BigNumber = require("bignumber.js")
const web3 = require("web3")

const LEMD = artifacts.require("LEMD")
// const LEMDCap = artifacts.require("LEMDCap")
// const LEMDLimit = artifacts.require("LEMDLimit")
const lemdDistribution = artifacts.require("LemdDistribution")

const LemdBreeder = artifacts.require("LemdBreeder")
const config = require("../contract.config")

async function main() {
    await hre.run("compile")

    this.deployer = (await ethers.getSigners())[0].address
    console.log("deployer address", this.deployer)

    // this.lemdToken = await hre.ethers.getContractAt("LEMD", "0x148A059Ccc356Df25195155Ce32008B42B50094F")
    // await this.lemdToken.addMinter(this.deployer)
    // await this.lemdToken.mint(this.deployer, hre.ethers.utils.parseEther("30000000"))


    this.lemdDistribution = await hre.ethers.getContractAt("LemdDistribution", "0x9F097EE2dAad4487F6780D451cB277836B954FC1")
    const {
        lEther,
        lOKB,
        lUSDT,
        lETHK,
        lBTCK
    } = config.lend.lTokens
    await this.lemdDistribution._setLemdSpeed(lEther.address, hre.ethers.utils.parseEther("1.29"))
    await this.lemdDistribution._setLemdSpeed(lOKB.address, hre.ethers.utils.parseEther("0.84"))
    await this.lemdDistribution._setLemdSpeed(lUSDT.address, hre.ethers.utils.parseEther("0.75"))
    await this.lemdDistribution._setLemdSpeed(lETHK.address, hre.ethers.utils.parseEther("1.32"))
    await this.lemdDistribution._setLemdSpeed(lBTCK.address, hre.ethers.utils.parseEther("1.8"))
    // await this.comptroller._setBorrowPaused("0x460c60e179C209dB79E44cd10ed5dbFE5De81223", true)
    // await this.comptroller._setBorrowPaused("0xf8d3A4aeb14370f8c0e45CDDC240679cF1000Ef6", true)
    // await this.comptroller._setBorrowPaused("0x9FA53E22b71E0ECD0B5401CE0D78bb91bA46aB5a", true)

    // this.LemdBreeder = await hre.ethers.getContractAt("LemdBreeder", "0x41750b7827a21689728848aA19962cb3A24B11b7")
    // await this.LemdBreeder.setDevAddr("0xF284c7E0e43b4e5b4A94120c811b1B281f0700FF")

    // Deploy LEMD token
    // this.LEMD = await LEMD.new()
    // console.log("LEMD", this.LEMD.address)
    // Deploy LEMD token
    // this.LEMDCap = await LEMDCap.new(hre.ethers.utils.parseEther("10000"))
    // console.log("LEMD", this.LEMDCap.address)

    // console.log((await this.LEMD.balanceOf(this.deployer)).toString())

    // await this.LEMD.addMinter(this.deployer)
    // await this.LEMD.mint(this.deployer, hre.ethers.utils.parseEther("1000"))
    // console.log(hre.ethers.utils
    //         .formatEther((await this.LEMD.balanceOf(this.deployer)).toString()).toString())

    // await this.LEMD.mint(this.deployer, hre.ethers.utils.parseEther("9001"))

    // console.log("LEMD Limit")

    // this.LEMDLimit = await LEMDLimit.new(1618463835)
    // console.log("LEMDLimit", this.LEMDLimit.address)

    // await this.LEMDLimit.addMinter(this.deployer)
    // await this.LEMDLimit.mint(this.deployer, hre.ethers.utils.parseEther("1000"))
    // await this.LEMDLimit.mint("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b", hre.ethers.utils.parseEther("1000"))
    // console.log(hre.ethers.utils.formatEther((await this.LEMDLimit.balanceOf(this.deployer)).toString()).toString())
    // console.log(hre.ethers.utils.formatEther((await this.LEMDLimit.balanceOf("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b")).toString()).toString())

    // await this.LEMDLimit.transfer("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b", hre.ethers.utils.parseEther("500"))

    // console.log(hre.ethers.utils.formatEther((await this.LEMDLimit.balanceOf(this.deployer)).toString()).toString())
    // console.log(hre.ethers.utils.formatEther((await this.LEMDLimit.balanceOf("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b")).toString()).toString())

    // await this.LEMDLimit.initialize(1619089200)

    // await this.LEMDLimit.transfer("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b", hre.ethers.utils.parseEther("500"))
    // console.log(hre.ethers.utils.formatEther((await this.LEMDLimit.balanceOf(this.deployer)).toString()).toString())
    // console.log(hre.ethers.utils.formatEther((await this.LEMDLimit.balanceOf("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b")).toString()).toString())    


    // console.log("LEMD Limit Deploy")
    // this.LEMDLimit = await LEMDLimit.new(1619089200)
    // console.log("LEMDLimit", this.LEMDLimit.address)

    console.log("End")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
