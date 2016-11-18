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

exports.auth = function(req, res) {

  if (!req.session.auth) {
	res.redirect('/');
	return;
  }
}

exports.addWishlist = function(req, res) {

	exports.auth(req,res);

	var price = req.query.price;
	var name = req.query.name;

	wishlistJSON.wishlist.push({
		"name": name,
		"price": price
	});

	res.render('wishlist', wishlistJSON);
}

exports.updateBalance = function(req, res){
	exports.auth(req,res);
	var balance = parseFloat(req.query.balance);
	if (!balance) {
		balance = 0;
	}
	console.log("@@@@@");
	console.log(balance);

	data.bank.balance = balance;


	data.bank.deficitSurplus = data.bank.balance - data.bank.unpaidExpenses;

	res.render('index', data);
}

exports.updateBudget = function(req, res){
	exports.auth(req,res);
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
	else if(category == "education")
	{
		data.budgets.education = budget;

	}

	data.bank.totalExpenses = data.budgets.food + data.budgets.bills + data.budgets.utilities + data.budgets.travel + data.budgets.education;

	data.bank.unpaidExpenses = data.bank.totalExpenses - data.bank.totalPaidSoFar; 
	//data.bank.unpaidExpenses = data.difference.food + data.difference.bills + data.difference.utilities + data.difference.travel + data.difference.education;
	data.bank.deficitSurplus = data.bank.balance  - data.bank.unpaidExpenses;
	console.log("updateBudget called on budget: " + budget + " category: " + category);

	console.log("unpaid expenses: " + data.bank.unpaidExpenses);

	res.render('expenses', data);
}

exports.addExpense = function(req, res) {
	exports.auth(req,res);
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

		data.bank.balance -= price;
		
	}
	else if (category == "utilities")
	{
		data.utilities.push({
			"name": name,
			"price": price,
			"date": today
		});

		data.totals.utilities += price;

		data.difference.utilities = data.budgets.utilities - data.totals.utilities;

		data.bank.balance -= price;
	}
	else if (category == "bills")
	{
		data.bills.push({
			"name": name,
			"price": price,
			"date": today
		});

		data.totals.bills += price;

		data.difference.bills = data.budgets.bills - data.totals.bills;

		data.bank.balance -= price;
	}
	else if (category == "travel")
	{
		data.travel.push({
			"name": name,
			"price": price,
			"date": today
		});

		data.totals.travel += price;

		data.difference.travel = data.budgets.travel - data.totals.travel;

		data.bank.balance -= price;
	}
	else if (category == "education")
	{
		data.education.push({
			"name": name,
			"price": price,
			"date": today
		});

		data.totals.education += price;

		data.difference.education = data.budgets.education - data.totals.education;

		data.bank.balance -= price;
	}
	data.bank.totalPaidSoFar = Math.min(data.totals.food, data.budgets.food) + Math.min(data.totals.bills, data.budgets.bills) + Math.min(data.totals.utilities, data.budgets.utilities) + Math.min(data.totals.travel, data.budgets.travel) + Math.min(data.totals.education, data.budgets.education);
    console.log("data.bank.totalPaidSoFar: " + data.bank.totalPaidSoFar);
	data.bank.unpaidExpenses = data.bank.totalExpenses - data.bank.totalPaidSoFar; 
	console.log("unpaid Expenses: " + data.bank.unpaidExpenses);


	
       //when the document is finished loading, replace everything
       //between the <a ...> </a> tags with the value of splitText
   //document.getElementById("foodTotal").innerHTML="foodTotal";


  res.render('expenses', data);
  console.log("yay, addExpense just ran!");
}