const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/pairs')
const networks = require('../../models/network')
const Web3 = require('web3')
const erc20ABI = require('../../middleware/web3/Abi/erc20Abi.json')
const adminFee = require('../../models/adminFee')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const addTokens = async (req, res) => {
    try {
        const data = matchedData(req)
        const already = await assets.findOne({ address1: data.token1, address2: data.token2 })
        console.log("🚀 ~ file: addTokens.js:17 ~ addTokens ~ already:", already)
        const already2 = await assets.findOne({ address1: data.token2, address2: data.token1 })
        console.log("🚀 ~ file: addTokens.js:19 ~ addTokens ~ already2:", already2)
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
            console.log("🚀 ~ file: addTokens.js:34 ~ addTokens ~ network:", network)
            if (network) {
                const web3 = new Web3(
                    new Web3.providers.HttpProvider(network.rpc_Url)
                )
                const tok1 = await web3.utils.isAddress(data.token1)
                console.log("🚀 ~ addTokens ~ tok1:", tok1)
                const tok2 = await web3.utils.isAddress(data.token2)
                console.log("🚀 ~ addTokens ~ tok2:", tok2)
                var name1;
                var name2;
                var symbol1;
                var symbol2;
                var token1;
                var token2;
                if (tok1) {
                    const contractInstance = new web3.eth.Contract(
                        erc20ABI,
                        data.token1
                    );
                    console.log("🚀 ~ file: addTokens.js:44 ~ addTokens ~ contractInstance:", contractInstance)
                    name1 = await contractInstance.methods.name().call()
                    console.log("🚀 ~ file: addTokens.js:48 ~ addTokens ~ name1:", name1)
                    symbol1 = await contractInstance.methods.symbol().call()
                    console.log("🚀 ~ file: addTokens.js:52 ~ addTokens ~ symbol1:", symbol1)
                    token1 = data.token1
                } else {
                    name1 = data.token1
                    symbol1 = data.token1
                    token1 = "-"
                }
                if (tok2) {
                    const contractInstance2 = new web3.eth.Contract(
                        erc20ABI,
                        data.token2
                    );
                    console.log("🚀 ~ file: addTokens.js:50 ~ addTokens ~ contractInstance2:", contractInstance2)
                    name2 = await contractInstance2.methods.name().call()
                    console.log("🚀 ~ file: addTokens.js:50 ~ addTokens ~ name2:", name2)

                    symbol2 = await contractInstance2.methods.symbol().call()
                    console.log("🚀 ~ file: addTokens.js:54 ~ addTokens ~ symbol2:", symbol2)
                    token2 = data.token2
                } else {
                    name2 = data.token2
                    symbol2 = data.token2
                    token2 = "-"
                }
                const datas = {
                    address1: token1,
                    address2: token2,
                    symbol1: symbol1,
                    symbol2: symbol2,
                    name1: name1,
                    name2: name2,
                    image1: "",
                    image2: "",
                    network: data.chain,
                    pair_symbol: `${symbol1}_${symbol2}`,
                    status: "true",
                    factory_contract: data?.factory_contract,
                    factory_Abi: data?.factory_Abi,
                    router_contract: data?.router_contract,
                    router_Abi: data?.router_Abi
                }

                const datas1 = {
                    address1: token2,
                    address2: token1,
                    symbol2: symbol1,
                    symbol1: symbol2,
                    name2: name1,
                    name1: name2,
                    image2: "",
                    image1: "",
                    network: data.chain,
                    pair_symbol: `${symbol1}_${symbol2}`,
                    status: "false",
                    factory_contract: data?.factory_contract,
                    factory_Abi: data?.factory_Abi,
                    router_contract: data?.router_contract,
                    router_Abi: data?.router_Abi
                }
                const adminfees = {
                    factory_contract: data?.factory_contract,
                    factory_Abi: data?.factory_Abi,
                    router_contract: data?.router_contract,
                    router_Abi: data?.router_Abi,
                    Network: data.chain,
                    Percentage: "",
                    Address: ""
                }
                const admFee = await adminFee.findOne({ router_contract: data?.router_contract })
                console.log("🚀 ~ file: addTokens.js:96 ~ addTokens ~ admFee:", admFee)
                if (admFee == null) {
                    await adminFee.create(adminfees)
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