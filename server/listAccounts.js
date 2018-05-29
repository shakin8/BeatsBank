var stripe = require("stripe")("sk_test_u5SnaAfls7lh4yS0mxdVu8jR");

module.exports =function(req, res) {

	stripe.accounts.list(
	  { limit: 100 },
	  function(err, accounts) {
	  	console.log("Loaded Accounts list");
	    return res.send(accounts.data)
	  }
	);

}