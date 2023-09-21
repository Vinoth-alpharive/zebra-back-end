const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const Network = require('../../models/network')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const UpdateNetwork = async (req, res) => {
    try {
        req = matchedData(req)
        const respose = await Network.find()
        if (respose.length > 0) {
            const response = await Network.findByIdAndUpdate({ _id: req.id }, {name:req.chain,rpc_Url:req.rpc_Url})
            res.status(200).json({
                success: true,
                result: response,
                message: 'Network Updated Successfully'
            })
        }
    }
    catch (error) {
        handleError(res, error)
    }
}

module.exports = { UpdateNetwork }