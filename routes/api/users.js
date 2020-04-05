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
const updateProfile = require('../../validation/update_profile');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/:id', (req,res) => {
    User.findById(req.params.id) //returns user
        .then(user => res.json(user))
        .catch(err => 
            res.status(404).json({noUserFound: "no user found with that email"})
        );
});


router.patch('/:id/profile', (req,res,next)=> {

    const {errors, isValid} = updateProfile(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    const userId = req.params.id;
    //  ;

    User.findOne({email: req.body.email})
    .then(user => {
        if(user){
            // debugger;
            //find user with _id and check if email belongs to user with _id
            //if it matches, then send up data, if not, then send email taken error
            //User should be able to keep their old email and only change username
            User.findOne({_id:req.params.id})
                .then(userOrig => {
                    if (userOrig.email === user.email){
                        let handle = req.body.handle;
                        let email = req.body.email;
                        let zipcode = req.body.zipcode;

                        userOrig.handle = handle;
                        userOrig.email = email;
                        userOrig.zipcode = zipcode;

                        userOrig.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    }else{
                        errors.email = 'Email already exists';
                        return res.status(400).json(errors);
                    }
                }).catch(err => 
                    res.status(404).json({noUserFound: "no user found with that ID"})
                );
            //  ;
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
        }else{
            User.findOne({_id:req.params.id})
                .then(userOrig => {
                    let handle = req.body.handle;
                    let email = req.body.email;
                    let zipcode = req.body.zipcode;

                    userOrig.handle = handle;
                    userOrig.email = email;
                    userOrig.zipcode = zipcode;

                    userOrig.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                    }
                ).catch(err => 
                    res.status(404).json({noUserFound: "no user found with that ID"})
                );
        }
    });
});

//get single user by email
// router.get('/:email', (req,res) => {
//     User.findOne({email: req.params.email})
//         .then(user => res.json(user))
//         .catch(err => 
//             res.status(404).json({noUserFound: "no user found with that email"})
//         );
// });

//update single user preferences (not including zipcode) --> (find by email)

router.patch('/:id', (req, res, next) => {
    const userId = req.params.id
    User.findOne({ _id: userId })
        .then(user => {
            // return res.json(user.miles_away)
            let miles_away = req.body.miles_away;
            let hours_opened_left = req.body.hours_opened_left;
            let free_wifi = req.body.free_wifi;
            let credit_card = req.body.credit_card;
            let noise_level = req.body.noise_level;

            // let miles_away = req.params.id
            // let hours_opened_left = req.params.id
            // let free_wifi = req.params.id;
            // let credit_card = req.params.id;
            // let noise_level = req.params.id;

            user.miles_away = miles_away;
            user.hours_opened_left = hours_opened_left;
            user.free_wifi = free_wifi;
            user.credit_card = credit_card;
            user.noise_level = noise_level;

            user.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
        })
        .catch(err =>
            res.status(404).json({ noUserFound: "no user found with that id" })
        );
})

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
            //   
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
                            zipcode: user.zipcode,
                            miles_away: user.miles_away,
                            hours_opened_left: user.hours_opened_left,
                            free_wifi: user.free_wifi,
                            credit_card: user.credit_card,
                            noise_level: user.noise_level
                        };
                         
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