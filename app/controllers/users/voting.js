const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const assets = require('../../models/voting')
/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const voting = async (req, res) => {
    try {
        const datas = matchedData(req)
        const respose = await assets.findOne({ Proposal_Id: datas?.vote_id })
        if (respose) {
            var data;
            if (datas?.vote_for === "0") {
                data = {
                    Address: datas?.Address,
                    vote: respose?.Choice1
                }
                await assets.findOneAndUpdate({ Proposal_Id: datas?.vote_id }, { '$inc': { count1: 1 } })
            } else {
                data = {
                    Address: datas?.Address,
                    vote: respose?.Choice2
                }
                await assets.findOneAndUpdate({ Proposal_Id: datas?.vote_id }, { '$inc': { count2: 1 } })
            }

            var already = ""
            for (let i = 0; i < respose?.voteList?.length; i++) {
                const element = respose?.voteList[i];
                if (element?.Address === data?.Address) {
                    already = "yes"
                }
            }
            if (already === "yes") {
                res.status(200).json({
                    success: false,
                    result: null,
                    message: 'Already Voted'
                })
            } else {
                const ress = await assets.findOneAndUpdate({ Proposal_Id: datas?.vote_id }, { $push: { voteList: { $each: [data] } } })
                res.status(200).json({
                    success: true,
                    result: null,
                    message: 'Voting Created Successfully'
                })
            }
        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: 'SomeThing Went Wrong'
            })
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { voting }