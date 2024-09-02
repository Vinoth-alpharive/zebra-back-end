const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateAddTokens = [
    check('token1')
        .exists()
        .withMessage('token1 MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Address1')
        .trim(),
    check('token2')
        .exists()
        .withMessage('token2 MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Address2')
        .trim(),
    check('chain')
        .exists()
        .withMessage('chain MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Chain')
        .trim(),
    check('factory_contract')
        .exists()
        .withMessage('factory_contract MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter factory_contract')
        .trim(),
    check('factory_Abi')
        .exists()
        .withMessage('factory_Abi MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter factory_Abi')
        .trim(),
    check('router_contract')
        .exists()
        .withMessage('router_contract MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter router_contract')
        .trim(),
    check('router_Abi')
        .exists()
        .withMessage('router_Abi MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter router_Abi')
        .trim(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateAddTokens }