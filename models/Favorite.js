const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    name: {
    type: String,
    },
    favorites: {
    type: Array,
    default: [],
  },
});

const Favorite = mongoose.model("favorite", FavoriteSchema);
module.exports = Favorite;
