const express = require("express");
const userController = require("../controller/general")
const router = express.Router();

router.route("/user/:id").get(userController.getUser);
// router.get("/dashboard", getDashboardStats);

module.exports = router; 