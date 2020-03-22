const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
    
    date:{
        type: Date,
        default: Date.now
    },

    zipcode:{
        type:Number,
        required:true
    },
    miles_away: {
        type:String,
        default: ""
    },
    hours_opened_left: {
        type:String,
        default:""
    },
    free_wifi: {
        type:String,
        default: ""
    },
    credit_card: {
        type: String,
        default: "",
    },
    noise_level: {
        type:String,
        default: ""
    }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;