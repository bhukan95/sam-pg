const express = require("express");
const router = express.Router();

const inquiryController = require("../controllers/inquiry_controller");

// Public
router.post("/", inquiryController.createInquiry);



module.exports = router;