const Ticket = require("../models/TicketModel");

exports.CreateTicket = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      nationality,
      passportExpiry,
      passportNumber,
      toLocation,
      fromLocation,
      departureDate,
      passengers,
      price,
      facialId,
      primaryEmail,
      Arriairport,
      Deparairport,
      code,
    } = req.body;

    // Create a new ticket object
    const newTicket = new Ticket({
      firstName,
      lastName,
      dateOfBirth,
      gender,
      nationality,
      passportExpiry,
      passportNumber,
      toLocation,
      fromLocation,
      departureDate,
      passengers,
      price,
      facialId,
      primaryEmail,
      Arriairport,
      Deparairport,
      code,
    });

    // Save the ticket object to the database
    await newTicket.save();

    // Send a response indicating successful ticket creation
    res.status(200).json({ message: "Ticket created successfully" });
  } catch (error) {
    // Handle any errors that occur during the process
    console.log(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// GET route to fetch booked flights data
exports.getTicket = async (req, res) => {
  const { facialId } = req.params; // Retrieve the facial ID from the query parameters

  try {
    const bookedFlights = await Ticket.find({ facialId: facialId }); // Filter the tickets by the facial ID
    res.json(bookedFlights);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Assuming you are using Express.js framework

// Update a flight
exports.UpdateTicket = async (req, res) => {
  try {
    const flightId = req.params.flightId;
    // Fetch the flight from the database using the flightId
    const flight = await Ticket.findById(flightId);

    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }

    // Update the flight details based on the request body
    flight.origin = req.body.origin;
    flight.destination = req.body.destination;
    // Update other properties as needed

    // Save the updated flight to the database
    await flight.save();

    res.json({ message: "Flight updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Cancel a flight
exports.cancel = async (req, res) => {
  try {
    const flightId = req.params.flightId;
    // Find the flight by ID and remove it from the database
    const deletedFlight = await Ticket.findByIdAndRemove(flightId);

    if (!deletedFlight) {
      return res.status(404).json({ message: "Flight not found" });
    }

    res.json({ message: "Flight canceled successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
