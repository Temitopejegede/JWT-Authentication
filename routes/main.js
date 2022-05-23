const express = require("express");
const { login } = require("../controllers/main");
const router = express.router();

const { login, dashboard } = require("../controllers/main");

router.route("/dashboard").get(dashboard);
router.route("/login").post(login);
