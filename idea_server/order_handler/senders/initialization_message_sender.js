import lookup_domain from "./business_id_lookup";
import send_init_message from "./init_messenger.js";

// Here we lookup the business id from a table to get an ip address or domain to route to


send_init_message(business_id, callback) {
	lookup_domain(business_id, (business_domain) => {
		if (business_domain === null) {
			throw error;
		}
		else {
			/*send_init_message(business_domain, (err, response) => {
				if (err) {
					console.log("Failed");
				}
				else {
					callback(response);
				}
			});*/
			callback({});
		}
	});
	
}