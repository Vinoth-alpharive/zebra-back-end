const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const User = require('../../models/tradeHistory')

/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const stakingHistory = async (req, res) => {
    try {
        if (req.body.address) {
            const data = await User.find({ User_Address: req.body.address, Trade_At: "Staking", Trade_type: "staked" }).populate('Trade_id').sort({ createdAt: -1 })
            if (data.length > 0) {
                res.status(200).json({
                    success: true,
                    result: data,
                    message: "Fetched Successfully"
                })
            } else {
                res.status(200).json({
                    success: true,
                    result: [],
                    message: "No Detail Found"
                })
            }
        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: "Please Enter User Address"
            })
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { stakingHistory }
