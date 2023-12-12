const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const app = express();

const pathfile = path.join(__dirname, "../models/user.json");

router.get("/", (req, res) => {
    res.render("signup");
});

router.post("/signup", (req, res) => {
    const { email, password } = req.body;

    const existingUser = JSON.parse(fs.readFileSync(pathfile));
    // console.log(existingUser);

    const userExists = existingUser.find((user) => user.email === email);

    if (userExists) {
        res.send("user already exist");
    } else {
        existingUser.push({ email, password });

        fs.writeFileSync(pathfile, JSON.stringify(existingUser));

        res.redirect("login");
    }
    // console.log(req.body);
});
router.get("/login", (req, res) => {
    res.render("login");
});
// router.get("/home", (req, res) => {
//     res.render("home");
// });

module.exports = router;
