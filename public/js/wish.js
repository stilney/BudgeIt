'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {

  $(".wishlist-rec-yes").html('<div class="wishlist-rec"><span class="glyphicon glyphicon-thumbs-up"></span><br><p>Yes</p></div>');
  $(".wishlist-rec-wait").html('<div class="wishlist-rec"><span class="glyphicon glyphicon-pause"></span><br><p>Wait</p></div>');
  $(".wishlist-rec-no").html('<div class="wishlist-rec"><span class="glyphicon glyphicon-thumbs-down"></span><br><p>No</p></div>');

})
