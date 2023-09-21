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
const verifyKyc = async (req, res) => {
    try {
        const data = await matchedData(req)
        // data.user_id = req.user._id
        const response = await Kyc.findOne({ _id: data._id })
        if (response) {
            if (response.status === "0") {
                if (data.status === '1') {
                    await Kyc.findOneAndUpdate({ _id: data._id }, { status: '1' })
                    res.status(200).json({
                        success: true,
                        result: response,
                        message: "Verified Successfully"
                    })
                } else {
                    await Kyc.findOneAndUpdate({ _id: data._id }, { status: '2', reason: data.reason })
                    res.status(200).json({
                        success: true,
                        result: response,
                        message: "Verified Successfully"
                    })
                }
            } else {
                res.status(400).json({
                    success: false,
                    result: null,
                    message: "KYC Already Verified"
                })
            }

        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: "User Not found"
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { verifyKyc }