const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateGetTransactionHist = [
    check('pair').optional()
        .exists()
        .withMessage('pair MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter pair'),

    check('trade_at').optional()
        .exists()
        .withMessage('trade_at MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter TradeAt'),

    check('side').optional(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateGetTransactionHist }
