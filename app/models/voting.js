const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const VotingSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            required: true
        },
        Content: {
            type: String,
            required: true
        },
        Choice1: {
            type: String,
            required: true
        },
        Choice2: {
            type: String,
            required: true
        },
        Choice1_count: {
            type: Number
        },
        Choice2_count: {
            type: Number
        },
        Start_Date: {
            type: String,
            required: true
        },
        Start_Time: {
            type: String,
            required: true
        },
        End_Date: {
            type: String,
            required: true
        },
        End_Time: {
            type: String,
            required: true
        },
        Address: {
            type: String,
            required: true
        },
        Proposal_Id: {
            type: String,
            required: true
        },
        voteList: {
            type: Array,
            deafult: []
        },
        startTimeStamp: {
            type: Number,
            required: true
        },
        endTimeStamp: {
            type: Number,
            required: true
        },
        count1: {
            type: Number,
            default: 0
        },
        count2: {
            type: Number,
            default: 0
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
VotingSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('votings', VotingSchema)
