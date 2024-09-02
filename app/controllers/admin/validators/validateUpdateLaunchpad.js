const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateUpdateLaunchpad = [
    check('id')
        .exists()
        .withMessage('id MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter id')
        .trim(),
    check('status')
        .exists()
        .withMessage('status MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Status')
        .trim(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateUpdateLaunchpad }