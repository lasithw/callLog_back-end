var express = require('express');
var router = express.Router();
var infoquery = require('../classes/infoquery');

router.get('/', function (req, res) {
    res.json({ name: "info" })
});

router.get('/totalcall', function (req, res) {
    infoquery.totalcall().then((data) => {
        res.json(data)

    }).catch((err) => {
        res.json(err)
    })
});


module.exports = router;