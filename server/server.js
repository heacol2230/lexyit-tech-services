// server.js

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const passportConfig = require('./passport-config');
const authRoutes = require('./routes/auth');

const app = express();

// Replace 'mongodb://localhost:27017/your-database' with your MongoDB connection string
mongoose.connect('mongodb+srv://heathercsdwd:Passing4321@lexyitbooking.zi5wshq.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Mount authentication routes
app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
