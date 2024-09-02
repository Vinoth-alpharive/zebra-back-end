const { validateCreateUser } = require('./validateCreateUser')
const { validateDeleteUser } = require('./validateDeleteUser')
const { validateGetUser } = require('./validateGetUser')
const { validateUpdateUser } = require('./validateUpdateUser')
const { validateCreateKYC } = require('./validateCreateKYC')
const { validateCreateTrade } = require('./validateCreateTrade')
const { validateTradeHistory } = require('./validateTradeHistory')
const { validateCreateVoting } = require('./validateCreateVoting')
const { validateVoting } = require('./validateVoting')
const { validateCreateLaunchpad } = require('./validateCreateLaunchpad')
module.exports = {
  validateCreateUser,
  validateDeleteUser,
  validateGetUser,
  validateUpdateUser,
  validateCreateKYC,
  validateCreateTrade,
  validateTradeHistory,
  validateCreateVoting,
  validateVoting,
  validateCreateLaunchpad
}
