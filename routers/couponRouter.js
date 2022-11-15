const express = require('express');
const router = express.Router();
const admin = require('../middlewares/admin');
const authorize = require('../middlewares/authorize');
const { createNewCoupon } = require('../controllers/couponController');

router.route('/')
    .post([authorize, admin], createNewCoupon);

module.exports = router;