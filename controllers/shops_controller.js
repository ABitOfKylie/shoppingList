var express = require('express');
var router = express.Router();
var groceries = require('../models/shopping.js');

router.get('/', function (req, res) {
	res.redirect('/groceries');
});

router.get('/groceries', function (req, res) {
	groceries.all(function (data) {
		var hbsObject = {shop_items: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});
// router.get('/groceries', function(req,res) {
// 	//express callback response by calling burger.selectAllBurger
// 	groceries.all(function(groceries_data){
// 		//wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
// 		res.render('index', {groceries_data});
// 	});
// });
// router.post('/groceries/create', function(req, res) {
// 	//takes the request object using it as input for buger.addBurger
// 	groceries.create(['item'], [req.body.item], function(){
// 		//note line above from functioning burger hw.
// 		res.redirect('/');
// 	});
// });

router.post('/groceries/create', function(req, res) {
	//takes the request object using it as input for buger.addBurger
	groceries.create(req.body.item, function(result){
		//wrapper for orm.js that using MySQL insert callback will return a log to console, render back to index with handle
		console.log(result);
		res.redirect('/');
	});
});


//need to change '/shop_items.... '
router.put('/groceries/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	groceries.update({ purchased: req.body.purchased }, condition, function () {
		res.redirect('/');
	});
});
router.delete('/groceries/delete/', function (req, res) {

    groceries.delete(function () {
        res.redirect('/');
    });
});

module.exports = router;