const { matchedData } = require('express-validator')
const { verificationExists, verifyUser } = require('./helpers')
const User = require('../../models/user')
const Trade = require("../../models/tradeHistory");
const { handleError } = require('../../middleware/utils')
const web3 = require('web3')
/**
 * Verify function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const tradingViewData = async (req, res) => {
    try {
    
        const findData = { $and:[{$or:[{Trade_At:"exchange",},{Trade_At:"swapping"},{Trade_At:"farming"}]},{Pair:req?.body?.pair}]}
        console.log(findData)
        const data = await Trade.find(findData).sort({createdAt:1})
        const price = []
        const date = []
        if (data.length > 0) {
        for(i=0;i<data.length;i++){
         
            price.push(data[i]?.amount)
            date.push(data[i].createdAt.toLocaleDateString())
        }
        let chartData = {
            price:price,
            date:date
        }
        
            res.status(200).json({
                success: true,
                result: chartData,
                message: "Fetched Successfully"
            })
        } else {
            res.status(400).json({
                success: false,
                result: {},
                message: "No Detail Found"
            })
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { tradingViewData }
