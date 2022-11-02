const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
const { postComment, loadComment } = require('../controllers/commentController');

router.route('/')
    .post(authorize, postComment)
    .get(loadComment);

module.exports = router;