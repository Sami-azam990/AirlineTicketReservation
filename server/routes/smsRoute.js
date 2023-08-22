const express = require("express");
const router = express.Router();
const smsController = require("../controllers/smsController");

// API route for sending an SMS
router.post("/send-sms", smsController.Sendsms);
router.post("/send-email", smsController.sendEmail);

module.exports = router;
