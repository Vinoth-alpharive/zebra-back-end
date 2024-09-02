const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/adminFee')
const Mongoose = require('mongoose')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getAdminFee = async (req, res) => {
    try {
        const respose = await assets.aggregate([
            { $match: { Network: Mongoose.Types.ObjectId(req.body.Network) } },
        ])
        // const respose = await assets.distinct("router_contract", "name1")
        res.status(200).json({
            success: true,
            result: respose,
            message: 'Networks Fetched Successfully'
        })

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getAdminFee }