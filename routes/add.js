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

exports.updateBalance = function(req, res){
	var balance = parseFloat(req.query.balance);
	

	data.bank.balance = balance;


	data.bank.remaining = data.bank.balance - data.totals.food - data.totals.utilities - data.totals.bills - data.totals.travel - data.totals.education;

	res.render('index', data);
}

exports.updateBudget = function(req, res){
	var budget = parseFloat(req.query.budget);
	var category = req.query.category;

	if(category == "food")
	{
		data.budgets.food = budget;

		data.difference.food = data.budgets.food - data.totals.food;
	}
	else if(category == "bills")
	{
		data.budgets.bills = budget;

		data.difference.bills = data.budgets.bills - data.totals.bills;
	}
	else if(category == "utilities")
	{
		data.budgets.utilities = budget;

		data.difference.utilities = data.budgets.utilities - data.totals.utilities;
	}
	else if(category == "travel")
	{
		data.budgets.travel = budget;

		data.difference.travel = data.budgets.travel - data.totals.travel;
	}
	else if(category == "education")
	{
		data.budgets.education = budget;

		data.difference.education = data.budgets.education - data.totals.education;
	}

	data.bank.allocatedForBudget = data.difference.food + data.difference.bills + data.difference.utilities + data.difference.travel + data.difference.education;
	data.bank.remaining = data.bank.balance - data.totals.food - data.totals.utilities - data.totals.bills - data.totals.travel - data.totals.education - data.bank.allocatedForBudget;
	console.log("updateBudget called on budget: " + budget + " category: " + category);

	console.log("allocatedForBudget: " + data.bank.allocatedForBudget);

	res.render('expenses', data);
}

exports.addExpense = function(req, res) {
	var price = parseFloat(req.query.price);
	var name = req.query.name;
	var category = req.query.category;

	//get the date
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10) {
	    dd='0'+dd
	} 
	if(mm<10) {
	    mm='0'+mm
	} 
	today = mm+'/'+dd+'/'+yyyy;

	
	if(category == "food")
	{
		data.food.push({
			"name": name,
			"price": price,
			"date": today
					
		});

		data.totals.food += price;

		data.difference.food = data.budgets.food - data.totals.food;
		
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
	else if (category == "education")
	{
		data.education.push({
			"name": name,
			"price": price
		});

		data.totals.education += price;
	}
	data.bank.allocatedForBudget = data.difference.food + data.difference.bills + data.difference.utilities + data.difference.travel + data.difference.education;
	data.bank.remaining = data.bank.balance - data.totals.food - data.totals.utilities - data.totals.bills - data.totals.travel - data.totals.education - data.bank.allocatedForBudget;
	console.log("allocatedForBudget: " + data.bank.allocatedForBudget);


	
       //when the document is finished loading, replace everything
       //between the <a ...> </a> tags with the value of splitText
   //document.getElementById("foodTotal").innerHTML="foodTotal";


  res.render('expenses', data);
  console.log("yay, addExpense just ran!");
}