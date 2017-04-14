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

	delete: function (tableInput, cb) {
        orm.delete('shop_items', tableInput, cb);
    }
};

module.exports = thingsToBuy;
//checks out with both Omar and hw

