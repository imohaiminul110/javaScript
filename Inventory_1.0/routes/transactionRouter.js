const express = require('express');
const router = express.Router();

// Define transaction routes
router.post('/request', /* Your product request controller */);
router.post('/return', /* Your product return controller */);
router.post('/purchase', /* Your purchase product controller */);
router.get('/', /* Your view transaction history controller */);

module.exports = router;
