var express = require('express');
var router = express.Router();
var query = require('../classes/query');
//var body = require('body-parser');


// GET home page.
router.get('/', function (req, res) {
    res.json({ name: "data" })
});

router.post('/insertData', function (req, res) {
    query.insertData(req.body.CallType, req.body.Agent, req.body.CallerID, req.body.CallTime, req.body.Event, req.body.HoldTime, req.body.QueueName, req.body.Time, req.body.TotalTime).then((data) => {
        res.json(data);

    }).catch((err) => {
        res.json(err);
        console.log(err);

    })
});

router.get('/getData', function (req, res) {
    query.getData().then((data) => {
        res.json(data)

    }).catch((err) => {
        res.json(err);
        console.log(err);

    })
});

router.get('/callType', function (req, res) {
    query.callType(req.body.type, req.query.i, req.query.user).then((data) => {
        res.json(data)

    }).catch((err) => {
        res.json(err)
    })
});

router.get('/todayCall', function (req, res) {
    query.todayCall(req.body.type, req.query.user).then((data) => {
        res.json(data)

    }).catch((err) => {
        res.json(err)
    })
});

router.post('/addCallLog', function (req, res) {
    query.addCallLog(req.body.id, req.body.user, req.body.callType, req.body.agent, req.body.callerID, req.body.callTime, req.body.event, req.body.holdTime, req.body.queueName, req.body.time, req.body.totalTime, req.body.date, req.body.category, req.body.mainCategory).then((data) => {
        res.json(data);

    }).catch((err) => {
        res.json(err);
        console.log(err);

    })
});

router.get('/getCallLogData', function (req, res) {
    query.getCallLogData(req.query.user).then((data) => {
        res.json(data)

    }).catch((err) => {
        res.json(err);
        console.log(err);

    })
});

router.get('/delete', function (req, res) {
    query.delete(req.body.type, req.query.i).then((data) => {
        res.json(data)

    }).catch((err) => {
        res.json(err)
    })
});

router.get('/login', function (req, res) {
    query.login(req.body.type, req.query.username, req.query.password).then((data) => {
        res.json(data)
        console.log("login");

    }).catch((err) => {
        res.json(err)
    })
});

router.get('/getCheckbox', function (req, res) {
    query.getCheckbox().then((data) => {
        res.json(data)

    }).catch((err) => {
        res.json(err);
        console.log(err);

    })
});

router.post('/addCheckbox', function (req, res) {
    query.addCheckbox(req.body.main_category, req.body.category).then((data) => {
        res.json(data);

    }).catch((err) => {
        res.json(err);
        console.log(err);

    })
});


module.exports = router;