const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const trimRequest = require('trim-request')
const {
    addTokens,
    getTokens,
    getTokensByName,
    addNetwork,
    getNetwork,
    getPairs,
    getTokenPairs,
    addAdminFee,
    getAdminFee,
    UpdateNetwork,
    farmingPairs,
    farmingAddPairs,
    getFarmingPairs,
    farmingAddLiquidity,
    getFarmingLiquidity,
    stakingPairs,
    stakingAddPairs,
    getStakingPairs,
    stakingAddLiquidity
} = require('../controllers/admin')
const {
    validateAddTokens,
    validateAddNetwork,
    validateAdminFee,
    validateUpdateNetwork,
    validateFarmingPairs,
    validateFarming,
    validateFarmingLiquidity,
    validateStakingPairs,
    validateStakingLiquidity
} = require('../controllers/admin/validators')

const { roleAuthorization } = require('../controllers/auth')

router.post(
    '/addAssets',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    validateAddTokens,
    addTokens
)

router.post(
    '/farmingPairs',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    validateFarming,
    farmingPairs
)

router.post(
    '/stakingPairs',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    validateFarming,
    stakingPairs
)

router.get(
    '/stakingPairs',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    getStakingPairs
)

router.post(
    '/stakingAddLiquidity',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    validateStakingLiquidity,
    stakingAddLiquidity
)

router.post(
    '/farmingLiquidity',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    getFarmingLiquidity
)

router.post(
    '/farmingAddPairs',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    validateFarmingPairs,
    farmingAddPairs
)

router.post(
    '/stakingAddPairs',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    validateStakingPairs,
    stakingAddPairs
)

router.post(
    '/farmingAddLiquidity',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    validateFarmingLiquidity,
    farmingAddLiquidity
)

router.get(
    '/farmingPairs',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    getFarmingPairs
)


router.post(
    '/addNetwork',
    // requireAuth,
    // roleAuthorization(['admin']),
    validateAddNetwork,
    trimRequest.all,
    addNetwork
)

router.post(
    '/updateAdminFee',
    requireAuth,
    roleAuthorization(['admin']),
    validateAdminFee,
    trimRequest.all,
    addAdminFee
)

router.get(
    '/getAdminFee',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    getAdminFee
)


router.get(
    '/getNetwork',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    getNetwork
)
router.post(
    '/getPairs',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    getPairs
)

router.get(
    '/getAssets',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    getTokens
)

router.get(
    '/getAssetsPair',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    getTokenPairs
)

router.post(
    '/getAssetsByName',
    // requireAuth,
    // roleAuthorization(['admin']),
    trimRequest.all,
    getTokensByName
)

router.post(
    '/UpdateNetwork',
    requireAuth,
    roleAuthorization(['admin']),
    trimRequest.all,
    validateUpdateNetwork,
    UpdateNetwork
)



module.exports = router