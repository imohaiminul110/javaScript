const express = require('express');
const router = express.Router();

// Define admin routes
router.get('/dashboard', /* Your admin dashboard controller */);
router.get('/reports', /* Your admin reports controller */);

module.exports = router;
