var orm = require('../config/orm.js');

var thingsToBuy = {
	all: function (cb) {
		orm.all('shop_items', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	create: function (cols, vals, cb) {
		orm.create('shop_items', cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update('shop_items', objColVals, condition, function (res) {
			cb(res);
		});
	},

	delete: function (cb) {
        orm.delete('shop_items',function (res) {
            cb(res);
        });
    }
};

module.exports = thingsToBuy;
