const axios = require("axios");

function send_new_order_to_business(customer_obj, location) {
	axios.post(location, customer_obj)
		.then(function (response) {
    		console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

function test() {
	const a = {
		a: 234,
		b: 23
	}
	send_new_order_to_business(a, "http://localhost:8000/test/");
}

//test();

module.exports = {
	send_new_order_to_business
}





