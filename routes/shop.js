const path = require('path');

const express = require('express');

const pathUtil = require('../utilities/path');

const router = express.Router();

router.get('/',(req, res)=>{
    res.sendFile(path.join(pathUtil, 'views', 'shop.html'));
});

module.exports = router;