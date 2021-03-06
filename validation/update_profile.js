const Validator = require('validator');
const validText = require('./valid-text');
const isNumber = require('./valid-number');


module.exports = function validateUpdateProfile(data){
    let errors = {};
    data.handle = validText(data.handle) ? data.handle : "";
    data.email = validText(data.email) ? data.email : "";

    if(!Validator.isLength(data.handle, {min:2, max:30})){
        errors.handle = "Username must be between 2 and 30 characters";
    }

    if(Validator.isEmpty(data.handle)){
        errors.handle = "Username field is required";
    }

    if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    if (!isNumber(data.zipcode)){
        errors.zipcode = "Zipcode must be a number";
    }

    if(!Validator.isLength(data.zipcode.toString(), {min: 5, max: 5})){
        errors.zipcode = "Please enter a 5 digit zipcode";
    }

    return {
        errors, 
        isValid: Object.keys(errors).length === 0
    };
}
