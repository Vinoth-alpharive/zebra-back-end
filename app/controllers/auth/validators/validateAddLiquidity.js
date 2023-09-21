const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates verify request
 */
const validateAddLiquidity = [
    check('TokenA')
        .exists()
        .withMessage('TokenA MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter TokenA'),
    check('TokenB')
        .exists()
        .withMessage('TokenB MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter TokenB'),
    check('TokenA_Amount')
        .exists()
        .withMessage('TokenA_Amount MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter TokenA_Amount'),
    check('TokenB_Amount')
        .exists()
        .withMessage('TokenB_Amount MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter TokenB_Amount'),
    check('TokenA_Min')
        .exists()
        .withMessage('TokenA_Min MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter TokenA_Min'),
    check('TokenB_Min')
        .exists()
        .withMessage('TokenB_Min MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter TokenB_Min'),
    check('address')
        .exists()
        .withMessage('address MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter address'),
    check('Time')
        .exists()
        .withMessage('Time MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Time'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateAddLiquidity }
