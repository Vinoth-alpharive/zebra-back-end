const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const launchpad = require('../../models/launchpad')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateLaunchPadStatus = async (req, res) => {
    try {
        const data = matchedData(req)
        var already = await launchpad.findOne({ _id: data?.id })
        if (already) {
            if (data?.status == false) {
                if (already?.Status != false) {
                    await launchpad.findOneAndUpdate({ _id: data?.id }, { Status: data?.status })
                    res.status(200).json({
                        success: true,
                        result: "",
                        message: 'Updated Successfully'
                    })
                } else {
                    res.status(200).json({
                        success: false,
                        result: "",
                        message: 'Already Blocked'
                    })
                }
            } else {
                if (already?.Status != true) {
                    await launchpad.findOneAndUpdate({ _id: data?.id }, { Status: data?.status })
                    res.status(200).json({
                        success: true,
                        result: "",
                        message: 'Updated Successfully'
                    })
                } else {
                    res.status(200).json({
                        success: false,
                        result: "",
                        message: 'Already Approved'
                    })
                }
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

module.exports = { updateLaunchPadStatus }