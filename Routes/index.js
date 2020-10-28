const express = require("express");
const route = express.Router();
const appController = require("../Controllers");

route.get("/", appController.getData);

module.exports = route;
