var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*POST with some data*/
router.post('/',  function(req, res, next) {
  res.render('index', { first: req.body.first, second:req.body.second, third:req.body.third});
 console.log(req.body.first);
 console.log(req.body.second);
 console.log(req.body.third);
  });

module.exports = router;
