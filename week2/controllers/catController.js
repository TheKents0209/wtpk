// Controller
'use strict';

const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  if(req.query.sort === 'age') {
    const catsSort = await catModel.getAllCatsSort('age');
    res.json(catsSort);
    return;
  } else if (req.query.sort === 'name') {
    const catsSort = await catModel.getAllCatsSort('name');
    res.json(catsSort);
    return;
  }
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_get_by_id = async (req, res) => {
  const cat = await catModel.getCatById(req.params.id)
  res.json(cat);
};

const cat_post_new_cat = async (req, res) => {
  console.log('post cat', req.body);
  const cat = req.body;
  const catid = await catModel.insertCat(cat);
  cat.id = catid;
  // res.send(`post cat: ${req.body.name}`);
  res.json(cat);
};

const upload = (req, res) => {
  console.log(req.file, req.body);
};

module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_post_new_cat,
  upload,
};