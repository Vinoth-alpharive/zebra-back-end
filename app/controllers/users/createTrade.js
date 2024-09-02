const { matchedData } = require("express-validator");
const { handleError } = require("../../middleware/utils");
const trade = require("../../models/tradeHistory");
const farmingLiquidityPairs = require('../../models/farmingAddLiquidity')

/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createTrade = async (req, res) => {
    try {
        req = matchedData(req)
        if (req.Trade_At == "farming") {
            if (req.Trade_type == "staked") {
                const already = await trade.findOne({ Pair: req.Pair, User_Address: req.User_Address, status: 0 })
                if (already) {
                    await trade.findOneAndUpdate({ _id: already }, { status: 1 })
                    await farmingLiquidityPairs.findOneAndUpdate({ _id: req.Trade_id, 'user_address.user_address': req?.User_Address }, { 'user_address.$.stake': true })
                    await farmingLiquidityPairs.findOneAndUpdate({ _id: req.Trade_id }, { $inc: { totalLiquidity: Number(req?.Amount) } })
                    res.status(200).json({
                        success: true,
                        result: already,
                        message: "Trade Created Successfully",
                    });
                } else {
                    const data = await trade.create(req)
                    await farmingLiquidityPairs.findOneAndUpdate({ _id: req.Trade_id }, { $push: { user_address: { user_address: req.User_Address, tradeIds: data?._id, stake: true } } })
                    await farmingLiquidityPairs.findOneAndUpdate({ _id: req.Trade_id }, { $inc: { totalLiquidity: Number(req?.Amount) } })
                    res.status(200).json({
                        success: true,
                        result: data,
                        message: "Trade Created Successfully",
                    });
                }
            } else {
                const already = await trade.findOne({ Pair: req.Pair, User_Address: req.User_Address, status: 1 })
                if (already) {
                    console.log("🚀 ~ createTrade ~ already:", already)
                    await trade.findOneAndUpdate({ _id: already }, { status: 0 })
                    await farmingLiquidityPairs.findOneAndUpdate({ _id: already.Trade_id, 'user_address.user_address': req?.User_Address }, { 'user_address.$.stake': false })
                    console.log(-Number(req?.Amount), "Asdfsdf")
                    await farmingLiquidityPairs.findOneAndUpdate({ _id: already.Trade_id }, { $inc: { totalLiquidity: -Number(req?.Amount) } })
                    res.status(200).json({
                        success: true,
                        result: already,
                        message: "Trade Created Successfully",
                    });
                } else {
                    console.log("new")
                    const data = await trade.create(req)
                    res.status(200).json({
                        success: true,
                        result: data,
                        message: "Trade Created Successfully",
                    });
                }
            }


        } else {
            const data = await trade.create(req)
            res.status(200).json({
                success: true,
                result: data,
                message: "Trade Created Successfully",
            });
        }

    } catch (error) {
        handleError(res, error);
    }
};

module.exports = { createTrade };
