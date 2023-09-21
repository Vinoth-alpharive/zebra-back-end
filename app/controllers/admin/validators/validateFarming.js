const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateFarming = [
    check('Network')
        .exists()
        .withMessage('Network MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Network')
        .trim(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateFarming }