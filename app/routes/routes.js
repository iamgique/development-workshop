const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const index = require('../apis/index');
const calculate = require('../apis/calculate');

router.route('/')
    .get(index.index);

router.route('/add')
    .get(calculate.add);

router.route('/minus')
    .get(calculate.minus);

router.route('/multiply')
    .get(calculate.multiply);

router.route('/divide')
    .get(calculate.divide);

module.exports = router;