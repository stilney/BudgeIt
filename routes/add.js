var data = require("../data.json");

exports.addFriend = function(req, res) {
	var description = req.query.description;
	var name = req.query.name;
	
	data.friends.push({
			"name": name,
			"description": description,
			"imageURL": " http://lorempixel.com/400/400/people"			
		});

		res.render('index', data);
  console.log("yay, addFriend just ran!");
}
