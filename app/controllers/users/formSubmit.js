const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const {
    emailExists,
    sendRegistrationEmailMessage,
    sendFormDetails
} = require('../../middleware/emailer')
const { createItemInDb } = require('./helpers')
const form = require('../../models/form')
const ejs = require('ejs')
const path = require('path')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const formSubmit = async (req, res) => {
    try {
        const locale = req.getLocale()
        // const users = req.user
        const data = req.body
        // data.user_id = users._id

        const response = await form.create(data)
        if (response) {
            console.log("🚀 ~ formSubmit ~ response:", response)
            var item = {
                email: 'support@zebraswap.exchange',
                name: 'admin'
            }
            console.log("🚀 ~ formSubmit ~ item:", item)
            const filedata = path.join(__dirname, '../../../views/verify.ejs')
            console.log("🚀 ~ formSubmit ~ filedata:", filedata)
            ejs.renderFile(
                filedata,
                { username: response?.Project_Name, image: `https://zebraswap.exchange/zebraadmin/Forms`, token: response?.Token_Ticker, website: response?.Website },
                async (err, str) => {
                    if (err) {
                        console.log("🚀 ~ err:", err)
                        return err
                    } else {
                        await sendFormDetails(locale, item, str)
                    }
                }
            )
            res.status(200).json({
                success: true,
                result: response,
                message: "Form Submited Successfully"
            })
        } else {
            res.status(200).json({
                success: false,
                result: null,
                message: "something went wrong"
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { formSubmit }
