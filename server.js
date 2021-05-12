const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}!`))