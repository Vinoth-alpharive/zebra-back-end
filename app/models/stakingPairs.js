const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const stakingPairSchema = new mongoose.Schema(
    {
        LP_Token: {
            type: "String",
            required: true
        },
        LP_Token_Symbol: {
            type: "String",
            required: true
        },
        Reward_Token: {
            type: String,
            required: true
        },
        Reward_Token_Symbol: {
            type: String,
            required: true
        },
        Dev_Address: {
            type: String,
            required: true
        },
        Reward_Per_Sec: {
            type: String,
            required: true
        },
        Start_Time: {
            type: String,
            required: true
        },
        End_Time: {
            type: String,
            required: true
        },
        Network: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'networks',
        },
        Allocation_Point: {
            type: String,
            default: ""
        },
        Pool_Update: {
            type: String,
            default: ""
        },
        Min_Deposit: {
            type: String,
            default: ""
        },
        Lock_Period: {
            type: Number,
            default: 0
        },
        ID: {
            type: Number,
            default: 0
        },

        contractAddress: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
stakingPairSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('stakingPairs', stakingPairSchema)
