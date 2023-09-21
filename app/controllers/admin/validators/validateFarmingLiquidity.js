const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateFarmingLiquidity = [
    check('Allocation_Point')
        .exists()
        .withMessage('Allocation_Point MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Allocation Point')
        .trim(),
    check('LP_Token')
        .exists()
        .withMessage('LP_Token MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter LP Token')
        .trim(),
    check('Pool_Update')
        .exists()
        .withMessage('Pool_Update MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Pool Update')
        .trim(),
    check('contract_Address')
        .exists()
        .withMessage('contract_Address MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Contract Address')
        .trim(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateFarmingLiquidity }