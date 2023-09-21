const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const farmingPairSchema = new mongoose.Schema(
    {
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
farmingPairSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('farmingPairs', farmingPairSchema)
