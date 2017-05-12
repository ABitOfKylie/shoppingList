var express = require('express');
var router = express.Router();
var groceryItem = require('../models/shopping.js');

router.get('/', function (req, res){
	groceryItem.all(function(item_data){
		console.log(item_data);
		res.render('index', {item_data});
	});
});

router.get('/shop_items/update/:id/:purchased', function (req, res){
	console.log("inside update in reverse" + req.params.id + req.params.purchased);
	var returnItem = false;
	groceryItem.update(req.params.id, returnItem, function(result){
		console.log(result);
		res.redirect('/');
	});
});

router.post('/shop_items/create', function(req, res) {
	groceryItem.create(req.body.item, function(result){
		res.redirect('/');
	});
});
// idea is to include this function in the post - capitalize str before adding to db
//{{capitalize}}
// Handlebars.registerHelper('capitalize', function(str) {  
//   return str.charAt(0).toUpperCase() + str.slice(1);
// });

router.put('/shop_items/update', function (req, res) {
	console.log("inside shops contoller value of req.body.id");
	console.log(req.body.id + req.body.purchased);

	groceryItem.update(req.body.id, req.body.purchased, function(result){
		console.log(result);
		res.redirect('/');
	});
});

router.post('/shop_items/truncate', function (req, res) {
	console.log(req.body.item);
	console.log("now inside post/truncate controller");
	groceryItem.truncate(req.body.item,function (result) {
    res.redirect('/');
	});
});


router.post('/shop_items/delete', function (req, res) {
	console.log(req.body.id);
	console.log("now inside post/delete controller");
	groceryItem.delete(req.body.id,function (result) {
    res.redirect('/');
	});
});


module.exports = router;