const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
// const image  = require('../.././public/image/download.png')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const ejs = require('ejs')
const path = require('path')



const { roleAuthorization } = require('../controllers/auth')

const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  tradeHistory,
  createKYC, check2FA, verifyEmail, checkKyc,
  createTrade,
  creatingVoting,
  getVotings,
  voting,
  getVotesById
} = require('../controllers/users')


const {
  validateCreateUser,
  validateGetUser,
  validateUpdateUser,
  validateDeleteUser,
  validateCreateKYC,
  validateCreateTrade,
  validateTradeHistory,
  validateCreateVoting,
  validateVoting
} = require('../controllers/users/validators')

const { validateRegister, validateLogin } = require('../controllers/auth/validators')

const { register, login } = require('../controllers/auth')
/*
 * Users routes
 */

/*
 * Get items route
 */

router.post('/register', trimRequest.all, validateRegister, register)

/*login*/
router.post('/login', trimRequest.all, validateLogin, login)


router.post('/createKyc', requireAuth, roleAuthorization(['user']), trimRequest.all, validateCreateKYC, createKYC)

router.post(
  '/createTrade',
  // requireAuth,
  // roleAuthorization(['user']),
  trimRequest.all,
  validateCreateTrade,
  createTrade
)

router.post(
  '/Vote',
  // requireAuth,
  // roleAuthorization(['user']),
  trimRequest.all,
  validateVoting,
  voting
)

router.post(
  '/VoteById',
  // requireAuth,
  // roleAuthorization(['user']),
  trimRequest.all,
  getVotesById
)


router.post(
  '/getVotings',
  // requireAuth,
  // roleAuthorization(['user']),
  trimRequest.all,
  getVotings
)

router.post(
  '/createVoting',
  // requireAuth,
  // roleAuthorization(['user']),
  trimRequest.all,
  validateCreateVoting,
  creatingVoting
)


router.post(
  '/TradeHistory',
  // requireAuth,
  // roleAuthorization(['user']),
  trimRequest.all,
  validateTradeHistory,
  tradeHistory
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateUser,
  createUser
)




/*
 * check2fa
 */
router.get('/check2fa', requireAuth, trimRequest.all, check2FA)

/*
 * TOken verify
 */

router.get('/tokenVerify', requireAuth, trimRequest.all, verifyEmail)

/*
 * KYC verify
 */

router.get('/kycVerify', requireAuth, trimRequest.all, checkKyc)



// router.get('/emailsjs',(req,res)=>{
//   const filedata = path.join(__dirname, '../.././views/verify.ejs')
//   res.render(filedata, { otp: '12345', username: 'adsf',image:`${process.env.BACKEND}/image/logo.png`,url:`${process.env.FRONTEND}/12345` })
// })


/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetUser,
  getUser
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateUser,
  updateUser
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteUser,
  deleteUser
)

module.exports = router
