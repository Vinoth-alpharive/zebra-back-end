const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/farmingPairs')
const networks = require('../../models/network')
const Web3 = require('web3')
const erc20ABI = require('../../middleware/web3/Abi/erc20Abi.json')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const farmingAddPairs = async (req, res) => {
    try {
        const data = matchedData(req)
        const network = await networks.findOne({ _id: data.Network })
        const web3 = new Web3(
            new Web3.providers.HttpProvider(network.rpc_Url)
        )

        const contractInstance = new web3.eth.Contract(
            erc20ABI,
            data.Reward_Token
        );
        if (contractInstance) {
            const symbol1 = await contractInstance.methods.symbol().call()
            if (symbol1) {
                data.Reward_Token_Symbol = symbol1
                const response = await assets.create(data)
                if (response) {
                    res.status(200).json({
                        success: true,
                        result: response,
                        message: 'Pair Created Successfully'
                    })
                } else {
                    res.status(400).json({
                        success: false,
                        result: null,
                        message: 'Something Went Wrong'
                    })
                }
            }

        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: 'Invalid Reward Token token'
            })
        }




    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { farmingAddPairs }