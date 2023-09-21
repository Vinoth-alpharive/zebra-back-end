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
const createKYC = async (req, res) => {
    try {
        const users = req.user
        const data = await matchedData(req)
        data.user_id = users._id


        const user = await Kyc.findById({ _id: users._id })
        if (user) {
            res.status(400).json({
                success: false,
                result: null,
                message: "User Already Apply Kyc"
            })
        } else {
            
            const response = await Kyc.create(data)
            res.status(200).json({
                success: true,
                result: null,
                message: "KYC Submitted Successfully"
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { createKYC }
