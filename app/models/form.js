const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const formSchema = new mongoose.Schema(
    {
        Project_Name: {
            type: String,
            required: true
        },
        Token_Ticker: {
            type: String,
            required: true
        },
        Website: {
            type: String
        },
        Nature_Of_Product: {
            type: Array
        },
        Other_Cex: {
            type: String
        },
        TimeLine: {
            type: String
        },
        Referred: {
            type: String
        },
        ThirdParty_Listing: {
            type: String
        },
        Working_Liquidity: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
formSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('form', formSchema)
