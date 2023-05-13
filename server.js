const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
});

// Handle login form submission
app.post('/home', (req, res) => {
  const username = req.body.username;
  res.sendFile(__dirname + '/views/home.html');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});