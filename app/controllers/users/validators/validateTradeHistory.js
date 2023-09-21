const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateTradeHistory = [
    check('user')
        .exists()
        .withMessage('user MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter user'),
    check('pair')
        .exists()
        .withMessage('pair MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter pair'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateTradeHistory }
