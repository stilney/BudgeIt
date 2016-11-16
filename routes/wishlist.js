var data = require('../wishlist.json');

exports.auth = function(req, res) {

  if (!req.session.auth) {
  	res.redirect('/');
  }
}

exports.viewWishlist = function(req, res){
	exports.auth(req,res);
	res.render('wishlist', data);
};