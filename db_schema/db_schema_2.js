const mongoose = require('mongoose');
const Joi = require('joi');

const Schema = mongoose.Schema;

const OrderSchemaForPost = Schema ({
    id: {
        type: Number
    },
    order: {
        type: Number,
    },
    order_prefix: {
        type: String,
    },
},
{
    collection: 'orders_for_post',
});

const schema = Joi.object({
    id: Joi.number,
    order: Joi.number,
    order_prefix: Joi.string,
});

OrderSchemaForPost.methods.joiValidator = (oderObject) => {
    schema.required();
    return schema.validate(oderObject);
}

const Order = mongoose.model('orders_for_post', OrderSchemaForPost);

module.exports = Order;