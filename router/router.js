const express = require("express");

const router = express.Router();

const authentication = require("../validation/userauth");
const { mainRouter } = require("../controllers/mainController");
const { getLogin } = require("../controllers/mainController");
const { postLogin } = require("../controllers/mainController");
const { postSignup } = require("../controllers/mainController");
const { getHome } = require("../controllers/mainController");
const { getLogout } = require("../controllers/mainController");

router.get("/", mainRouter);
router.post("/signup", authentication, postSignup);
router.get("/home", getHome);

router.post("/login", postLogin);

router.get("/logout", getLogout);

router.get("/login", getLogin);

module.exports = router;
