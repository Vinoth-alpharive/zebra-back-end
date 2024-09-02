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
const { FactoryContract } = require('./FactoryContract')
const { getFactoryContract } = require('./getFactoryContract')
const { RouterContract } = require('./RouterContract')
const { removePair } = require('./removePair')
const { removeNetwork } = require('./removeNetwork')
const { getNetworkFull } = require('./getNetworkFull')
const { updateLaunchPadStatus } = require('./updateLaunchPadStatus')
const { updateLaunchpadLogo } = require('./updateLaunchpadLogo')

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
    FactoryContract,
    stakingAddPairs,
    getStakingPairs,
    stakingAddLiquidity,
    FactoryContract,
    getFactoryContract,
    RouterContract,
    removePair,
    removeNetwork,
    getNetworkFull,
    updateLaunchPadStatus,
    updateLaunchpadLogo
}

