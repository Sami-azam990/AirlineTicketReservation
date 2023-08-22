const express = require("express");
const flightController = require("../controllers/flightController");

const router = express.Router();

router.post("/flights", flightController.createFlight);
router.get("/get/flights", flightController.searchFlights);
router.post("/get/booking", flightController.searchBookings);

module.exports = router;
