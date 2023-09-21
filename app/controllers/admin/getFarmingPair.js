const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/farmingPairs')
const Web3 = require('web3')
const erc20ABI = require('../../middleware/web3/Abi/erc20Abi.json')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getFarmingPairs = async (req, res) => {
    try {
        const respose = await assets.find({})
        res.status(200).json({
            success: true,
            result: respose,
            message: 'Farming Pairs Fetched Successfully'
        })
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getFarmingPairs }