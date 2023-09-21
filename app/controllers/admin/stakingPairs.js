const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/pairs')
const networks = require('../../models/network')
const Web3 = require('web3')
const solc = require('solc')
const fs = require('fs')
const path = require('path')
const erc20ABI = require('../../middleware/web3/Abi/erc20Abi.json')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const stakingPairs = async (req, res) => {
    try {
        const data = matchedData(req)

        const network = await networks.findOne({ _id: data?.Network })
        if (network) {
            const web3 = new Web3(
                new Web3.providers.HttpProvider(network.rpc_Url)
            )
            let fileContent = fs.readFileSync(path.join(__dirname, "./Staking_Contract.sol"), 'utf8');

            var input = {
                language: "Solidity",
                sources: {
                    "Staking_Contract.sol": {
                        content: fileContent,
                    },
                },
                settings: {
                    outputSelection: {
                        "*": {
                            "*": ["*"],
                        },
                    },
                },
            };

            var output = JSON.parse(solc.compile(JSON.stringify(input)));
            ABI = output.contracts["Staking_Contract.sol"]["DiMoStaking"].abi;
            bytecode = output.contracts["Staking_Contract.sol"]["DiMoStaking"].evm.bytecode.object;
            res.status(200).json({
                success: true,
                result: {
                    abi: ABI,
                    bytecode: bytecode,
                    test: output.contracts["Staking_Contract.sol"]
                },
                message: 'Compile Successfully'
            })

        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: 'Please Enter Valid Chain'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { stakingPairs }