// Router
'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.route('/').
    get(userController.user_list_get).
    post(userController.user_post_new_user);

router.route('/:id').
    get(userController.user_get_by_id).
    put((req, res) => {
      console.log('put user', req.params);
      res.send('put user');
});

// router.post('/', (req, res) => {
//   res.send('From this endpoint you can post users.')
// });

module.exports = router;
