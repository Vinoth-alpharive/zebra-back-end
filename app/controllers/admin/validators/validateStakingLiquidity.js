const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateStakingLiquidity = [
    check('_id')
        .exists()
        .withMessage('_id MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Id')
        .trim(),
    check('Allocation_Point')
        .exists()
        .withMessage('Allocation_Point MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Allocation Point')
        .trim(),
    check('Pool_Update')
        .exists()
        .withMessage('Pool_Update MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Pool Update')
        .trim(),
    check('Min_Deposit')
        .exists()
        .withMessage('Min_Deposit MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Min Deposit')
        .trim(),
    check('Lock_Period')
        .exists()
        .withMessage('Lock_Period MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Lock period')
        .trim(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateStakingLiquidity }