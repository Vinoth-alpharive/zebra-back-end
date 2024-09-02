const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/network')
const Web3 = require('web3')
const erc20ABI = require('../../middleware/web3/Abi/erc20Abi.json')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const removeNetwork = async (req, res) => {
    try {
        if (req.body.Id) {
            const data = await assets.findOne({ _id: req.body.Id })
            if (data) {
                if (data?.isVisible == true) {
                    var dts = await assets.findOneAndUpdate({ _id: req.body.Id }, { isVisible: false })
                    res.status(200).json({
                        success: true,
                        result: dts,
                        message: 'Network Status Changed'
                    })
                } else {
                    var dts = await assets.findOneAndUpdate({ _id: req.body.Id }, { isVisible: true })
                    res.status(200).json({
                        success: true,
                        result: dts,
                        message: 'Network Status Changed'
                    })
                }
            } else {
                res.status(200).json({
                    success: false,
                    result: null,
                    message: 'Network Not Found'
                })
            }
        } else {
            res.status(200).json({
                success: false,
                result: null,
                message: 'Please Enter Network Id'
            })
        }

    }
    catch (error) {
        handleError(res, error)
    }
}

module.exports = { removeNetwork }