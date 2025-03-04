const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;


const path = require('path');
app.set('views', path.join(__dirname, 'views'));


// Simple in-memory "database" for demonstration purposes
const students = {
  'student1@example.com': {
    password: 'password123', // In production, always hash your passwords!
    name: 'Student One',
    marks: [
      { topic: 'Math', mark: 90, date: '2025-01-10' },
      { topic: 'Science', mark: 85, date: '2025-01-12' }
    ]
  },
  // You can add more student entries here
};

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret-key', // Replace with a strong secret for production
  resave: false,
  saveUninitialized: true
}));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Routes

// Login page route
app.get('/', (req, res) => {
  res.render('login', { error: null });
});

// Login form submission
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (students[email] && students[email].password === password) {
    req.session.user = email;
    res.redirect('/dashboard');
  } else {
    res.render('login', { error: 'Invalid email or password.' });
  }
});

// Dashboard (protected route)
app.get('/dashboard', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/');
  }
  const student = students[req.session.user];
  res.render('dashboard', { student });
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
