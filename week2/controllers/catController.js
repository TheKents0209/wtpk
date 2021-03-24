// Controller
'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;


const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_get_by_id = (req, res) => {
  cats.forEach(cat => {
    if(cat.id === req.params.id) {
      res.json(cat)
      return
    }
  })
  res.send('No cat found with id: ' + req.params.id)
};

const cat_post_new_cat = (req, res) => {
  console.log('post cat', req.body);
  res.send(`post cat: ${req.body.name}`);
};

module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_post_new_cat,
};