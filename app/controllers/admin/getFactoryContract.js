const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const factory = require('../../models/pairs')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getFactoryContract = async (req, res) => {
    try {
        if (req.body.Network) {
            const respose = await factory.findOne({ network: req.body.Network })
            if (respose) {
                res.status(200).json({
                    success: true,
                    result: respose,
                    message: 'Networks Fetched Successfully'
                })
            } else {
                res.status(200).json({
                    success: false,
                    result: null,
                    message: 'No Items Found'
                })
            }
        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: 'Please Enter Network'
            })
        }


    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getFactoryContract }