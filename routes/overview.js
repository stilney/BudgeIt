var data = require("../data.json");

exports.auth = function(req, res) {

  if (!req.session.auth)
		res.redirect('/');

  exports.calculateTotals(req, res);

}

exports.calculateTotals = function(req, res){

  if(data != null) {

    var balance = 0.0;

    if(!isNaN(parseFloat(req.query.balance)))
    {
      data.bank.balance = parseFloat(req.query.balance);
    }
    
    balance = data.bank.balance;
   


    data.bank.remaining = data.bank.balance - data.totals.food - data.totals.utilities - data.totals.bills - data.totals.travel - data.totals.luxury;


    var totalExpenses = 0.0;

    var category1 = data.food;
    var category1Expenses = 0;
    for(i = 0; i < category1.length; i++) {
      totalExpenses += parseInt(category1[i].price);
      category1Expenses += parseInt(category1[i].price);
    }

    var category2 = data.utilities;
    var category2Expenses = 0;
    for(i = 0; i < category2.length; i++) {
      totalExpenses += parseInt(category2[i].price);
      category2Expenses += parseInt(category2[i].price);
    }

    var category3 = data.bills;
    var category3Expenses = 0;
    for(i = 0; i < category3.length; i++) {
      totalExpenses += parseInt(category3[i].price);
      category3Expenses += parseInt(category3[i].price);
    }

    var category4 = data.travel;
    var category4Expenses = 0;
    for(i = 0; i < category4.length; i++) {
      totalExpenses += parseInt(category4[i].price);
      category4Expenses += parseInt(category4[i].price);
    }

    var category5 = data.luxury;
    var category5Expenses = 0;
    for(i = 0; i < category5.length; i++) {
      totalExpenses += parseInt(category5[i].price);
      category5Expenses += parseInt(category5[i].price);
    }

    console.log("Food Total: " + category1Expenses);
    console.log("Utilities Total: " + category2Expenses);
    console.log("Bills Total: " + category3Expenses);
    console.log("Travel Total: " + category4Expenses);
    console.log("Luxury Total: " + category5Expenses);
    console.log("Complete Total: " + totalExpenses);

    var expenses = {
      total : [0.0],
      totalLeft : [0.0],
      category1 : [{}],
      category2 : [{}],
      category3 : [{}],
      category4 : [{}],
      category5 : [{}]
    };

    var totalLeft = balance - totalExpenses;
    console.log("balance: " + balance + " totalExpenses: " + totalExpenses);
    var category1Percentage = (category1Expenses / balance) * 100;
    var category2Percentage = (category2Expenses / balance) * 100;
    var category3Percentage = (category3Expenses / balance) * 100;
    var category4Percentage = (category4Expenses / balance) * 100;
    var category5Percentage = (category5Expenses / balance) * 100;

    data.total[0] = (totalExpenses);
    data.totalLeft[0] = (totalLeft)
    data.category1[0] = ({ total : category1Expenses, "percentage" : category1Percentage});
    data.category2[0] = ({ total : category2Expenses, "percentage" : category2Percentage});
    data.category3[0] = ({ total : category3Expenses, "percentage" : category3Percentage});
    data.category4[0] = ({ total : category4Expenses, "percentage" : category4Percentage});
    data.category5[0] = ({ total : category5Expenses, "percentage" : category5Percentage});
    console.log(data);

  }

	res.render('index', data);
};
