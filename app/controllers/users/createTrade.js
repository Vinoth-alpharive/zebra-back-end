const { matchedData } = require("express-validator");
const { handleError } = require("../../middleware/utils");
const trade = require("../../models/tradeHistory");

/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createTrade = async (req, res) => {
    try {
        req = matchedData(req)
        const data = await trade.create(req)
        res.status(200).json({
            success: true,
            result: data,
            message: "Trade Created Successfully",
        });
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = { createTrade };
