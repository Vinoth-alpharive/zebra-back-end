const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const factorySchema = new mongoose.Schema(
    {
        FarmingAddress: {
            type: String,
            required: true
        },
        StakingAddress: {
            type: String,
            required: true
        },
        FarmingAbi: {
            type: Array,
            required: true
        },
        StakingAbi: {
            type: Array,
            required: true
        },
        Network: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'networks',
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
factorySchema.plugin(mongoosePaginate)
module.exports = mongoose.model('factoryAddress', factorySchema)
