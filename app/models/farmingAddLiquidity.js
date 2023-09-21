const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const farmingLiquidityPairSchema = new mongoose.Schema(
    {
        Allocation_Point: {
            type: String,
            required: true
        },
        LP_Token: {
            type: String,
            required: true
        },
        Pool_Update: {
            type: String,
            required: true
        },
        contract_Address: {
            type: String,
            required: true
        },
        Token_Symbol: {
            type: String,
            required: true
        },
        ID: {
            type: Number,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
farmingLiquidityPairSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('farmingLiquidityPairs', farmingLiquidityPairSchema)
