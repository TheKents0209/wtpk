const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

const multer = require('multer');
const upload = multer({dest: './uploads/'});

router.route('/').
    get(catController.cat_list_get).
    post(upload.single('catpic'), function(req, res) {
      console.log(req.file, req.body);
      console.log('cat file inside route:', req.file)
      catController.cat_post_new_cat(req,res)
    }).
    put(catController.cat_update_put);

router.route('/:id').
    get(catController.cat_get_by_id).
    put((req, res) => {
      console.log('put cat', req.params);
      res.send('put cat');
    })
    .delete((req, res) => {
      console.log('delete cat', req.params);
      res.send('delete cat');
     });

module.exports = router;
