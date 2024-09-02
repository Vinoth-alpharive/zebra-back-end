const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const User = require('../../models/tradeHistory')
const mongoose = require('mongoose')
const forms1 = require('../../models/form')
/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const forms = async (req, res) => {
    try {
        const response = await forms1.find({}).sort({ createdAt: -1 })
        res.status(200).json({
            success: true,
            result: response,
            message: "Please Enter User Address"
        })
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { forms }
