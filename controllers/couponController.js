const { Coupon } = require('../models/coupon');

module.exports.createNewCoupon = async (req, res) => {
    const newCoupon = req.body;
    const saveCoupon = new Coupon(newCoupon);
    await saveCoupon.save();
    return res.status(200).send("Coupon Added Successfully");
}

module.exports.getCoupon = async (req, res) => {
    const allCoupon = await Coupon.find();
    return res.status(200).send(allCoupon);
}