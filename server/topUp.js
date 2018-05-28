var stripe = require("stripe")("sk_test_u5SnaAfls7lh4yS0mxdVu8jR");

module.exports = function(req, res) {


	stripe.charges.create({
	  amount: 1000,
	  currency: "gbp",
	  source: "tok_visa",
	}, {
	  stripe_account: "acct_1CWh15FDf4PXHgMT",
	}).then(function(charge) {
	  // asynchronously called
	});


}