const express = require('express');
const path = require('path');
const bodyParser = require("body-parser")
const sendEmail = require("./Utilits/sendEmail")

const app = express();

// Serve the built frontend files from the 'build' directory and Middleware
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Your backend API routes
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.post("/api/contact", async (req, res) => {
  const {company, email, subject, message} = req.body
  try {
    await sendEmail(company, email, subject, message)
    res.json({ success: true, message: 'Email sent successfully!' })
  } catch (error) {
    res.json({ success: false, message: "Email wasn't sent"})
  }
  
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
