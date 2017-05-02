var orm = require('../config/orm.js');

var thingsToBuy = {
	all: function (cb) {
		orm.all('shop_items', function (res) {
			cb(res);
		});
	},

	create: function (name,cb) {
		orm.create('shop_items', name, cb);
	},

	update: function (id, cb) {
		orm.update('shop_items', id, cb);
	},

	// truncate: function (tableInput, cb) {
 //        orm.truncate('shop_items', tableInput, cb);
 //    },
    delete: function (id, cb) {
        orm.delete('shop_items', id, cb);
    }
};

module.exports = thingsToBuy;

