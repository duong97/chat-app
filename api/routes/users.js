var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* GET list user is active. */
router.post('/active', function (req, res, next) {
    return res.json([
        {username: 'user1', key: 1},
        {username: 'user2', key: 2}
    ]);
});

module.exports = router;
