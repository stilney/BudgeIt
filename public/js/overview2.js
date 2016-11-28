'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {


	var amount = $(".defSur2").text();
	console.log("---" + amount + "---");

	if(parseInt(amount) >= 0) {
		

		$(".defSur").html('<span class="total-budget-left defSur2">$' + amount + '</span><br>Surplus</td>');
	} else {
		$(".defSur").html('<span class="total-budget-left defSur2">-$' + Math.abs(amount) + '</span><br>Deficit</td>');
	}

	/*
	var accountBalance = $(".accBal2").text();

	if(parseInt(accountBalance) >= 0) {

		$(".accBalTD").html('<td class="accBalTD" colspan="5" align="center" height="100px"><span class="glyphicon glyphicon-pencil" id="editBalance" style="float:right;"></span><span class="total-budget-left accBal2">$' + accountBalance + '</span><br>Account Balance</td>');

	} else {

		$(".accBalTD").html('<td class="accBalTD" colspan="5" align="center" height="100px"><span class="glyphicon glyphicon-pencil" id="editBalance" style="float:right;"></span><span class="total-budget-left accBal2">-$' + Math.abs(accountBalance) + '</span><br>Account Balance</td>');

	}
	*/


})