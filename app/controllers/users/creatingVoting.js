const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/voting')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const creatingVoting = async (req, res) => {
    try {
        const datas = matchedData(req)
        const combinedDateTimeString = `${datas.Start_Date}T${datas.Start_Time}`;

        function formatDateToMongoDBFormat(dateString, timeString) {
            const combinedDateTimeString = `${dateString}T${timeString}`;
            const dateObject = new Date(combinedDateTimeString);
            const formattedDate = dateObject.toISOString().replace(/\.\d+/, '');
            return formattedDate;
        }

        const d = datas?.Start_Date.split('-')[1].length
        const d1 = datas?.End_Date.split('-')[1].length
        if (d === 1) {
            datas.Start_Date = `${datas.Start_Date.split('-')[0]}-0${datas.Start_Date.split('-')[1]}-${datas.Start_Date.split('-')[2]}`
        }
        if (d1 === 1) {
            datas.End_Date = `${datas.End_Date.split('-')[0]}-0${datas.End_Date.split('-')[1]}-${datas.End_Date.split('-')[2]}`
        }
        const formattedDate = formatDateToMongoDBFormat(datas.Start_Date, datas.Start_Time);
        const formattedDate1 = formatDateToMongoDBFormat(datas.End_Date, datas.End_Time);
        datas.startTimeStamp = new Date(formattedDate).getTime()
        datas.endTimeStamp = new Date(formattedDate1).getTime()
        const respose = await assets.create(datas)
        if (respose) {
            res.status(200).json({
                success: true,
                result: respose,
                message: 'Voting Created Successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: 'SomeThing Went Wrong'
            })
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { creatingVoting }