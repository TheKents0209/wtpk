const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

const multer = require('multer');
const upload = multer({dest: './uploads/'});

router.route('/').
    get(catController.cat_list_get).
    post(upload.single('catpic'), catController.cat_post_new_cat);

router.route('/:id')
  .get(catController.cat_get_by_id)
  .put(catController.cat_put_update_cat)
  .delete(catController.cat_delete_cat);


module.exports = router;
