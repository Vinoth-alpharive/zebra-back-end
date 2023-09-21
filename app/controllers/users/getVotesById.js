const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/voting')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getVotesById = async (req, res) => {
    try {
        if (req.body.id) {
            const respose = await assets.findOne({ Proposal_Id: req.body.id })
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
                message: 'Please Enter id'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getVotesById }