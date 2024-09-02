const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const launchpad = require('../../models/launchpad')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateLaunchpadLogo = async (req, res) => {
    try {
        const data = matchedData(req)
        var already = await launchpad.findOne({ _id: data?.id })
        if (already) {
            const dataas = await launchpad.findOneAndUpdate({ _id: data?.id }, { Logo: data?.logo })
            if (dataas) {
                res.status(200).json({
                    success: true,
                    result: "",
                    message: 'Updated Successfully'
                })
            } else {
                res.status(200).json({
                    success: false,
                    result: "",
                    message: 'Something Went Wrong'
                })
            }

        } else {
            res.status(200).json({
                success: false,
                result: "",
                message: 'Data Not Found'
            })
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { updateLaunchpadLogo }