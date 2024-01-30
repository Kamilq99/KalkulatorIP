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

app.get('/d.jpg', (req, res) => {
  res.sendFile(__dirname + '/d.jpg');
});

app.get('/about.html', (req,res) =>{
  res.setHeader('Content-Type', 'text/html')
  res.sendFile(__dirname + '/about.html');
})

app.get('/style_about.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css'); 
  res.sendFile(__dirname + '/style_about.css');
});

app.get('/contact.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html'); 
  res.sendFile(__dirname + '/contact.html');
});

app.get('/style_contact.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css'); 
  res.sendFile(__dirname + '/style_contact.css');
});

app.get('/index.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html'); 
  res.sendFile(__dirname + '/index.html');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});