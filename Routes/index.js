const express = require("express");
const route = express.Router();
const appController = require("../Controllers");

route.get("/", appController.getData);
route.post("/", appController.saveData);

module.exports = route;
