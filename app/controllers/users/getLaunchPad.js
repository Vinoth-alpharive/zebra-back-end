const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const launchpad = require('../../models/launchpad')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getLaunchPad = async (req, res) => {
    try {
        
        var tdate = Date.now()/1000
        if (req.body.type) {
            if (req.body.type == "admin") {
                // console.log('admin');
                var datas = await launchpad.find()
                res.status(200).json({
                    success: true,
                    result: datas,
                    message: 'Fetched Successfully'
                })
            } else if (req.body.type == "user") {
                var datas = await launchpad.find({ Status: true })
                res.status(200).json({
                    success: true,
                    result: datas,
                    message: 'Fetched Successfully'
                })
            } else if (req.body.type == "disabled") {
                var datas = await launchpad.find({ Status: false })
                res.status(200).json({
                    success: true,
                    result: datas,
                    message: 'Fetched Successfully'
                })
            } else if (req.body.type == "sale") {
                var datas = await launchpad.find({ Owner_address: {$ne : req.body.id},  End_date_timeStamp: {$gt : tdate},Status: true})
                res.status(200).json({
                    success: true,
                    result: datas,
                    message: 'Fetched Successfully'
                })
            } 
            else {
                var datas = await launchpad.find({ Owner_address: req.body.type })
                res.status(200).json({
                    success: true,
                    result: datas,
                    message: 'Fetched Successfully'
                })
            }
        } else {
            res.status(200).json({
                success: false,
                result: "",
                message: 'Please Enter type'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getLaunchPad }