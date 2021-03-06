const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

require('dotenv').config()

const users = require("./routes/api/users");

const app = express();

app.use(
    express.urlencoded({
        extended: false
    })
)

app.use(express.json());

const db = require("./config/keys").mongoURI;

mongoose.connect(
    db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then (() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}!`))