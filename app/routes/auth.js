const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const {
  register,
  verify,
  forgotPassword,
  resetPassword,
  getRefreshToken,
  login,
  loginByAdmin,
  roleAuthorization,
  twoFactorAuth,
  verifyTwoFactorAuth,
  disable2FA,
  checkapi,
  getKycList,
  verifyKyc,
  getTransactionHist,
  addLiquidity,
  stakingHistory
} = require('../controllers/auth')

const {
  validateRegister,
  validateVerify,
  validateForgotPassword,
  validateResetPassword,
  validateLogin,
  validate2fa,
  validateVerifyKyc,
  validateToken,
  validateGetTransactionHist,
  validateAddLiquidity
} = require('../controllers/auth/validators')


const {
  getUsers
} = require('../controllers/users')


/*
 * Auth routes
 */

/*
 * Register route
 */

router.post('/check', checkapi)

router.post('/login', trimRequest.all, validateLogin, loginByAdmin)




router.get(
  '/usersList',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getUsers
)

router.get(
  '/kycsList',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getKycList
)

router.post(
  '/verifyKyc',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateVerifyKyc,
  verifyKyc
)

router.post(
  '/AddLiquidity',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateAddLiquidity,
  addLiquidity
)

/*
 * Generate two factor Auth
 */

router.post(
  '/generate2fa',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  twoFactorAuth
)

/*
 *Verify two factor Auth
 */

router.post(
  '/verify2fa',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  validate2fa,
  verifyTwoFactorAuth
)



/*
 *Disable two factor Auth
 */

router.post(
  '/disable2fa',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  disable2FA
)

/*
 * Verify route
 */
router.post('/verifyotp', trimRequest.all, validateVerify, verify)

/*
 * Forgot password route
 */
router.post('/forgot', trimRequest.all, validateForgotPassword, forgotPassword)

/*
 * Reset password route
 */
router.post('/reset', trimRequest.all, validateResetPassword, resetPassword)

/*
 * Get new refresh token
 */
router.get(
  '/token',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getRefreshToken
)

router.post(
  '/getAllTransactionHist',
  // requireAuth,
  // roleAuthorization(['admin']),
  trimRequest.all,
  validateGetTransactionHist,
  getTransactionHist
)

router.post(
  '/stakingHistory',
  // requireAuth,
  // roleAuthorization(['user', 'admin']),
  trimRequest.all,
  stakingHistory
)

/*
 * Login route
 */

module.exports = router
