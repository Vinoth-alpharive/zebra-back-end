const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const {
    emailExists,
    sendRegistrationEmailMessage
} = require('../../middleware/emailer')
const { createItemInDb } = require('./helpers')
const Kyc = require('../../models/kyc')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getKycList = async (req, res) => {
    try {
        // const data = await matchedData(req)
        // data.user_id = req.user._id
        const response = await Kyc.find()
        res.status(200).json({
            success: true,
            result: response,
            message: "Logged in successfully"
        })
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getKycList }