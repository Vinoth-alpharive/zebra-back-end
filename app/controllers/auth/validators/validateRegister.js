const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates register request
 */
const validateRegister = [
  check('name')
    .exists()
    .withMessage('name MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Name'),

  check('email')
    .exists()
    .withMessage('email MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Email')
    .isEmail()
    .withMessage('Please Enter Valid Email'),

  check('password')
    .exists()
    .withMessage('password MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Password')
    .matches(/(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$)+/)
    .withMessage('Password must be a minimum 8 characters & Maximum 16 characters.Eg: Abc@123')
    .isLength({
      min: 5
    })
    .withMessage('Password is Too Short'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateRegister }
