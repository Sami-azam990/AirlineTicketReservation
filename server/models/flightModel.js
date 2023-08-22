const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airlineNo: {
    type: Number,
    require: true,
  },
  airline: {
    type: String,
    required: true,
  },
  fromLocation: {
    type: String,
    required: true,
  },
  toLocation: {
    type: String,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  tripType: {
    type: "string",
    required: true,
  },
  classType: {
    type: "string",
    required: true,
  },
  duration: {
    type: "string",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  time: {
    type: "string",
    required: true,
  },
  Type: {
    type: "string",
    required: true,
  },
  Depairport: {
    type: "string",
    required: true,
  },
  Arrairport: {
    type: "string",
    required: true,
  },
  Stop: {
    type: "string",
  },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
