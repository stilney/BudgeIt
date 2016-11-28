var wishlistData = require('../wishlist.json');
var budgetData = require('../data.json');

exports.auth = function(req, res) {

  if (!req.session.auth) {
  	res.redirect('/');
  }
}

exports.viewWishlist = function(req, res){
	exports.auth(req,res);

  wishlistData.points.total = budgetData.points.total;



  var deficitSurplus = budgetData.bank.deficitSurplus;
  //console.log("DefSur" + deficitSurplus);

  for(i = 0; i < Object.keys(wishlistData.wishlist).length; i++) {

    var currentItem = wishlistData.wishlist[i];

    if(currentItem!= null) {

      if(deficitSurplus <= 0) {
        currentItem["recommend"] = "wishlist-rec-no";
      } else {

        var budgetBreathingRoom = 0.1 * deficitSurplus;
        if(deficitSurplus - currentItem.price > budgetBreathingRoom) {
          currentItem["recommend"] = "wishlist-rec-yes";
        } else if(deficitSurplus - currentItem.price >= 0) {
          currentItem["recommend"] = "wishlist-rec-wait";
        } else {
          currentItem["recommend"] = "wishlist-rec-no";
        }

      }
    }

  }

  //console.log(wishlistData.wishlist);
  //console.log("Counter" + Object.keys(wishlistData.wishlist).length);

	res.render('wishlist', wishlistData);
};
