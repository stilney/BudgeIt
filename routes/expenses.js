var data = require('../data.json');

exports.viewExpenses = function(req, res){
	res.render('expenses', data);
};

