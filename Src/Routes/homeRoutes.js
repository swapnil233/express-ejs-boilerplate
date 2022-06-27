const express = require("express");
const router = express.Router();

// Controller
const homeController = require("../../Controllers/homeController");

// Middlewares
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Index
router.get("/", homeController.index);

module.exports = router;