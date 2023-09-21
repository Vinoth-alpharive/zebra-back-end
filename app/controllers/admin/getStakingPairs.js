const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/stakingPairs')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getStakingPairs = async (req, res) => {
    try {
        const respose = await assets.find({ End_Time: { $gte: Date.now() } })
        res.status(200).json({
            success: true,
            result: respose,
            message: 'Farming Pairs Fetched Successfully'
        })
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getStakingPairs }