var express = require('express');
var router = express.Router();

var data = {title: 'Сделай это!', todoItems: []};

class todoItem {
  constructor(text, isChecked) {
      this.text = text;
      this.checked = isChecked;
  }
}


router.get('/', function(req, res, next) {
  res.render('index', data);
});

router.post('/add', function(req, res) {
  var text = req.body.newTask;
  if( text.length > 0) {
    data.todoItems.push(new todoItem(text, false));
  }
  
  res.redirect('/');
});

router.post('/remove/:id', function(req, res) {
  var id = req.params.id;
  data.todoItems.pop(id);
  
  res.redirect('/');
});


module.exports = router;
