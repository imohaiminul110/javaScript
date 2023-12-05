// routes/uploadRoutes.js
const express = require("express");
const router = express.Router();
const uploadController = require("./uploadController");

router.post("/upload", uploadController.uploadImage);

module.exports = router;
