const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/style.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname + '/style.css');
});

app.get('/stopka&nawigacja.js', (req, res) => {
  res.setHeader('Content-Type', 'text/javascript');
  res.sendFile(__dirname + '/stopka&nawigacja.js');
});


app.get('/nav.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname + '/nav.html');
});

app.get('/navstyle.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css'); 
  res.sendFile(__dirname + '/navstyle.css');
});

app.get('/stopka.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname + '/stopka.html');
});

app.get('/stopkastyle.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css'); 
  res.sendFile(__dirname + '/stopkastyle.css');
});

app.get('/ip.jpg', (req, res) => {
  res.sendFile(__dirname + '/ip.jpg');
});

app.get('/x/d.jpg', (req, res) => {
  res.sendFile(__dirname + '/x/d.jpg');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});