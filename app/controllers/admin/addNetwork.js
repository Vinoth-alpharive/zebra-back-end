const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/network')
const Web3 = require('web3')
const erc20ABI = require('../../middleware/web3/Abi/erc20Abi.json')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const addNetwork = async (req, res) => {
    try {
        req = matchedData(req)

        const data = await assets.findOne({ rpc_Url: req.rpc_Url })

        if (data) {
            res.status(200).json({
                success: false,
                result: null,
                message: 'Network Already Added'
            })
        } else {
            const web3 = new Web3(
                new Web3.providers.HttpProvider(req.rpc_Url)
            )
            const chainId = await web3.eth.getChainId()
            req.chainId = chainId
            const respose = await assets.create(req)
            res.status(200).json({
                success: true,
                result: respose,
                message: 'Successfully Added'
            })
        }
    }
    catch (error) {
        handleError(res, error)
    }
}

module.exports = { addNetwork }