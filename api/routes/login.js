var express = require('express');
var router = express.Router();
const User = require('./../model/User');

/* GET home page. */
router.post('/', async function (req, res, next) {
    let result = await User.login(req);
    return res.setHeader('Content-Type', 'application/json').json(result);
});

module.exports = router;
