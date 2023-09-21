const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateFarmingPairs = [
    check('Reward_Token')
        .exists()
        .withMessage('Reward_Token MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Reward Token')
        .trim(),
    check('Dev_Address')
        .exists()
        .withMessage('Dev_Address MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Dev Address')
        .trim(),
    check('Reward_Per_Sec')
        .exists()
        .withMessage('Reward_Per_Sec MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Reward Per Seconds')
        .trim(),
    check('Start_Time')
        .exists()
        .withMessage('Start_Time MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Start Time')
        .trim(),
    check('End_Time')
        .exists()
        .withMessage('End_Time MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter End Time')
        .trim(),
    check('Network')
        .exists()
        .withMessage('Network MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Network')
        .trim(),
    check('contractAddress')
        .exists()
        .withMessage('contractAddress MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Contract Address')
        .trim(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateFarmingPairs }