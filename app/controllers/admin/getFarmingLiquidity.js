const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/farmingAddLiquidity')
const reward = require('../../models/farmingPairs')
const Web3 = require('web3')
const erc20ABI = require('../../middleware/web3/Abi/erc20Abi.json')
const mongoose = require('mongoose')
const { now } = require('mongoose')
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
                console.log(req.body._id, "id")
                let agg
                const dates = Math.floor(new Date().getTime() / 1000)
                if ((!req.body.search || req.body.search === "") && req.body._id) {
                    agg = [
                        { $match: {} },
                        {
                            $lookup: {
                                from: "farmingpairs",
                                localField: "contract_Address",
                                foreignField: "contractAddress",
                                as: "pair"
                            }
                        },
                        { $unwind: "$pair" },
                        {
                            $lookup: {
                                from: "networks",
                                localField: "pair.Network",
                                foreignField: "_id",
                                as: "Network"
                            }
                        },
                        { $unwind: "$Network" },
                        // { $match: { 'pair.Network': mongoose.Types.ObjectId(req.body._id) } },
                        //   {  $match: { 'pair.End_Time': {  $gte: dates } } }
                    ]
                    if (req.body.usr_address != "") {
                        agg = [...agg,
                        // { $unwind: { path: "$user_address", preserveNullAndEmptyArrays: true } },
                        // {
                        //     $match: {
                        //         $or: [
                        //             // { 'user_address.user_address': req.body.usr_address },
                        //             // { 'user_address': { $exists: false } },
                        //             // { 'user_address.user_address': { $ne: req.body.usr_address } },
                        //             // { 'user_address': { $exists: true } }
                        //         ]
                        //     }
                        // },
                        {
                            $lookup: {
                                from: "tradehistories",
                                localField: "user_address.tradeIds",
                                foreignField: "_id",
                                as: "trades"
                            }
                        },

                        {
                            $unwind: { path: "$trades", preserveNullAndEmptyArrays: true }
                        },
                            // {
                            //     $group: {
                            //         _id: '$_id',
                            //         document: { $first: '$$ROOT' },
                            //         trades: { $push: '$trades' }
                            //     }
                            // },
                            // {
                            //     $replaceRoot: { newRoot: '$document' }
                            // }
                        ]
                    }
                    if (req.body.status === "live") {
                        agg = [...agg, { $match: { 'pair.End_Time': { $gte: dates } } }]
                    }
                    else if (req.body.status === "finish") {
                        agg = [...agg, { $match: { 'pair.End_Time': { $lte: dates } } }]
                    }
                    const response = await assets.aggregate(agg)

                    var ids = []
                    var resps = []
                    console.log(response.length, "lend")
                    for (let i = 0; i < response.length; i++) {
                        const element = response[i];
                        console.log(ids, "ids")
                        console.log(!ids.includes(element?._id), "idaf")
                        if (!ids.includes((element?._id)?.toString())) {
                            ids.push((element?._id)?.toString())
                            resps.push(element)
                        }
                    }
                    res.status(200).json({
                        success: true,
                        result: resps,
                        message: 'Farming Pairs Fetched Successfully'
                    })
                }
                else if (req.body.search && req.body._id) {
                    const tokenSymbol = await assets.find({ Token_Symbol: new RegExp(req.body.search, 'i') })
                    const rewardToken = await reward.find({ Reward_Token_Symbol: new RegExp(req.body.search, 'i') })
                    const dates = Math.floor(new Date().getTime() / 1000)

                    console.log(tokenSymbol.length, rewardToken)
                    if (tokenSymbol.length > 0) {
                        agg = [
                            { $match: { 'Token_Symbol': new RegExp(req.body.search, 'i') } },
                            {
                                $lookup: {
                                    from: "farmingpairs",
                                    localField: "contract_Address",
                                    foreignField: "contractAddress",
                                    as: "pair"
                                }
                            },
                            { $unwind: "$pair" },
                            { $match: { 'pair.Network': mongoose.Types.ObjectId(req.body._id) } }
                        ]
                        if (req.body.status === "live") {
                            agg = [...agg, { $match: { 'pair.End_Time': { $gte: dates } } }]
                        }
                        else if (req.body.status === "finish") {
                            agg = [...agg, { $match: { 'pair.End_Time': { $lte: dates } } }]
                        }
                        const response = await assets.aggregate(agg)
                        res.status(200).json({
                            success: true,
                            result: response,
                            message: 'Farming Pairs Fetched Successfully'
                        })
                    }
                    else if (rewardToken.length > 0) {
                        agg = [
                            { $match: {} },
                            {
                                $lookup: {
                                    from: "farmingpairs",
                                    localField: "contract_Address",
                                    foreignField: "contractAddress",
                                    as: "pair"
                                }
                            },
                            { $unwind: "$pair" },
                            { $match: { 'pair.Network': mongoose.Types.ObjectId(req.body._id), 'pair.Reward_Token_Symbol': new RegExp(req.body.search, 'i') } }
                        ]
                        if (req.body.status === "live") {
                            agg = [...agg, { $match: { 'pair.End_Time': { $gte: dates } } }]
                        }
                        else if (req.body.status === "finish") {
                            agg = [...agg, { $match: { 'pair.End_Time': { $lte: dates } } }]
                        }
                        const response = await assets.aggregate(agg)
                        res.status(200).json({
                            success: true,
                            result: response,
                            message: 'Farming Pairs Fetched Successfully'
                        })
                    }
                    else {
                        res.status(400).json({
                            success: false,
                            result: null,
                            message: 'Please Enter Contract Address'
                        })
                    }

                }
                else {
                    res.status(400).json({
                        success: false,
                        result: null,
                        message: 'Please Enter Contract Address'
                    })
                }
                //  console.log(agg, "agg")

            } else {
                let agg
                const dates = Math.floor(new Date().getTime() / 1000)

                if ((!req.body.search || req.body.search === "") && req.body.contract) {
                    agg = [
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
                    ]
                }
                else {
                    agg = [
                        { $match: { contract_Address: req.body.contract, 'Token_Symbol': new RegExp(req.body.search, 'i') } },
                        {
                            $lookup: {
                                from: "farmingpairs",
                                localField: "contract_Address",
                                foreignField: "contractAddress",
                                as: "pair"
                            }
                        },
                        { $unwind: "$pair" }
                    ]
                }
                if (req.body.status === "live") {
                    agg = [...agg, { $match: { 'pair.End_Time': { $gte: dates } } }]
                }
                else if (req.body.status === "finish") {
                    agg = [...agg, { $match: { 'pair.End_Time': { $lte: dates } } }]
                }
                const response = await assets.aggregate(agg)
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