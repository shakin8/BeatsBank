var stripe = require("stripe")("sk_test_u5SnaAfls7lh4yS0mxdVu8jR");

module.exports = function(req, res) {

    return stripe.accounts.create({
        email: req.body.email,
        country: "gb",        
        type: "custom"
    }).then(function(acct) {

    	console.log("Successfully Created Account: " + acct.id);
        // asynchronously called

        return res.send(acct);
    });

}