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
var wishlistJSON = require("../wishlist.json");

exports.addWishlist = function(req, res) {

	var price = req.query.price;
	var name = req.query.name;

	wishlistJSON.wishlist.push({
		"name": name,
		"price": price
	});

	res.render('wishlist', wishlistJSON);
}

exports.updateBudget = function(req, res){
	var budget = parseFloat(req.query.budget);
	var category = req.query.category;

	if(category == "food")
	{
		data.budgets.food = budget;
	}
	else if(category == "bills")
	{
		data.budgets.bills = budget;
	}
	else if(category == "utilities")
	{
		data.budgets.utilities = budget;
	}
	else if(category == "travel")
	{
		data.budgets.travel = budget;
	}
	else if(category == "luxury")
	{
		data.budgets.luxury = budget;
	}

	console.log("updateBudget called on budget: " + budget + " category: " + category);

	res.render('expenses', data);
}

exports.addExpense = function(req, res) {
	var price = parseFloat(req.query.price);
	var name = req.query.name;
	var category = req.query.category;
	
	if(category == "food")
	{
		data.food.push({
			"name": name,
			"price": price
					
		});

		data.totals.food += price;
		
	}
	else if (category == "utilities")
	{
		data.utilities.push({
			"name": name,
			"price": price
		});

		data.totals.utilities += price;
	}
	else if (category == "bills")
	{
		data.bills.push({
			"name": name,
			"price": price
		});

		data.totals.bills += price;
	}
	else if (category == "travel")
	{
		data.travel.push({
			"name": name,
			"price": price
		});

		data.totals.travel += price;
	}
	else if (category == "luxury")
	{
		data.luxury.push({
			"name": name,
			"price": price
		});

		data.totals.luxury += price;
	}


	console.log("data.food.length: " + data.food.length);
	var index;
	var foodTotal = 0;
	for (index = 0; index < data.food.length; ++index) {
    console.log(data.food[index].name + " " + data.food[index].price );
    foodTotal = foodTotal + data.food[index].price;

	  res.render('expenses', data);
}

	
       //when the document is finished loading, replace everything
       //between the <a ...> </a> tags with the value of splitText
   //document.getElementById("foodTotal").innerHTML="foodTotal";


  res.render('expenses', data);
  console.log("yay, addExpense just ran!");
}