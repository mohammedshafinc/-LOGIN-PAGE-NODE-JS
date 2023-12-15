const express = require("express");

const router = express.Router();

const authentication = require("../validation/userauth");
const {
    mainRouter,
    getLogin,
    postLogin,
    getHome,
    getLogout,
    getSignup,
    postSignup,
} = require("../controllers/mainController");

router.get("/", mainRouter);
router.post("/signup", authentication, postSignup);
router.get("/home", getHome);
router.get("/signup", getSignup);

router.post("/login", postLogin);

router.get("/logout", getLogout);

router.get("/login", getLogin);

module.exports = router;
