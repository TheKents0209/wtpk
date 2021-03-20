// Controller
'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  cats.forEach(cat => {
    if(cat.id === req.params.id) {
      res.json(cat)
      return
    }
  })
  res.send('No cat found with id: ' + req.params.id)
};

module.exports = {
  cat_list_get,
  cat_get,
};