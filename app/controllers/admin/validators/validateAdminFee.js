const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateAdminFee = [
    check('_id')
        .exists()
        .withMessage('_id MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter _id')
        .trim(),
    check('Address')
        .exists()
        .withMessage('Address MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Address')
        .trim(),
    check('Percentage')
        .exists()
        .withMessage('Percentage MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Percentage')
        .trim(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateAdminFee }