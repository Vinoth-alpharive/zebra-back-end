const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const LaunchTransactionSchema = new mongoose.Schema(
    {
        Project_Name: {
            type: String,
            required: true,
            default: ""
        },
        Project_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'launchpads',
        },
        Token_Name: {
            type: String,
            default: ''
        },
        Network: {
            type: String,
            required: true,
            default: ""
        },
        Token_symbol: {
            type: String
        },
        Tokens: {
            type: Number,
            required: true,
            default: 0
        },
        Usdt: {
            type: Number,
            required: true,
            default: 0
        },
        admin_Usdt: {
            type: Number,
            required: true,
            default: 0
        },
        User_address: {
            type: String,
            required: true,
            default: ""
        },
        pay_by : {
            type: String,
            default: ""
        },
        Transaction: {
            type: Object,
            default: ""
        },
        Admin_Transaction: {
            type: Object,
            default: ""
        },
        Transactionhas: {
            type: String,
            default: ""
        },
        Admin_Transactionhas: {
            type: String,
            default: ""
        },

    },
    {
        versionKey: false,
        timestamps: true
    }
)
LaunchTransactionSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('LaunchTransaction', LaunchTransactionSchema)