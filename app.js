const express = require("express");

const app = express();
const bodyParser = require("body-parser");

const Router = require("../Ejs project/controllers/mainController.js");

app.set("view engine", "ejs");
app.use("/validation", express.static("validation"));
app.use(express.json());

app.use("/", Router);

app.listen(3000, () => {
    console.log("server is running");
});
