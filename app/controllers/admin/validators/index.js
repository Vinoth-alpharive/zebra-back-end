const { validateAddTokens } = require('./validateAddTokens')
const { validateAddNetwork } = require('./validateAddNetwork')
const { validateAdminFee } = require('./validateAdminFee')
const { validateUpdateNetwork } = require('./validateUpdateNetwork')
const { validateFarmingPairs } = require('./validateFarmingPairs')
const { validateFarming } = require('./validateFarming')
const { validateFarmingLiquidity } = require('./validateFarmingLiquidity')
const { validateStakingPairs } = require('./validateStakingPairs')
const { validateStakingLiquidity } = require('./validateStakingLiquidity')
module.exports = {
    validateAddTokens,
    validateAddNetwork,
    validateAdminFee,
    validateUpdateNetwork,
    validateFarmingPairs,
    validateFarming,
    validateFarmingLiquidity,
    validateStakingPairs,
    validateStakingLiquidity
}