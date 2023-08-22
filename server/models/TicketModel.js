const mongoose = require("mongoose");

// Define a ticket schema using Mongoose
const ticketSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: String },
  gender: { type: String },
  nationality: { type: String },
  passportExpiry: { type: String },
  passportNumber: { type: String },
  fromLocation: { type: String, required: true },
  toLocation: { type: String, required: true },
  departureDate: { type: String, required: true },
  passengers: { type: Number, required: true },
  price: { type: Number, required: true },
  facialId: { type: String, required: true },
  primaryEmail: { type: String },
  Arriairport: { type: String },
  Deparairport: { type: String },
  code: { type: String },
});

// Define a ticket model
const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
