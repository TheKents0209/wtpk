'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const passport = require('./utils/pass');
const app = express();
const port = process.env.HTTP_PORT || 3000;

app.use(cors());

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'production') {
  console.log('production');
  require('./utils/production')(app, port);
} else {
  console.log('dev');
  require('./utils/localhost')(app, process.env.HTTPS_PORT || 8000, port);
}

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());

app.use(express.static('week2_public_html'));
app.use(express.static('uploads'));
//app.use(express.json()); // for parsing application/json



app.use('/auth', authRoute);
app.use('/cat', passport.authenticate('jwt', {session: false}), catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);


