const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/adminFee')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getAdminFee = async (req, res) => {
    try {
        const respose = await assets.find({})
        res.status(200).json({
            success: true,
            result: respose[0],
            message: 'Networks Fetched Successfully'
        })

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getAdminFee }