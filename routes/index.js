var express = require('express');
var router = express.Router();

var tasks = ["buy socks", "practise with nodejs"];
var complete = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tasks, complete });
});

router.post('/addtask', function(req, res) {
  
  var newTask = req.body.newtask;
  
  tasks.push(newTask);
  res.redirect('/');
});

router.post('/removetask', function(req, res) {
  var completeTask = req.body.check;
  
  if (typeof completeTask === "string") {
    complete.push(completeTask);
    tasks.splice(tasks.indexOf(completeTask), 1);
  } 
  else if (typeof completeTask === "object") {
    for (var i = 0; i < completeTask.length; i++) {     
      complete.push(completeTask[i]);
      tasks.splice(tasks.indexOf(completeTask[i]), 1);
    }
  } 
  
  res.redirect("/");
});

module.exports = router;
