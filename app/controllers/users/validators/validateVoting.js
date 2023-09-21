const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateVoting = [
    check('vote_id')
        .exists()
        .withMessage('vote_id MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Vote Id')
        .trim(),
    check('vote_for')
        .exists()
        .withMessage('vote_for MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Vote For')
        .trim(),
    check('Address')
        .exists()
        .withMessage('Address MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Address')
        .trim(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateVoting }