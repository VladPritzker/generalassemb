const express = require('express');
const router = express.Router();
const catsCtrl = require('../controller/cats');
const dogsCtrl = require('../controller/dogs');  // Fixed the double slash here

// Our routes dedicated to our cat requests will go here!
// All routes defined in this router module are 'prefixed'
// with /cats in the endpoint
// router.get('/', catsCtrl.index); // This is commented out, should be enabled if needed
router.get('/', dogsCtrl.index); // Now correctly points to dogsCtrl.index
router.get('/cats', catsCtrl.index); // Now correctly points to dogsCtrl.index

module.exports = router;
