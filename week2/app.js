'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const passport = require('./utils/pass');
const authRoute = require('./routes/authRoute');

require('dotenv').config()

app.use(express.static('week2_public_html'));
app.use(express.static('uploads'));
//app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.use('/auth', authRoute);
app.use('/cat', passport.authenticate('jwt', {session: false}), catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
