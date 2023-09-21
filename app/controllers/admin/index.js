const { addTokens } = require('./addTokens')
const { getTokens } = require('./getTokens')
const { getTokensByName } = require('./getTokensByName')
const { addNetwork } = require('./addNetwork')
const { getNetwork } = require('./getNetwork')
const { getPairs } = require('./getPairs')
const { getTokenPairs } = require('./getTokenPairs')
const { addAdminFee } = require('./addAdminFee')
const { getAdminFee } = require('./getAdminFee')
const { UpdateNetwork } = require('./updateNetwork')
const { farmingPairs } = require('./farmingPairs')
const { farmingAddPairs } = require('./farmingAddPairs')
const { getFarmingPairs } = require('./getFarmingPair')
const { farmingAddLiquidity } = require('./farmingAddLiquidity')
const { getFarmingLiquidity } = require('./getFarmingLiquidity')
const { stakingPairs } = require('./stakingPairs')
const { stakingAddPairs } = require('./stakingAddPairs')
const { getStakingPairs } = require('./getStakingPairs')
const { stakingAddLiquidity } = require('./stakingAddLiquidity')

module.exports = {
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
}

