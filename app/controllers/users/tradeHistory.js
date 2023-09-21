const { matchedData } = require("express-validator");
const { handleError } = require("../../middleware/utils");
const trade = require("../../models/tradeHistory");

/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const tradeHistory = async (req, res) => {
    try {
        req = matchedData(req)
        const data = await trade.find({ User_Address: req.user.toLowerCase(), Pair: req.pair, Trade_At: "exchange" })
        res.status(200).json({
            success: true,
            result: data,
            message: "Trade History",
        });
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = { tradeHistory };
