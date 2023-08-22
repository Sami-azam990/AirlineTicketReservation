const User = require("../models/userModel");
exports.createUser = async (req, res) => {
  try {
    const { username, facialId, email } = req.body;

    // Create a new user object
    const newUser = new User({
      email,
      username,
      facialId,
    });

    // Save the user object to the database
    await newUser.save();

    // Send a response indicating successful user creation
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    // Handle any errors that occur during the process
    console.log(error);
    res.status(500).json({ message: "An error occurred" });
  }
};
