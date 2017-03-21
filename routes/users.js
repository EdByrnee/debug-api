var express = require('express');
var router = express.Router();

// INDEX
router.get('/', function(req, res, next) {
  	console.log("GET / ");
 	console.log("Query:" + req.query); 
});

// POST
router.post('/', function(req, res, next) {
	console.log("POST /");
  	console.log("Body: " + JSON.stringify(req.body));
});

// UPDATE
router.put('/:id', function(req, res, next) {
  	console.log("PUT /");
  	console.log("Body: " + JSON.stringify(req.body));

});

// DELETE
router.delete('/', function(req, res, next) {
  	console.log("DELETE / ");
});

module.exports = router;

 