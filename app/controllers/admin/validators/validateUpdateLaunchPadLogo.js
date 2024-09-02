const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateUpdateLaunchPadLogo = [
    check('id')
        .exists()
        .withMessage('id MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter id')
        .trim(),
    check('logo')
        .exists()
        .withMessage('logo MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Logo')
        .trim(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateUpdateLaunchPadLogo }