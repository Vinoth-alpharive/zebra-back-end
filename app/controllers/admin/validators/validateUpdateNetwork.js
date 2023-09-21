const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateUpdateNetwork = [
    check('id')
        .exists()
        .withMessage('id MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter id')
        .trim(),

    check('chain')
        .exists()
        .withMessage('chain MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Chain')
        .trim(),

    check('rpc_Url')
        .exists()
        .withMessage('rpc_Url MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Rpc Url')
        .trim(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateUpdateNetwork }