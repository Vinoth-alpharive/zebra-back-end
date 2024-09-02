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
        if (req.body.chain) {
            const response = await assets.find({ network: req.body.chain, isVisible: true })
            res.status(200).json({
                success: true,
                result: response,
                message: 'All Pairs List'
            })
        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: 'Please Enter Chain'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getTokenPairs }