// Router
'use strict';
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/cat', (req, res) => {
  res.send('From this endpoint you can post cats.')
});

router.put('/cat', (req, res) => {
  res.send('From this endpoint you can put cats.')
});

router.delete('/cat', (req, res) => {
  res.send('From this endpoint you can delete cats.')
});

module.exports = router;
