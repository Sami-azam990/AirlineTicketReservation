// Import necessary dependencies
const express = require("express");
const mongoose = require("mongoose");

// Define a user schema using Mongoose
const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  facialId: String,
});

// Define a user model
const User = mongoose.model("User", userSchema);

module.exports = User;
