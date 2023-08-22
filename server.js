const express = require("express");
const mongoose = require("mongoose");
const flightRoutes = require("./server/routes/flightRoutes");
const paymentRoute = require("./server/routes/paymentRoute");
const userRoute = require("./server/routes/userRoutes");
const ticketRoute = require("./server/routes/TicketRoute");
const smsRoute = require("./server/routes/smsRoute");
const cors = require("cors");

const app = express();

mongoose.set("strictQuery", false);

// Connect to MongoDB
mongoose
  .connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", flightRoutes);
app.use("/api", paymentRoute);
app.use("/api", userRoute);
app.use("/api", ticketRoute);
app.use("/api", smsRoute);
// Start the server
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
