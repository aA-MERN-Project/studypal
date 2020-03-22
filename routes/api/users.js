const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const keys = require('../../config/keys');
const passport = require("../../config/passport");
const jwt = require("jsonwebtoken");

const mongoose = require('mongoose');


const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

//get single user by email
router.get('/:email', (req,res) => {
    User.findOne({email: req.params.email})
        .then(user => res.json(user))
        .catch(err => 
            res.status(404).json({noUserFound: "no user found with that email"})
        );
});

//update single user preferences (not including zipcode) --> (find by email)
router.patch('/:email', (req,res,next) => {
    
    // User.findById(req.user.id, function(err,user){
    // User.findOne({email: req.body.email}, function(err,user){
    //     if(!user){
            // req.flash('error', 'No account found');
            // return res.redirect('/login');
    User.findOne({email: req.body.email})
        .then(user => {
            if(!user){
            errors.email = 'No user exists with this email';
            return res.status(400).json(errors);
        }else{

        var miles_away = req.body.miles_away.trim();
        var hours_opened_left = req.body.hours.opened_left.trim();
        var free_wifi = req.body.free_wifi.trim();
        var credit_card = req.body.credit_card.trim();
        var noise_level = req.body.noise_level.trim();

        //I think all of them will be auto populated
        //if user doesn't click something, then it will be an empty string

        user.miles_away = miles_away;
        user.hours_opened_left = hours_opened_left;
        user.free_wifi = free_wifi;
        user.credit_card = credit_card;
        user.noise_level = noise_level;

        user.save()
            .then(user => res.json(user))
                .catch(err => console.log(err));
        }
        // user.save((err)=> {
            // res.redirect('/profile');
            // });
    });
});


router.post('/register', (req,res) => {
    //  ; 
    const {errors, isValid} = validateRegisterInput(req.body);
    
    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email})
        .then(user => {
            if(user){
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            }else{
                const newUser = new User({
                    handle: req.body.handle,
                    email: req.body.email,
                    password: req.body.password,
                    zipcode: req.body.zipcode
            });
        
        //  ;
        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(newUser.password, salt, (err,hash)=> {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            });
        });
    }

});
});

router.post('/login', (req, res) => {
    //  ;
    const {errors, isValid} = validateLoginInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
        .then(user => {
            // debugger;
            if(!user){
                errors.email = "User not found";
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        const payload = {
                            id: user.id,
                            handle: user.handle,
                            email: user.email,
                            zipcode: user.zipcode
                        };
                        // debugger;
                        jwt.sign(
                            payload, keys.secretOrKey, {expiresIn: 3600},
                            (err,token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        );
                    }else{
                        return res.status(400).json({password: "Incorrect password"});
                    }
                });
        });
});

module.exports = router;