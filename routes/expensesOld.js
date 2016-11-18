var data = require('../data.json');

exports.auth = function(req, res) {

  if (!req.session.auth) {
  	res.redirect('/');	
  }
}

exports.viewExpensesOld = function(req, res){

	exports.auth(req,res);
	res.render('expensesOld', data);
};
