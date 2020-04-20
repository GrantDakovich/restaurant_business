const fs = require("fs");
const path = require("path");
const util = require("util");

const jsoc = require("js-object-compare");

function isEquivalent(a, b) {
    if (jsoc.sameContent(a, b)) {
    	return true;
    }
    else {
    	return false;
    }
}

function logOrder(customer_obj, log_file_dir, log_file_name, callback) {
	var string_customer_obj = JSON.stringify(customer_obj);
	//fs.writeFile(path.join(__dirname, log_file_dir, log_file_name), string_customer_obj, callback);

	fs.appendFile(path.join(__dirname, log_file_dir, log_file_name), string_customer_obj, callback);
	
}



function test() {
	let customer_obj = {
		customer_type: "restaurant",
		time_sent: 21312,
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
	const file_dir = "log_dir";
	const file_name = "testorderlogs.txt";

	const filePath = path.join(__dirname, file_dir, file_name);
	logOrder(customer_obj, file_dir, file_name, (err) => {
		if (err) {
			console.log(err);
			fs.unlink(filePath, () => {
				console.log("Successfully unlinked");
			});
		}
		else {
			fs.readFile(filePath, "utf-8", (err, data) => {
				if (err) {
					console.log(err);
					fs.unlink(filePath, () => {
						console.log("Successfully unlinked");
					});
				}
				else {

					console.log(data);
					const converted_str_json = JSON.parse(data);
					if (isEquivalent(converted_str_json, customer_obj)) {
						console.log("TEST PASSED");
					}
					else {
						console.log("****************");
						console.log("Converted JSON:");
						console.log(JSON.stringify(converted_str_json));
						console.log("Original Object:");
						console.log(JSON.stringify(customer_obj));
						console.log("****************");
						console.log("FAILED LOGGER TEST");

					}
					fs.unlink(filePath, () => {
						console.log("Successfully unlinked");
					});
				}
			});
		}
	});
}
test();

module.exports = {
	logOrder
}






