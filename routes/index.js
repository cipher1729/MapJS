var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*POST with some data*/
router.post('/test',  function(req, res, next) {
  //res.render('error', { first: req.body.first, second:req.body.second, third:req.body.third});
 //res.send("you are here!");
 console.log("we are here"); 
 console.log(req.body.something);
 res.render('result', {name: req.body.something});
  });

module.exports = router;
