var data = require('../data.json');

exports.auth = function(req, res) {

  if (!req.session.auth) {
  	res.redirect('/');	
  }
}

exports.viewExpenses = function(req, res){

	exports.auth(req,res);
	data['showAlternate'] = true;
	console.log(data['showAlternate']);
	res.render('expenses', data);
};

exports.viewExpensesOld = function(req, res){

	exports.auth(req,res);
	data['showAlternate'] = false;
	console.log(data['showAlternate']);
	res.render('expensesOld', data);
};
