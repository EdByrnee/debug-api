var express = require('express');
var router = express.Router();

// INDEX
router.get('/', function(req, res, next) {
  	console.log("GET / ");
 	console.log("Query:" + req.query); 
 	res.status(200).json({"message" : "Request logged to console"}).end();
});

// POST
router.post('/', function(req, res, next) {
	console.log("POST /");
  	console.log("Body: " + JSON.stringify(req.body));
  	res.status(200).json({"message" : "Request logged to console"}).end();
});

// UPDATE
router.put('/:id', function(req, res, next) {
  	console.log("PUT /");
  	console.log("Body: " + JSON.stringify(req.body));
  	res.status(200).json({"message" : "Request logged to console"}).end();

});

// DELETE
router.delete('/', function(req, res, next) {
  	console.log("DELETE / ");
  	res.status(200).json({"message" : "Request logged to console"}).end();
});

module.exports = router;

 