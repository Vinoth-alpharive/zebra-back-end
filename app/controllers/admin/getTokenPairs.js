const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/pairs')
const Web3 = require('web3')
const erc20ABI = require('../../middleware/web3/Abi/erc20Abi.json')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getTokenPairs = async (req, res) => {
    try {
        const response = await assets.find()
        res.status(200).json({
            success: true,
            result: response,
            message: 'All Pairs List'
        })
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getTokenPairs }