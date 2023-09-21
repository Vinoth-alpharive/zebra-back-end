const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateAddNetwork = [
    check('name')
        .exists()
        .withMessage('name MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Name')
        .trim(),
    check('rpc_Url')
        .exists()
        .withMessage('rpc_Url MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter RPC_URL')
        .trim(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateAddNetwork }