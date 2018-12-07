var express = require('express');
var router = express.Router();
var mquery = require('../classes/memberquery');

router.get('/', function (req, res) {
    res.json({ name: "member" })
});

router.get('/getMemberData', function (req, res) {
    mquery.getMemberData().then((data) => {
        res.json(data)

    }).catch((err) => {
        res.json(err);
        console.log(err); 

    })
});

router.get('/getMemberCount', function (req, res) {
    mquery.getMemberCount().then((data) => {
        res.json(data)

    }).catch((err) => {
        res.json(err);
        console.log(err); 

    })
});

router.get('/getChartData', function (req, res) {
    mquery.getChartData(req.query.name).then((data) => {
        res.json(data)

    }).catch((err) => {
        res.json(err);
        console.log(err); 

    })
});

router.post('/add', function (req, res) {
    mquery.add(req.body.number, req.body.name, req.body.member, req.body.main_region, req.body.sub_region).then((data) => {
        res.json(data);

    }).catch((err) => {
        res.json(err);
        console.log(err);

    })
});

module.exports = router;