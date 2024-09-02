const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const NetworkSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        rpc_Url: {
            type: String,
            required: true
        },
        chainId: {
            type: Number,
            required: true
        },
        isVisible: {
            type: Boolean
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
NetworkSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('networks', NetworkSchema)
