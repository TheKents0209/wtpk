const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
const { body } = require('express-validator');

const multer = require('multer');

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
    cb(null, true);
  }else{
    cb(null, false);
  }
}

const testFile = (req, res, next) => {
  if(req.file) {
    next();
  } else {
    res.status(400).json({errors: 'file is not image'});
  }

};
const upload = multer({dest: './uploads/', fileFilter});



router.route('/').
    get(catController.cat_list_get).
    post(
        upload.single('cat'),
        testFile,
        body('name').isLength({min: 1}),
        body('age').isLength({min: 1}).isNumeric(),
        body('weight').isLength({min: 1}).isNumeric(),
        body('owner').isLength({min: 1}).isNumeric(),
        catController.cat_post_new_cat);

router.route('/:id')
  .get(catController.cat_get_by_id)
  .put(
    body('name').isLength({min: 1}).escape().blacklist(';'),
    body('age').isLength({min: 1}).isNumeric(),
    body('weight').isLength({min: 1}).isNumeric(),
    body('owner').isLength({min: 1}).isNumeric(),
      catController.cat_put_update_cat)
  .delete(catController.cat_delete_cat);


module.exports = router;
