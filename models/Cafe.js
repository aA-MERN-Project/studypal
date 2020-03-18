const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const CafeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    noiseLevel : {
        type: String,
    },
    creditCard :{
        type: Boolean,
    },
    wifi: {
        type: Boolean,
    },
    zipcode: {
        type: Number,

    }


});


const Cafe = mongoose.model('cafe', CafeSchema);

module.exports = Cafe;