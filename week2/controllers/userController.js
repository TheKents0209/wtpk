// Controller
'use strict';
const userModel = require('../models/userModel');

const users = userModel.users;

const user_list_get = (req, res) => {
  users.forEach(user => {
    delete user.password
  })
  res.json(users);
};

const user_get_by_id = (req, res) => {
  users.forEach(user => {
    if(user.id === req.params.id) {
      delete user.password
      res.json(user)
      return
    }
  })
  res.send('No user found with id: ' + req.params.id)
};

const user_post_new_user = (req, res) => {
  console.log('post user', req.body);
  res.send(`post user: ${req.body.name}`);
};

module.exports = {
  user_list_get,
  user_get_by_id,
  user_post_new_user,
};