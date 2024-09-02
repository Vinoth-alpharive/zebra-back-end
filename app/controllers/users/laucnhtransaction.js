const { handleError } = require('../../middleware/utils')
const launchPad = require('../../models/launchtransaction')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const laucnhtransaction = async (req, res) => {
    try {
    
        let data = req.body.payload
        console.log(data)
        const datas = await launchPad.create(data)
        if (datas) {
            res.status(200).json({
                success: true,
                result: datas,
                message: 'Transaction successfull'
            })
        } else {
            res.status(200).json({
                success: false,
                result: "",
                message: 'Something Went Wrong'
            })
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { laucnhtransaction }