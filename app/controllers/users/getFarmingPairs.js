const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/tradeHistory')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getFarmingPairs = async (req, res) => {
    try {
        if (req.body.address) {
            const respose = await assets.find({ User_Address: req.body.address, Trade_At: 'farming', status: 1 })
            if (respose) {
                res.status(200).json({
                    success: true,
                    result: respose,
                    message: 'Get Voted Successfully'
                })
            } else {
                res.status(400).json({
                    success: false,
                    result: null,
                    message: 'SomeThing Went Wrong'
                })
            }
        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: 'Please Enter Address'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getFarmingPairs }