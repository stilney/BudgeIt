var data = require('../wishlist.json');

exports.viewWishlist = function(req, res){
	res.render('wishlist', data);
};