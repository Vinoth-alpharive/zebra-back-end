const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/farmingAddLiquidity')
const Web3 = require('web3')
const erc20ABI = require('../../middleware/web3/Abi/erc20Abi.json')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getFarmingLiquidity = async (req, res) => {
    try {
        if (req.body.contract) {
            // const respose = await assets.find({ contract_Address: req.body.contract })
            if (req.body.contract === "all") {
                const response = await assets.aggregate([
                    { $match: {} },
                    {
                        $lookup: {
                            from: "farmingpairs",
                            localField: "contract_Address",
                            foreignField: "contractAddress",
                            as: "pair"
                        }
                    },
                    { $unwind: "$pair" }
                ])
                res.status(200).json({
                    success: true,
                    result: response,
                    message: 'Farming Pairs Fetched Successfully'
                })
            } else {
                const response = await assets.aggregate([
                    { $match: { contract_Address: req.body.contract } },
                    {
                        $lookup: {
                            from: "farmingpairs",
                            localField: "contract_Address",
                            foreignField: "contractAddress",
                            as: "pair"
                        }
                    },
                    { $unwind: "$pair" }
                ])
                res.status(200).json({
                    success: true,
                    result: response,
                    message: 'Farming Pairs Fetched Successfully'
                })
            }

        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: 'Please Enter Contract Address'
            })
        }


    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getFarmingLiquidity }