const jsoc = require("js-object-compare");


/*
	customer_obj: {
		customer_type: ("restaurant"),
		business_name: "test",
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

// TEMPORARY FUNCTIONS

function throw_error(err_message, err_obj) {
	//console.log("ERROR: " + err_message);
	err_obj[err_message] = true;
	return err_message;
	//process.exit(1);
}

function getAllOrderIDs() {
	return [2143,2141,2222,1912];
}

///////////////////////

function check_type(customer_obj, err_obj) {
	if (customer_obj.customer_type === undefined) {
		throw_error("Check_Type_Field_DNE", err_obj);
		return;
	}
	if (customer_obj.customer_type === null) {
		throw_error("Check_type_error", err_obj);
	}
	if (customer_obj.customer_type !== "restaurant") {
		throw_error("Check_type_error", err_obj);
	}
}

function check_order_time(customer_obj, err_obj) {
	if (customer_obj.time_sent === undefined) {
		throw_error("Time_Sent_Field_DNE", err_obj);
		return; 
	}
	if ((typeof customer_obj.time_sent) !== "number") {
		throw_error("Check_order_error", err_obj);
	}

	var ts = (new Date()).getTime();
	//console.log(ts);
	// If there is more than a 50 second difference, be confused
	if (Math.abs(ts - customer_obj.time_sent) > 50000) {
		throw_error("Check_order_error", err_obj);
	}
}

function check_checked_time(customer_obj, err_obj) {
	if (customer_obj.time_checked === undefined) {
		throw_error("Time_Checked_Field_DNE", err_obj);
		return; 
	}
	if (customer_obj.time_checked !== null) {
		throw_error("Checked_time_error", err_obj);
	}
}

// RESTAURANT FUNCTIONS
function check_order_ids(customer_obj, err_obj) {
	if (customer_obj.data === undefined) {
		throw_error("Data_Field_DNE", err_obj);
		return;
	}
	const order_ids_arr = getAllOrderIDs();
	for (let i = 0; i < customer_obj.data.length; i++) {
		if (!(order_ids_arr.includes(customer_obj.data[i].item_id))) {
			throw_error("Check_order_ids_error", err_obj);
			return;
		}
	}
}

function check_modifications_are_objs(customer_obj, err_obj) {
	if (customer_obj.data === undefined) {
		throw_error("Data_Field_DNE", err_obj);
		return;
	}
	for (let i = 0; i < customer_obj.data.length; i++) {
		if (!(customer_obj.data[i].modifications instanceof Object)) {
			throw_error("Check_modifications_are_objs", err_obj);
			return;
		}
	}
}
//////////////////

function check_data(customer_obj, err_obj) {
	if (customer_obj.data === undefined) {
		throw_error("Customer_Data_Field_DNE", err_obj);
		return;
	}
	if (customer_obj.customer_type === "restaurant") {
		if (!(customer_obj.data instanceof Array)) {
			throw_error("Check_data_error", err_obj);
			return;
		}
		// Order numbers must starting from 1 and they must contain every sequential number up until the max
		

		const order_number_arr = []
		for (let i = 0; i < customer_obj.data.length; i++) {
			order_number_arr.push(customer_obj.data[i].order_number);
		}
		order_number_arr.sort();
		var last_num = null;
		if (order_number_arr.length >= 2) {
			for (let i = 0; i < order_number_arr.length; i++) {
				if (last_num === null) {
					if (order_number_arr[i] === 1) {
						last_num = order_number_arr[i]
					}
					else {
						throw_error("Check_data_error", err_obj);
					}
				}
				else {
					if (!(order_number_arr[i] === last_num + 1)) {
						throw_error("Check_data_error", err_obj);
					}
					else {
						last_num = order_number_arr[i];
					}
				}
			}
		}
		check_order_ids(customer_obj, err_obj);
		check_modifications_are_objs(customer_obj, err_obj);
	}
}



function check_orders(customer_obj, callback) {
	err_obj = {};
	check_type(customer_obj, err_obj);
	check_order_time(customer_obj, err_obj);
	check_checked_time(customer_obj, err_obj);
	check_data(customer_obj, err_obj);
	callback(err_obj);
}

function isEquivalent(a, b) {
    if (jsoc.sameContent(a, b)) {
    	return true;
    }
    else {
    	return false;
    }
    
    
}

function test_output(actual_err_obj, expected_err_obj) {
	const equivVal = isEquivalent(actual_err_obj, expected_err_obj);
	if (equivVal) {
		console.log("PASSED");
	}
	else {
		console.log("FAILED");
		console.log("Actual:");
		console.log(actual_err_obj);
		console.log("Expected:");
		console.log(expected_err_obj);
	}
}

function test() {
	{
		console.log("CHECK #1: All existence tests");
		let menu_obj = {
		}
		check_orders(menu_obj, (err_obj) => {
			//console.log(err_obj);
			expected_err_object = {
				"Check_Type_Field_DNE": true,
				"Time_Sent_Field_DNE": true,
				"Time_Checked_Field_DNE": true,
				"Customer_Data_Field_DNE": true
			};
			test_output(err_obj, expected_err_object);
		});
	}

	{
		console.log("CHECK #2: Should fail type test");
		let menu_obj = {
			customer_type: "restaurante",
		}
		check_orders(menu_obj, (err_obj) => {
			//console.log(err_obj);
			expected_err_object = {
				"Check_type_error": true,
				"Time_Sent_Field_DNE": true,
				"Time_Checked_Field_DNE": true,
				"Customer_Data_Field_DNE": true
			};
			test_output(err_obj, expected_err_object);
		});
	}

	{
		console.log("CHECK #3: Should fail");
		var ts = (new Date()).getTime();
		let menu_obj = {
			customer_type: "restaurant",
			time_sent: ts,
			time_checked: null,
			data: [
				{
					order_number: 1,
					item_id: 21938,
					modifications: {
						
					}	
				}
			]
		}
		check_orders(menu_obj, (err_obj) => {
			expected_err_object = {
				"Check_order_ids_error": true
			};
			test_output(err_obj, expected_err_object);
		});
	}

	{
		console.log("CHECK #4: Error time checked filled");
		let menu_obj = {
			customer_type: "restaurant",
			time_sent: ts,
			time_checked: 23,
			data: [
				{
					order_number: 1,
					item_id: 2141,
					modifications: {

					}
				}
			]
		}
		check_orders(menu_obj, (err_obj) => {
			expected_err_object = {
				"Checked_time_error": true
			};
			test_output(err_obj, expected_err_object);
		});
	}

	{
		console.log("CHECK #5: Passable");
		let menu_obj = {
			customer_type: "restaurant",
			time_sent: ts,
			time_checked: null,
			data: [
				{
					order_number: 1,
					item_id: 2141,
					modifications: {

					}
				}
			]
		}
		check_orders(menu_obj, (err_obj) => {
			expected_err_object = {
			};
			test_output(err_obj, expected_err_object);
		});
	}

	{
		console.log("CHECK #6: Faulty item_id");
		let menu_obj = {
			customer_type: "restaurant",
			time_sent: ts,
			time_checked: null,
			data: [
				{
					order_number: 1,
					item_id: null,
					modifications: {

					}
				}
			]
		}
		check_orders(menu_obj, (err_obj) => {
			expected_err_object = {
				"Check_order_ids_error": true
			};
			test_output(err_obj, expected_err_object);
		});
	}

	{
		console.log("CHECK #7: Non-array data");
		let menu_obj = {
			customer_type: "restaurant",
			time_sent: ts,
			time_checked: null,
			data: 
				{
					order_number: 1,
					item_id: 2222,
					modifications: {

					}
				}
			
		}
		check_orders(menu_obj, (err_obj) => {
			expected_err_object = {
				"Check_data_error": true
			};
			test_output(err_obj, expected_err_object);
		});
	}

	{
		console.log("CHECK #8: Null data error");
		let menu_obj = {
			customer_type: "restaurant",
			time_sent: ts,
			time_checked: null,
			data: null
		}
		check_orders(menu_obj, (err_obj) => {
			expected_err_object = {
				"Check_data_error": true
			};
			test_output(err_obj, expected_err_object);
		});
	}

	{
		console.log("CHECK #9: Pass with multiple menu items in order");
		let menu_obj = {
			customer_type: "restaurant",
			time_sent: ts,
			time_checked: null,
			data: [
				{
					order_number: 1,
					item_id: 2141,
					modifications: {
					}
				},
				{
					order_number: 2,
					item_id: 2141,
					modifications: {
					}
				}
			]
		}
		check_orders(menu_obj, (err_obj) => {
			expected_err_object = {
			};
			test_output(err_obj, expected_err_object);
		});
	}

	{
		console.log("CHECK #10: Pass with multiple menu items out of order");
		let menu_obj = {
			customer_type: "restaurant",
			time_sent: ts,
			time_checked: null,
			data: [
				{
					order_number: 2,
					item_id: 2141,
					modifications: {
					}
				},
				{
					order_number: 1,
					item_id: 2141,
					modifications: {
					}
				}
			]
		}
		check_orders(menu_obj, (err_obj) => {
			expected_err_object = {
			};
			test_output(err_obj, expected_err_object);
		});
	}

	{
		console.log("CHECK #11: Pass with multiple menu items out of order");
		let menu_obj = {
			customer_type: "restaurant",
			time_sent: ts,
			time_checked: null,
			data: [
				{
					order_number: 2,
					item_id: 2141,
					modifications: {
					}
				},
				{
					order_number: 1,
					item_id: 2141,
					modifications: {
					}
				}
			]
		}
		check_orders(menu_obj, (err_obj) => {
			expected_err_object = {
			};
			test_output(err_obj, expected_err_object);
		});
	}

	{
		console.log("CHECK #12: Fail with multiple menu items in order but not starting at 1");
		let menu_obj = {
			customer_type: "restaurant",
			time_sent: ts,
			time_checked: null,
			data: [
				{
					order_number: 2,
					item_id: 2141,
					modifications: {
					}
				},
				{
					order_number: 3,
					item_id: 2141,
					modifications: {
					}
				}
			]
		}
		check_orders(menu_obj, (err_obj) => {
			expected_err_object = {
				"Check_data_error": true
			};
			test_output(err_obj, expected_err_object);
		});
	}

	{
		console.log("CHECK #13: Fail with multiple menu items starting at 1 but not consecutive");
		let menu_obj = {
			customer_type: "restaurant",
			time_sent: ts,
			time_checked: null,
			data: [
				{
					order_number: 1,
					item_id: 2141,
					modifications: {
					}
				},
				{
					order_number: 3,
					item_id: 2141,
					modifications: {
					}
				}
			]
		}
		check_orders(menu_obj, (err_obj) => {
			expected_err_object = {
				"Check_data_error": true
			};
			test_output(err_obj, expected_err_object);
		});
	}

	{
		console.log("CHECK #14: Non-object modifications");
		let menu_obj = {
			customer_type: "restaurant",
			time_sent: ts,
			time_checked: null,
			data: [
				{
					order_number: 1,
					item_id: 2141,
					modifications: {
					}
				},
				{
					order_number: 2,
					item_id: 2141,
					modifications: null
				}
			]
		}
		check_orders(menu_obj, (err_obj) => {
			expected_err_object = {
				"Check_modifications_are_objs": true
			};
			test_output(err_obj, expected_err_object);
		});
	}
}


module.exports = {
	check_orders
}
