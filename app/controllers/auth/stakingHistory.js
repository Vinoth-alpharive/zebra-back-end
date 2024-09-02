const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const User = require('../../models/tradeHistory')
const mongoose = require('mongoose')

/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const stakingHistory = async (req, res) => {
    try {
        if (req.body.address) {
            // const data = await User.find({ User_Address: req.body.address, Trade_At: "Staking", Trade_type: "staked" }).populate('Trade_id').sort({ createdAt: -1 })
            const data = await User.aggregate([
                {
                    $match: { User_Address: req.body.address, Trade_At: "Staking", Trade_type: "staked" }
                },
                {
                    $lookup: {
                        from: "stakingpairs",
                        localField: "Trade_id",
                        foreignField: "_id",
                        as: "Trade_id"
                    }
                },
                {
                    $unwind: '$Trade_id'
                }, {
                    $lookup: {
                        from: "networks",
                        localField: "Trade_id.Network",
                        foreignField: "_id",
                        as: "Network"
                    }
                }, {
                    $unwind: '$Network'
                },
                // {
                //     $match: { 'Trade_id.Network': mongoose.Types.ObjectId(req.body._id) }
                // }
            ])
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
