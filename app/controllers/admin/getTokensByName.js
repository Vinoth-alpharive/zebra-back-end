const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/pairs')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getTokensByName = async (req, res) => {
    try {
        const syb = req.body.name
        if (syb) {
            const response = await assets.find({ symbol1: syb })
            res.status(200).json({
                success: true,
                result: response,
                message: 'All Pairs List'
            })
        } else {
            const response = await assets.find()
            res.status(400).json({
                success: false,
                result: null,
                message: 'No Pairs Available'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getTokensByName }