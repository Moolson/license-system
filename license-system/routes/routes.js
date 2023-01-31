const express = require('express');
const router = express.Router();
const functions = require('../functions/functions.js')

router.get('/license/check/:check', functions.licensecheck)
router.get('/panel', functions.panel)
router.post('/createlicense', functions.createlicense)
module.exports = router;