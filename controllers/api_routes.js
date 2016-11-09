var express = require('express');
var router = express.Router();

router.get('/saved', function(req, res){
	res.json({
		"message": "get"
	});
});

router.post('/saved', function(req, res){
	res.json({
		"message": "post"
	});
});

router.delete('/saved', function(req, res){
	res.json({
		"message": "delete"
	});
});

module.exports = router;