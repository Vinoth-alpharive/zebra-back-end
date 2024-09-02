const { forgotPassword } = require('./forgotPassword')
const { getRefreshToken } = require('./getRefreshToken')
const { login } = require('./login')
const { loginByAdmin } = require('./loginByAdmin')
const { register } = require('./register')
const { resetPassword } = require('./resetPassword')
const { roleAuthorization } = require('./roleAuthorization')
const { verify } = require('./verify')
const { twoFactorAuth } = require('./twoFactorAuth')
const { verifyTwoFactorAuth } = require('./verifyTwoFactorAuth')
const { disable2FA } = require('./disable2FA')
const { checkapi } = require('./checkapi')
const { getKycList } = require('./getKycList')
const { verifyKyc } = require('./verifyKyc')
const { getTransactionHist } = require('./getAllTransactionHist')
const { addLiquidity } = require('./addLiquidity')
const { stakingHistory } = require('./stakingHistory')
const { tradingViewData } = require('./tradingViewData')
const { forms } = require('./forms')

module.exports = {
  forgotPassword,
  getRefreshToken,
  login,
  loginByAdmin,
  register,
  resetPassword,
  roleAuthorization,
  verify,
  twoFactorAuth,
  verifyTwoFactorAuth,
  disable2FA,
  checkapi,
  getKycList,
  verifyKyc,
  getTransactionHist,
  addLiquidity,
  stakingHistory,
  tradingViewData,
  forms
}
