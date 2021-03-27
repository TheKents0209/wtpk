// Controller
'use strict';
const userModel = require('../models/userModel');


const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_get_by_id = async (req, res) => {
  const user = await userModel.getUserById(req.params.id)
  res.json(user);
};

const cat_post_new_cat = async (req, res) => {
  console.log('post cat', req.body);
  const cat = req.body;
  const picture = req.file.destination + req.file.filename;
  console.log('cat after adding file', cat);
  console.log('cat file inside controller:', req.file);
  const catid = await catModel.insertCat(cat,picture);
  cat.id = catid;
  // res.send(`post cat: ${req.body.name}`);
  res.json(cat);
};

const user_post_new_user = async (req, res) => {
  console.log('post user', req.body);
  const user = req.body;
  const userid = await userModel.insertUser(user);
  user.id = userid;
  res.json(user);
};

module.exports = {
  user_list_get,
  user_get_by_id,
  user_post_new_user,
};