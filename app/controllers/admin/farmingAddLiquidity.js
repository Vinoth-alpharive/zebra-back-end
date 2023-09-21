const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/farmingPairs')
const networks = require('../../models/farmingAddLiquidity')
const Web3 = require('web3')
const erc20ABI = require('../../middleware/web3/Abi/erc20Abi.json')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const farmingAddLiquidity = async (req, res) => {
    try {
        const data = matchedData(req)
        const already = await networks.findOne({ contract_Address: data?.contract_Address, LP_Token: data?.LP_Token })
        if (already) {
            res.status(400).json({
                success: false,
                result: null,
                message: 'Pair Already Exists'
            })
        } else {
            const net = await assets.findOne({ contractAddress: data?.contract_Address }).populate('Network')
            const web3 = new Web3(
                new Web3.providers.HttpProvider(net?.Network.rpc_Url)
            )
            const contractInstance = new web3.eth.Contract(
                erc20ABI,
                data.LP_Token
            );
            if (contractInstance) {
                const symbol1 = await contractInstance.methods.symbol().call()
                if (symbol1) {

                    data.Token_Symbol = symbol1
                    const id = await networks.find({ contract_Address: data?.contract_Address })
                    data.ID = id?.length
                    const response = await networks.create(data)
                    if (response) {
                        res.status(200).json({
                            success: true,
                            result: response,
                            message: 'Pair Created Successfully'
                        })
                    } else {
                        res.status(400).json({
                            success: false,
                            result: null,
                            message: 'Something Went Wrong'
                        })
                    }
                }

            } else {
                res.status(400).json({
                    success: false,
                    result: null,
                    message: 'Invalid Reward Token token'
                })
            }
        }





    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { farmingAddLiquidity }