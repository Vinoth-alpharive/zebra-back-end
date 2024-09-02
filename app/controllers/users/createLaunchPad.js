const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const launchPad = require('../../models/launchpad')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createLaunchPad = async (req, res) => {
    try {
        const data = matchedData(req)
        console.log("🚀 ~ createLaunchPad ~ data:", data)
        // Split the date string into day, month, and year
        var parts = data?.Start_date?.split('-');
        console.log(parts,'*******************');
        // Create a new Date object with the given date
        // var date = new Date(parts[2], parts[1] - 1, parts[0]); // month is 0-indexed in JavaScript
        var date = new Date(data?.Start_date);
        console.log(date,'DATEDATEDATE');
        // Get the timestamp
        var timestamp = date.getTime();
        console.log("🚀 ~ createLaunchPad ~ timestamp:", timestamp)
        data.Start_date_timeStamp = timestamp

        // var parts1 = data?.End_date?.split('-');
        var parts1 = data?.End_date;

        // Create a new Date object with the given date
        var date1 = new Date(parts1); // month is 0-indexed in JavaScript

        // Get the timestamp
        var timestamp1 = date1.getTime();
        console.log("🚀 ~ createLaunchPad ~ timestamp:", timestamp1)
        data.End_date_timeStamp = timestamp1
        const datas = await launchPad.create(data)
        if (datas) {
            res.status(200).json({
                success: true,
                result: datas,
                message: 'Thank you for submitting, our team will review this and be in touch'
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

module.exports = { createLaunchPad }