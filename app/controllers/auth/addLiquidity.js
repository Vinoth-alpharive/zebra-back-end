const { matchedData } = require('express-validator')
const { verificationExists, verifyUser } = require('./helpers')
const User = require('../../models/user')
const Web3 = require('web3')
const { handleError } = require('../../middleware/utils')
const contractAbi = require('../../middleware/web3/Abi/contractAbi.json')
const erc20Abi = require('../../middleware/web3/Abi/erc20Abi.json')

/**
 * Verify function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const addLiquidity = async (req, res) => {
    try {
        req = matchedData(req)
        const web3 = new Web3(
            new Web3.providers.HttpProvider("https://gwan-ssl.wandevs.org:46891")
        )

        const contractInstance = new web3.eth.Contract(
            contractAbi,
            "0x570541fAD7988AC42952a2d28c61F3C12836658A"
        );

        const token1 = new web3.eth.Contract(
            erc20Abi,
            req.TokenA
        );

        const token2 = new web3.eth.Contract(
            erc20Abi,
            req.TokenB
        );
        const am1 = await web3.utils.toWei((req.TokenA_Amount).toString(), 'ether')
        const app1 = await token1.methods.approve("0x570541fAD7988AC42952a2d28c61F3C12836658A", req.TokenA_Amount).send({
            from: req.address
        })
        // console.log(app1, "1")
        // const am2 = await web3.utils.toWei(req.tokenB_Amount, 'ether')
        // const app2 = await token2.methods.approve("0x570541fAD7988AC42952a2d28c61F3C12836658A", Number(am2)).send({
        //     from: req.address
        // })
        // console.log(app2, "2")
        // const addLiq = await contractInstance.methods.addLiquidity(req.TokenA, req.TokenB, req.TokenA_Amount, req.TokenB_Amount, req.TokenA_Min, req.TokenB_Min, req.address, req.Time)
        // console.log(addLiq, "liq")
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { addLiquidity }
