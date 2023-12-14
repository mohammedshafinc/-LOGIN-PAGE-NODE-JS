const express = require("express");
const session = require("express-session");
const nocache = require("nocache");

const app = express();
const bodyParser = require("body-parser");

const Router = require("./router/router.js");
app.use(
    session({
        secret: "shafin",
        resave: false,
        saveUninitialized: true,
    })
);

app.set("view engine", "ejs");
app.use(nocache());

app.use("/validation", express.static("validation"));
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", Router);

app.listen(3000, () => {
    console.log("server is running");
});
