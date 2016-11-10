var data = require("../signIn.json");

exports.viewLogin = function(req, res){
	res.render('login');
};
exports.authenticateAccount = function(req,res) {
	var username = req.body.username;
	var password = req.body.password;
	var accounts = data.accounts;
	for (var i = 0; i < accounts.length; i++) {
		if (username == accounts[i].email && password == accounts[i].password) {
			req.session.auth = true;
			res.send(200);
			return;
		}
	}
	res.send(401);
}