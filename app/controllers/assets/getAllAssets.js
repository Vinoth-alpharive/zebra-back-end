const { handleError } = require('../../middleware/utils')
const { getAllAssetsItemsFromDB } = require('./helpers')
const assets = require('../../models/assets')
const { mode } = require('mongoose')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getAllAssets = async (req, res) => {
    try {
        const response = await getAllAssetsItemsFromDB()
        if (req.body.chain) {
            const respo = await assets.find({ chain: req.body.chain })

            if (respo.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "Data found successfully",
                    result: respo

                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Data not exist',
                    result: ''
                })
            }

        } else if (!req.body.chain) {
            const response = await getAllAssetsItemsFromDB()

            if (response.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "Data found successfully",
                    result: response

                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Data not found',
                    result: ''
                })
            }

        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getAllAssets }