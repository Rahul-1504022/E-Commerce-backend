const { Order } = require('../models/order');

module.exports.loadOrderHistory = async (req, res) => {
    const userId = req.user._id;
    const orderHistory = await Order.find({ user: userId });
    return res.status(200).send(orderHistory);
}