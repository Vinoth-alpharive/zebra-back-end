const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const LaunchpadSchema = new mongoose.Schema(
    {
        Project_Name: {
            type: String,
            required: true,
            default: ""
        },
        Token_Name: {
            type: String,
            default: ''
        },
        Description: {
            type: String,
            default: ''
        },
        Network: {
            type: String,
            required: true,
            default: ""
        },
        Website: {
            type: String,
            required: true,
            default: ""
        },
        WhitePaper: {
            type: String,
            default: ""
        },
        Twitter: {
            type: String,
            required: true,
            default: ""
        },
        Discord: {
            type: String,
            required: true,
            default: ""
        },
        Instagram: {
            type: String,
            required: true,
            default: ""
        },
        Reddit: {
            type: String,
            required: true,
            default: ""
        },
        LinkedIn: {
            type: String,
            required: true,
            default: ""
        },
        Logo: {
            type: String,
            required: true,
            default: ""
        },
        Token_symbol: {
            type: String
        },
        Launch_price: {
            type: Number,
            required: true,
            default: 0
        },
        Total_supply: {
            type: Number,
            required: true,
            default: 0
        },
        Contract_address: {
            type: String,
            required: true,
            default: ""
        },
        Mim_raise_amou: {
            type: Number,
            default: 0
        },
        Max_raise_amou: {
            type: Number,
            default: 0
        },
        Start_date: {
            type: String,
            default: ""
        },
        End_date: {
            type: String,
            default: ""
        },
        Token_value_in_usdt: {
            type: String,
            default: ""
        },
        pay_by : {
            type: String,
            default: ""
        },
        Owner_address: {
            type: String,
            default: ""
        },
        Status: {
            type: Boolean,
            default: false
        },
        Start_date_timeStamp: {
            type: Number,
            default: 0
        },
        End_date_timeStamp: {
            type: Number,
            default: 0
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)
LaunchpadSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('launchpads', LaunchpadSchema)