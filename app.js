
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var expenses = require('./routes/expenses');
//var expensesOld = require('./routes/expensesOld');
var wishlist = require('./routes/wishlist');
var budget = require('./routes/budget');
var add = require('./routes/add');
var login = require('./routes/login');
var overview = require('./routes/overview');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/overview', overview.calculateTotals);
app.get('/expenses', expenses.viewExpenses);
app.get('/expensesOld', expenses.viewExpensesOld);
app.get('/wishlist', wishlist.viewWishlist);
// app.get('/add', add.auth);
// app.get('/updateBudget', add.auth);
// app.get('/updateBalance', add.auth);
// app.get('/calculateTotals', overview.auth);
// app.get('/addWish', add.auth);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.viewLogin);
app.post('/login', login.authenticateAccount);
app.get('/overview', index.view);
app.get('/add', add.addExpense);
app.get('/updateBudget', add.updateBudget);
app.get('/updateBalance', add.updateBalance);
app.get('/calculateTotals', overview.calculateTotals);
app.get('/addWish', add.addWishlist);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
