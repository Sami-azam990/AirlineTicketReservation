const express = require("express");
const ticketController = require("../controllers/ticketController");

const router = express.Router();

router.post("/tickets", ticketController.CreateTicket);
router.get("/booked-flights/:facialId", ticketController.getTicket);
router.put("/booked-flights/update/:flightId", ticketController.getTicket);
router.delete("/booked-flights/delete/:flightId", ticketController.cancel);

module.exports = router;
