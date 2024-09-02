const { handleError } = require('../../middleware/utils')
const launchPad = require('../../models/launchtransaction')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const launchpadhistory = async (req, res) => {
    try {
    
        let data = req.body.address
        
        if(data){
        const datas = await launchPad.findOne({User_address : data})
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
        }else{   
        const datas = await launchPad.find()
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
        }
        
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { launchpadhistory }