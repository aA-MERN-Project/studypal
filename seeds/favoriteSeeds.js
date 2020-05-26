const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
mongoose.Promise = require("bluebird");
mongoose.connect(db);
const Favorite = require('../models/Favorite');

const Cafe = require('../models/Cafe');

// GRAPHQL

let newFave = new Favorite({
    name: "AndysFavorites",
    favorites: [],
   


})

Cafe.find({})
    .then(cafes => {
        let cafesArr = JSON.parse(JSON.stringify(cafes));
        cafesArr = cafesArr.splice(0, 10);
        console.log(cafesArr)

        newFave.favorites = cafesArr;

        console.log(newFave.favorites)

        newFave.save()
            .then(fave => console.log("SUCCESSFUL SAVE"))
            .catch(err => console.log(fave))
            .finally(() => {
                mongoose.connection.close();
            });
       



    })




// Cafe.find({})
//     .then(cafes => {
//         let cafesArr = JSON.parse(JSON.stringify(cafes));
//         cafesArr = cafesArr.splice(0,10);
//         console.log(cafesArr)
//         Favorite.findById("5ecd43b267e5fe02485b065f")
//             .then(fave => {

//                 console.log(fave.favorites)
    
//                 fave.save()
//                     .then((fave) => console.log(fave.favorites))
//                     .catch((err => console.log(err)))
//                     .finally(() => {
//                         mongoose.connection.close();
//                     });
                
//             })
//             .catch(err => console.log(err))
     
       

//     })







