const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateCreateVoting = [
    check('Title')
        .exists()
        .withMessage('Title MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Title')
        .trim(),
    check('Content')
        .exists()
        .withMessage('Content MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Content')
        .trim(),
    check('Choice1')
        .exists()
        .withMessage('Choice1 MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Choice1')
        .trim(),
    check('Choice2')
        .exists()
        .withMessage('Choice2 MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Choice2')
        .trim(),
    check('Start_Date')
        .exists()
        .withMessage('Start_Date MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Start Date')
        .trim(),
    check('Start_Time')
        .exists()
        .withMessage('Start_Time MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Start Time')
        .trim(),
    check('End_Date')
        .exists()
        .withMessage('End_Date MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter End Date')
        .trim(),
    check('End_Time')
        .exists()
        .withMessage('End_Time MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter End Time')
        .trim(),
    check('startTimeStamp')
        .exists()
        .withMessage('startTimeStamp MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Start Timestamp')
        .trim(),
    check('endTimeStamp')
        .exists()
        .withMessage('endTimeStamp MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter End Timestamp')
        .trim(),
    check('Address')
        .exists()
        .withMessage('Address MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Address')
        .trim(),
    check('Proposal_Id')
        .exists()
        .withMessage('Proposal_Id MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Proposal Id')
        .trim(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreateVoting }