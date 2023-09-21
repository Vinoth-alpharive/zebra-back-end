const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateCreateTrade = [
    check('Pair')
        .exists()
        .withMessage('Pair MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Trade pair'),
    check('Amount')
        .exists()
        .withMessage('Amount MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Amount'),
    check('Price')
        .exists()
        .withMessage('Price MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Price'),
    check('User_Address')
        .exists()
        .withMessage('User_Address MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter User Address'),

    check('Trade_type')
        .exists()
        .withMessage('Trade_type MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Trade Type'),
    check('Trade_At')
        .exists()
        .withMessage('Trade_At MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Trade At'),
    check('Coin_name')
        .exists()
        .withMessage('Coin_name MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter BUY Coin'),
    check('Trade_id'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreateTrade }
