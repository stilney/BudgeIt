/*
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

*/

var data = require("../data.json");




exports.addExpense = function(req, res) {
	var price = req.query.price;
	var name = req.query.name;
	var category = req.query.category;
	
	if(category == "food")
	{
		data.food.push({
			"name": name,
			"price": price
					
		});
	}
	else if (category == "utilities")
	{
		data.utilities.push({
			"name": name,
			"price": price
		});
	}
	else if (category == "bills")
	{
		data.bills.push({
			"name": name,
			"price": price
		});
	}
	else if (category == "travel")
	{
		data.travel.push({
			"name": name,
			"price": price
		});
	}
	else if (category == "luxury")
	{
		data.luxury.push({
			"name": name,
			"price": price
		});
	}


	console.log("data.food.length: " + data.food.length);
	var index;
	var foodTotal = 0;
	for (index = 0; index < data.food.length; ++index) {
    console.log(data.food[index].name + " " + data.food[index].price );
    foodTotal = foodTotal + data.food[index].price;
}

	
       //when the document is finished loading, replace everything
       //between the <a ...> </a> tags with the value of splitText
   //document.getElementById("foodTotal").innerHTML="foodTotal";


  res.render('expenses', data);
  console.log("yay, addExpense just ran!");
}