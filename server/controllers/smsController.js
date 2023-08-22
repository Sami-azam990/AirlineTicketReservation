const nodemailer = require("nodemailer");
const twilio = require("twilio");

// Twilio API credentials
const accountSid = "";
const authToken = "";
const client = twilio(accountSid, authToken);

// API route for sending an SMS
exports.Sendsms = async (req, res) => {
  const { phoneNumber, message } = req.body;

  try {
    const response = await client.messages.create({
      body: message,
      from: "",
      to: phoneNumber,
    });

    console.log(response);

    res.status(200).json({ success: true, message: "SMS sent successfully." });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, message: "Failed to send SMS." });
  }
};

// Define a route for sending emails

exports.sendEmail = async (req, res) => {
  try {
    // Extract the recipient's email address and ticket details from the request body
    const { recipientEmail, ticketDetails } = req.body;

    // Implement the sendEmail function using Nodemailer or any other email library
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "",
        pass: "",
      },
    });

    const mailOptions = {
      from: "",
      to: recipientEmail,
      subject: "Ticket Details",
      text: `Thanks for booking through us Here are your ticket details:\n\n${ticketDetails}
      Be on time Have a Safe Journey
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to send email" });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ message: "Email sent successfully" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to send email" });
  }
};
