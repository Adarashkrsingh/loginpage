// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email service
  auth: {
    user: 'adrash1205.be22@chitkara.edu.in',
    pass: 'Adarashsingh1234#'
  }
});

app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Simulated signup logic
  if (email && password) {
    const mailOptions = {
      from: 'adrash1205.be22@chitkara.edu.in',
      to: email,
      subject: 'Registration Successful',
      text: 'You have successfully registered!'
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false });
      }
      console.log('Email sent:', info.response);
      res.json({ success: true });
    });
  } else {
    res.status(400).json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
