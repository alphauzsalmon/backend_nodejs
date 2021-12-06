const router = require('express').Router();
const Order = require('../db_schema/db_schema.js');
const OrderForPost = require('../db_schema/db_schema_2.js');

router.get('/', async (req, res) => {
    const orders = await Order.find({});
    res.json(orders);
});

router.post('/', async (req, res) => {
    const addedOrder = await OrderForPost(req.body);
    const {error, result} = addedOrder.joiValidator();
    if (error) {
        res.json(error);
    } else {
        const order = await addedOrder.save();
        res.json(order);
    }
    // try {
    //     const postedOrders = await OrderForPost(req.body);
    //     await postedOrders.save();
    //     res.json(postedOrders);
    // } catch (err) {
    //     res.json(err);
    // }
});

module.exports = router;
