const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
// EXPRESS ROUTES
const users = require("./routes/api/users");

// USING EXPRESS ROUTES
app.use("/api/users", users);

//MIDDLE WARE FOR BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SETUP MONGOOSE DB -> MONGODB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("StudyPal Backend"));
app.listen(port, () => console.log(`Server is running on port ${port}`));