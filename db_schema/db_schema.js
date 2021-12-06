const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = Schema ({
    id: {
        type: Number,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
    order_prefix: {
        type: String,
        required: true,
    },
},
{
    collection: 'orders',
});

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;