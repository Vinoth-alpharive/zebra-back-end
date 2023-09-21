const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const AdminFeeSchema = new mongoose.Schema(
    {
        Address: {
            type: String,
            required: true
        },
        Percentage: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
AdminFeeSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('AdminFees', AdminFeeSchema)
