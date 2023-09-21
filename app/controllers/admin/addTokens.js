const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/pairs')
const networks = require('../../models/network')
const Web3 = require('web3')
const erc20ABI = require('../../middleware/web3/Abi/erc20Abi.json')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const addTokens = async (req, res) => {
    try {
        const data = matchedData(req)
        const already = await assets.findOne({ address1: data.token1, address2: data.token2 })
        const already2 = await assets.findOne({ address1: data.token2, address2: data.token1 })
        if (already) {
            res.status(400).json({
                success: false,
                result: null,
                message: 'Pair Already Added'
            })
        } else if (already2) {
            res.status(400).json({
                success: false,
                result: null,
                message: 'Pair Already Added'
            })
        } else {
            const network = await networks.findOne({ _id: data.chain })
            if (network) {
                const web3 = new Web3(
                    new Web3.providers.HttpProvider(network.rpc_Url)
                )

                const contractInstance = new web3.eth.Contract(
                    erc20ABI,
                    data.token1
                );

                const contractInstance2 = new web3.eth.Contract(
                    erc20ABI,
                    data.token2
                );

                const name1 = await contractInstance.methods.name().call()
                const name2 = await contractInstance2.methods.name().call()
                const symbol1 = await contractInstance.methods.symbol().call()
                const symbol2 = await contractInstance2.methods.symbol().call()
                const datas = {
                    address1: data.token1,
                    address2: data.token2,
                    symbol1: symbol1,
                    symbol2: symbol2,
                    name1: name1,
                    name2: name2,
                    image1: "",
                    image2: "",
                    network: data.chain,
                    pair_symbol: `${symbol1}/${symbol2}`,
                    status: "true"
                }

                const datas1 = {
                    address1: data.token2,
                    address2: data.token1,
                    symbol2: symbol1,
                    symbol1: symbol2,
                    name2: name1,
                    name1: name2,
                    image2: "",
                    image1: "",
                    network: data.chain,
                    pair_symbol: `${symbol1}/${symbol2}`,
                    status: "false"
                }
                const respose = await assets.create(datas)
                const respose1 = await assets.create(datas1)
                res.status(200).json({
                    success: true,
                    result: respose1,
                    message: 'Successfully Created'
                })
            } else {
                res.status(400).json({
                    success: false,
                    result: null,
                    message: 'Please Enter Valid Chain'
                })
            }
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { addTokens }