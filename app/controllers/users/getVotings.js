const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/voting')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getVotings = async (req, res) => {
    try {
        if (req.body.id) {
            // const data = new Date().getTime();
            // console.log("🚀 ~ getVotings ~ data:", data)
            var respose
            if (req.body.id === "all") {
                respose = await assets.find({ startTimeStamp: { $lt: req.body.data }, endTimeStamp: { $gt: req.body.data } })
            } else if (req.body.id === "soon") {
                respose = await assets.find({ startTimeStamp: { $gt: req.body.data } })
            } else if (req.body.id === "closed") {
                respose = await assets.find({ endTimeStamp: { $lt: req.body.data } })
            }
            // const respose = await assets.aggregate([
            //     { $match: { $and: [{ startTimeStamp: { $lt: data } }] } }
            // ])
            if (respose) {
                res.status(200).json({
                    success: true,
                    result: respose,
                    message: 'Get Voted Successfully'
                })
            } else {
                res.status(400).json({
                    success: false,
                    result: null,
                    message: 'SomeThing Went Wrong'
                })
            }
        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: 'please Enter id'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getVotings }