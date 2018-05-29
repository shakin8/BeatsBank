var stripe = require("stripe")("sk_test_u5SnaAfls7lh4yS0mxdVu8jR");

module.exports =function(req, res) {

	return stripe.charges.list({ 
		stripe_account: req.body.account,
	  },function(err, charges) {
	    
	  	console.log("Loaded Charges");
	    // asynchronously called
	    return res.send(charges.data)
	  }
	);
}



