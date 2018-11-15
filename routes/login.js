var express = require('express');
var router = express.Router();
var loginquery = require('../classes/loginquery');
var cors = require('cors');
var jwt = require('jsonwebtoken');

router.use(cors());

process.env.SECRET_KEY = 'secret'


router.post('/login', (req, res) => {

    loginquery.logindata(req.body.username, req.body.password).then((data) => {

        if (data[0].username !== undefined) {
            let user = data[0].password;
            let token = jwt.sign({ user: user }, process.env.SECRET_KEY, {
                expiresIn: 1440
            })
           return res.status(200).json({ token: token ,username: data[0].username, message : "success"});
        } else {
            return res.status(404).json({  message : "not success"})
        }
    })

})

    module.exports = router;