var stripe = require("stripe")("sk_test_u5SnaAfls7lh4yS0mxdVu8jR");

module.exports = function(req, res) {


	stripe.charges.create({
	  amount: 1050,
	  currency: "gbp",
	  source: "tok_visa_debit",
	  statement_descriptor: "Top Up"
	}, {
	  stripe_account: req.body.account,
	}).then(function(charge) {
    	console.log("Successfully topped up acct: " + req.body.account);
        // asynchronously called

        return res.send("Topped Up Successfully");
	});


}