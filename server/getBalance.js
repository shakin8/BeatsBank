var stripe = require("stripe")("sk_test_u5SnaAfls7lh4yS0mxdVu8jR");

module.exports =function(req, res) {

	stripe.balance.retrieve({
	  stripe_account: "acct_1CWh15FDf4PXHgMT"
	}, function(err, balance) {

	  // asynchronously called
	  return res.send(balance)
	}
	);

}
