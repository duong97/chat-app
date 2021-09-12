var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    return res.send(JSON.stringify([
        {id: 1, name: "john"},
        {id: 2, name: "micheal scofield"}
    ]));
});

module.exports = router;
