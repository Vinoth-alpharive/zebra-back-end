const { validateForgotPassword } = require('./validateForgotPassword')
const { validateLogin } = require('./validateLogin')
const { validateRegister } = require('./validateRegister')
const { validateResetPassword } = require('./validateResetPassword')
const { validateVerify } = require('./validateVerify')
const { validate2fa } = require('./validate2fa')
const { validateVerifyKyc } = require('./validateVerifyKyc')
const { validateGetTransactionHist } = require('./ValidateGetTransactionHist')
const { validateAddLiquidity } = require('./validateAddLiquidity')


module.exports = {
  validateForgotPassword,
  validateLogin,
  validateRegister,
  validateResetPassword,
  validateVerify,
  validate2fa,
  validateVerifyKyc,
  validateGetTransactionHist,
  validateAddLiquidity
}
