const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const AdminFeeSchema = new mongoose.Schema(
    {
        factory_contract: {
            type: String
        },
        factory_Abi: {
            type: Array
        },
        router_contract: {
            type: String
        },
        router_Abi: {
            type: Array
        },
        Network: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "networks"
        },
        Address: {
            type: String
        },
        Percentage: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
AdminFeeSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('AdminFees', AdminFeeSchema)
