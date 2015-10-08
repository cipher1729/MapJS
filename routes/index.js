var express = require('express');
var router = express.Router();
var valueObject = {};
/* GET home page. */
router.get('/allPaths', function(req, res, next) {
  var db = req.db;
  var collection= db.get('usercollection');
  collection.find({},{}, function(e,docs){
	
	//var conv = docs[0].replace(/\\"/g,'\\"');
		console.log(docs);
	
	var conv = JSON.stringify(docs);
	console.log(conv);
	//conv = conv.replace(/&quot;/g, '"');
	
	res.render('result', { records: conv });
  });
  });


/*POST with some data*/
router.post('/addPath',function(req, res, next) {
  var origin = req.body.orgin;
  var destination = req.body.destination;
  var bounds= req.body.bounds;
  var db = req.db;
  var collection= db.get('usercollection');
  collection.insert({"origin":origin,
	"destination":destination,
	"bounds":bounds
	}, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("records");
        }
    });
  
});


module.exports = router;
