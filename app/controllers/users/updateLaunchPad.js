const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const launchpad = require('../../models/launchpad')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateLaunchPad = async (req, res) => {
    try {
        console.log(req.body, '*******************');
        const launchId = req.body.id
        var approvedLaunchPad;

        // if (req.body.logo != '') {
        //     if (req.body.logo != '' && req.body.Status !== '') {
        //         var updateData;

        //         updateData = {
        //             Logo: req.body.logo,
        //             Status: req.body.Status
        //         }
        //     } else if (req.body.logo != '') {
        //         updateData = {
        //             Logo: req.body.logo
        //         }
        //     }

        //     approvedLaunchPad = await launchpad.findByIdAndUpdate(launchId, updateData)
        // } else {
        //     const updateData = {
        //         Status: req.body.Status
        //     }
        //     approvedLaunchPad = await launchpad.findOneAndUpdate({ _id: launchId }, updateData)
        // }
        let obj
        obj = req?.body
        // console.log(obj);

        if (obj) {
            approvedLaunchPad = await launchpad.findByIdAndUpdate(obj.id, obj)
        }
        // console.log(approvedLaunchPad, 'approved');

        if (approvedLaunchPad) {
            res.status(200).json({
                success: true,
                result: [],
                message: 'LaunchPad Updated Successfully'
            })
        } else {
            res.status(200).json({
                success: false,
                result: [],
                message: 'Something Went Wrong'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { updateLaunchPad }