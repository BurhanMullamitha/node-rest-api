const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched!'
    });
});

router.get('/', (req, res, next) => {
    res.status(201).json({
        message: 'Order was created!'
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;

    res.status(200).json({
        message: 'Order details',
        id: id
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order Deleted!',
        id: req.params.orderId
    });
});

module.exports = router;