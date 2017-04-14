var express = require('express');
var router = express.Router();
var groceryItem = require('../models/shopping.js');

router.get('/', function (req, res){
	groceryItem.all(function(item_data){
		console.log(item_data);
		res.render('index', {item_data});
	});
});


router.post('/shop_items/create', function(req, res) {
	groceryItem.create(req.body.item, function(result){
		// console.log(result);
		res.redirect('/');
	});
});

router.put('/shop_items/update', function (req, res) {
	groceryItem.update(req.body.id, function(result){
		console.log(result);
		res.redirect('/');
	});
});

router.delete('/shop_items/delete', function (req, res) {

    groceryItem.delete(req.body.item,function (result) {
        res.redirect('/');
    });
});

module.exports = router;