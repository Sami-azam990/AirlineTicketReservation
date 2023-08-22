const Flight = require("../models/flightModel");

exports.searchBookings = async (req, res) => {
  try {
    const { Id, airline } = req.query;

    // Search the database for bookings based on the provided criteria
    const bookings = await Flight.find({
      Id: Id,
      airline: new RegExp(airline, "i"),
    });

    res.status(200).json(bookings);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to search bookings you havent book any flight" });
  }
};
