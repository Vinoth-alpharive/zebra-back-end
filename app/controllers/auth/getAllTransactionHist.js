const { matchedData } = require("express-validator");
const { handleError } = require("../../middleware/utils");
const trade = require("../../models/tradeHistory");

/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getTransactionHist = async (req, res) => {
    try {
        req = matchedData(req)
        if (!req.pair && !req.trade_at) {
            const deta = await trade.find()
            res.status(200).json({
                success: true,
                result: deta,
                message: "Transaction History",
            })
        } else if (req.pair && req.trade_at == "swap") {
            const data = await trade.find({ Pair: req.pair, Trade_At: req.trade_at , Network: req.Network })
            res.status(200).json({
                success: true,
                result: data,
                message: "Data Found successfully",
            })
        } else if (req.pair && req.trade_at == "farming") {
            const hist = await trade.find({ Pair: req.pair, Trade_At: req.trade_at , Network: req.Network})
            res.status(200).json({
                success: true,
                result: hist,
                message: "Data Found successfully",
            })
        } else if (req.pair && req.trade_at == "exchange") {
            var datas = {
                Pair: req.pair,
                Trade_At: req.trade_at,
                Network: req.Network
            }
            if (req.side === "buy") {
                datas.Trade_type = "BUY"
            } else if (req.side === "sell") {
                datas.Trade_type = "SELL"
            }
            // console.log(datas, "asf")
            const list = await trade.find(datas)
            res.status(200).json({
                success: true,
                result: list,
                message: "Data Found successfully",
            })
        }
        else if (req.trade_at == "exchange") {
            const list = await trade.find({ Trade_At: req.trade_at , Network: req.Network })
            res.status(200).json({
                success: true,
                result: list,
                message: "Data Found successfully",
            })
        } else if (req.trade_at == "farming") {
            const list = await trade.find({ Trade_At: req.trade_at , Network: req.Network })
            res.status(200).json({
                success: true,
                result: list,
                message: "Data Found successfully",
            })
        } else if (req.trade_at == "swap") {
            const list = await trade.find({ Trade_At: req.trade_at , Network: req.Network})
            res.status(200).json({
                success: true,
                result: list,
                message: "Data Found successfully",
            })
        }
    } catch (error) {
        handleError(res, error);
    }
}


module.exports = { getTransactionHist };
