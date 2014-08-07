var express = require('express');

var users = require('../model/datas').users;  

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  res.send(users);
});

router.get('/:id', function(req, res){
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  res.send(users[req.param('id')]);
});


router.get('/delete/:id', function(req, res){
  res.setHeader('Content-Type', 'application/json;charset=utf-8');  
  delete users[req.param('id')];  
  res.send({status:"success", message:"delete user success"});  
  console.log(users);  
});

//you should use post rquest.
//http://expressjs.com/3x/api.html#express 
//search req.body

router.post('/add', function(req, res){
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  console.log(req.body);
  users[req.body.id] = req.body;
  console.log(req.body);
  res.send({status:"success", message:"add user success"});
  console.log(users);
});

router.post('/update/:id', function(req, res){
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  users[req.body.id] = req.body; 
  res.send({status:"success", message:"update user success"});
  console.log(users);
});

module.exports = router;
