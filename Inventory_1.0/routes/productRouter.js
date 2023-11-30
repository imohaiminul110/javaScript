const express = require('express');
const router = express.Router();

// Define product routes
router.post('/', /* Your add product controller */);
router.get('/', /* Your view all products controller */);
router.get('/:productId', /* Your view product details controller */);
router.patch('/:productId', /* Your update product controller */);

module.exports = router;
