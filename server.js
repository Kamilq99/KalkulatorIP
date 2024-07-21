const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'main_page')));
app.use(express.static(path.join(__dirname, 'nav')));
app.use(express.static(path.join(__dirname, 'footer')));
app.use(express.static(path.join(__dirname, 'about')));
app.use(express.static(path.join(__dirname, 'contact')));
app.use(express.static(path.join(__dirname, 'licence')));
app.use(express.static(path.join(__dirname, 'images')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main_page', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact', 'contact.html'));
});

app.get('/licence', (req, res) => {
  res.sendFile(path.join(__dirname, 'licence', 'licence.html'));
});

// Handle 404 for other routes
app.use((req, res) => {
  console.log(`Request URL: ${req.url}`);
  res.status(404).send('Sorry, we cannot find that!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});