const Validator = require('validator');
const validText = require('./valid-text');
const isNumber = require('./valid-number');

module.exports = function validateRegisterInput(data){
    let errors= {};

    data.handle = validText(data.handle) ? data.handle : "";
    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";
    data.zipcode = isNumber(data.zipcode) ? data.zipcode : "";

    if(!Validator.isLength(data.handle, {min:2, max:30})){
        errors.handle = "Handle must be between 2 and 30 characters";
    }

    if(Validator.isEmpty(data.handle)){
        errors.handle = "Handle field is required";
    }

    if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }

    if(Validator.isEmpty(data.zipcode)){
        errors.zipcode = "Zipcode field is required";
    }
    
    if(!Validator.isLength(data.password, {min: 6})){
        errors.password = "Password must be at least 6 characters";
    }

    //don't know why min of 4 puts 
    if(Validator.isLength(data.zipcode, {min: 4, max: 4})){
        errors.zipcode = "Please enter a 5 digit zipcode";
    }

    if(!Validator.equals(data.password,data.password2)){
        errors.password2 = "Passwords must match";
    }

    // debugger;
    return {
        errors, 
        isValid: Object.keys(errors).length === 0
    };
};