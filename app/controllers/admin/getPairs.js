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
const getPairs = async (req, res) => {
    try {
        if (req.body.id) {
            if (req.body.id === "all") {
                // const respose = await assets.find({ status: "true", isVisible: true }).populate('network')
                const response = await assets.aggregate([
                    { $match: { status: "true", isVisible: true } },
                    {
                        $lookup: {
                            from: "networks",
                            localField: "network",
                            foreignField: "_id",
                            as: "network"
                        }
                    },
                    { $match: { 'network.isVisible': true } },
                    { $unwind: '$network' }
                ])
                res.status(200).json({
                    success: true,
                    result: response,
                    message: 'Pairs Fetched Successfully'
                })
            } else {
                const respose = await assets.find({ status: "true", network: req.body.id, isVisible: true }).populate('network')
                const data = []
                res.status(200).json({
                    success: true,
                    result: respose,
                    message: 'Pairs Fetched Successfully'
                })
            }

        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: 'Please Enter id'
            })
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getPairs }