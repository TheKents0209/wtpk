'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

require('dotenv').config()

app.use(cors());

app.use(express.static('week2_public_html'));
//app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');

app.use('/cat', catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
