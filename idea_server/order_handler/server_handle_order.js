const check_orders = require("./order_obj_checker/server_check_orders.js").check_orders;
//const log_order from "./logger.js";
const store_order = require("./store_order/store_order.js").store_order;

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function handle_customer_object(customer_obj, callback) {
	// Record the transaction to a log file/ database
		// Time of transaction
		// check business_id

	check_orders(customer_obj, (err) => {
		if (!(isEmpty(err))) {
			// If there's an error
			console.log("Failed when checking order object");
			console.log(err);
		}
		else {
			console.log("Finished checking order");
			// Saves to log file
			store_order(customer_obj, () => {
				console.log("Finsihed storing order")
				send_new_order_to_business(customer_obj.business_id, () => {
					console.log("Order sent successfully");
				});
			});
			

			// Send init message to buisiness endpoint
			/*send_init_message(customer_obj.business_id, (init_business_response) => {
				if (init_business_response) {
					check_business_response(init_business_response, (err) => {
						if (err !== {}) {
							// If there's an error
						}
						else {
							//log_business_response(init_business_response);
							send_order_to_business(customer_obj);
							send_confirmation_to_customer(customer_obj);
						}
					});
				}
				else {
					// There is an error
				}
			});*/
		}
	});
}


function test() {
	var ts = (new Date()).getTime();
	const test_customer_obj = {
		customer_type: "restaurant",
		business_name: "test",
		time_sent: ts,
		time_checked: null,
		data: [
		// If a menu //
			{
				order_number: 1,
				item_id: 2143,
				modifications: {
					
				}	
			}
		]
	}


	handle_customer_object(test_customer_obj, () => {
		console.log("done");
	})
}


module.exports = {
	handle_customer_object
}





