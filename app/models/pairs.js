const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const { Schema } = mongoose;

const NetworkSchema = new Schema({
    name: String,
});

const PairSchema = new mongoose.Schema(
    {
        status: {
            type: String
        },
        address1: {
            type: String,
            require: true,
        },
        address2: {
            type: String,
            require: true,
        },
        symbol1: {
            type: String
        },
        symbol2: {
            type: String
        },
        name1: {
            type: String
        },
        name2: {
            type: String
        },
        image1: {
            type: String
        },
        image2: {
            type: String
        },
        network: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'networks'
        },
        pair_symbol: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
PairSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Pairs', PairSchema)