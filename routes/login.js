var express = require('express');
var router = express.Router();

const adminEmail = 'admin@example.com';
const adminPassword = 'admin';



router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', alert: ''});
});

router.post('/', function(req, res, next) {
    var email = req.body.loginEmail;
    var password = req.body.loginPassword;
    var result = '';
    
    if (email === adminEmail && password === adminPassword){
      result = 'Success!';
    } else {
      result = 'Fail!';
    }

    res.render('login', { title: 'Login', alert: result});
});

module.exports = router;
