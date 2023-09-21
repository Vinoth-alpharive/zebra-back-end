const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/adminFee')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const addAdminFee = async (req, res) => {
    try {
        req = matchedData(req)
        const respose = await assets.find()
        if (respose.length > 0) {
            const response = await assets.findByIdAndUpdate({ _id: respose[0]._id }, req)
            res.status(200).json({
                success: true,
                result: response,
                message: 'Fee Updated Successfully'
            })
        }
    }
    catch (error) {
        handleError(res, error)
    }
}

module.exports = { addAdminFee }