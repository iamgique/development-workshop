const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')

const calculate = require('../apis/calculate');

router.get('/add/:a/:b', calculate.add)
router.get('/subtract/:a/:b', calculate.subtract)
router.get('/multiply/:a/:b', calculate.multiply)
router.get('/divide/:a/:b', calculate.divide)

module.exports = router;