const { createUser } = require('./createUser')
const { deleteUser } = require('./deleteUser')
const { getUser } = require('./getUser')
const { getUsers } = require('./getUsers')
const { updateUser } = require('./updateUser')
const { createKYC } = require('./createKYC')
const { check2FA } = require('./check2fa')
const { verifyEmail } = require('./tokenverify')
const { checkKyc } = require('./checkkyc')
const { imageApi } = require('./imageupload')
const { createTrade } = require('./createTrade')
const { tradeHistory } = require('./tradeHistory')
const { creatingVoting } = require('./creatingVoting')
const { getVotings } = require('./getVotings')
const { voting } = require('./voting')
const { getVotesById } = require('./getVotesById')

module.exports = {
  createUser,
  deleteUser,
  getUser,
  imageApi,
  getUsers,
  updateUser,
  verifyEmail,
  createKYC,
  check2FA,
  checkKyc,
  createTrade,
  tradeHistory,
  creatingVoting,
  getVotings,
  voting,
  getVotesById
}
