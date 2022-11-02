const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
const { postComment } = require('../controllers/commentController');

router.route('/')
    .post(authorize, postComment);

module.exports = router;