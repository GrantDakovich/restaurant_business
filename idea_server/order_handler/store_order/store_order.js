const insertOne = require("./db_writer.js").insertOne;
/*
	customer_obj: {
		customer_type: ("restaurant"),
		business_name: String,
		time_sent: INT,
		time_checked: null,
		data: [
		// If a menu //
			{
				order_number: 1,
				item_id: 21938,
				modifications: {
					
				}	
			}
		]
	}
*/

function store_order (customer_obj) {
	if (customer_obj === null) {
		return null;
	}
	customer_obj["completed"] = false;
	if (customer_obj.customer_type === "restaurant") {
		const dbName = "RestaurantOrdersDB";
		const collectionName = customer_obj.business_name + "Collection";
		insertOne(customer_obj, dbName, collectionName,
			() => {
				console.log("Success");
			}
		);
	}
	
	



}


function test() {
	const customer_obj1 = {
		customer_type: "restaurant",
		business_name: "test",
		time_sent: 2143242,
		time_checked: 32324235,
		data: [
			{
				order_number: 1,
				item_id: 21938,
				modifications: {
					
				}	
			}
		]
	}

	store_order(customer_obj1);

}


module.exports = {
	store_order
}




