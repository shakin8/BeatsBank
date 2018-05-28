var stripe = require("stripe")("sk_test_u5SnaAfls7lh4yS0mxdVu8jR");

module.exports =function(req, res) {

	stripe.balance.retrieve({
	  stripe_account: req.body.account
	}, function(err, balance) {

	  // asynchronously called
	  return res.send(balance)
	}
	);

}
