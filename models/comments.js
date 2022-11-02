const { Schema, Model } = require('mongoose');

const commentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    comment: String,
});

module.exports.Comment = new Model('Comment', commentSchema); 