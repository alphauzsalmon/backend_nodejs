const express = require('express');
require('./db_helper/db_helper.js');
const router = require('./routers/order_router.js');

const app = express();

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use('/orders', router);

app.listen(3000, () => {
    console.log('Server has ben started');
});