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
		res.redirect('/');
	});
});
// idea is to include this function in the post - capitalize str before adding to db
// Handlebars.registerHelper('lowercase', function (str) {
//   if(str && typeof str === "string") {
//     return str.toLowerCase();
//   }
//   return '';
// });

	
// Previous answer from @Eric seems not to work now, my solution is very similar, but probably the definition of helpers changed a little in new versions of handlebars:

// Handlebars.registerHelper('tolower', function(options) {
//     return options.fn(this).toLowerCase();
// }); and in the template:
// <img src="/media/images/modules/{{#tolower}}{{name}}{{/tolower}}.png"...


router.put('/shop_items/update', function (req, res) {
	groceryItem.update(req.body.id, function(result){
		console.log(result);
		res.redirect('/');
	});
});

// router.post('/shop_items/truncate', function (req, res) {
		// console.log("in the truncate func controller");
//     groceryItem.truncate(req.body.item,function (result) {
//         res.redirect('/');
//     });
// });

router.post('/shop_items/delete', function (req, res) {
	console.log(req.body.item);
	console.log("now inside post/delete controller");
	groceryItem.delete(req.body.item,function (result) {
    res.redirect('/');
	});
});


module.exports = router;