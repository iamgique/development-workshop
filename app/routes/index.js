const express = require('express');
const router = express.Router()
const index = require('../apis/index');

router.get('/', index.index)

module.exports = router;