
const business_id_domain_db = {
	1: "www.bruh.com",
	2: "www.dennys.com",
	3: "www.matz.com",
	4: "www.biz.com",
	5: "www.business.com"
}



function lookup_domain(business_id, callback) {
	var business_domain = business_id_domain_db[business_id]
	var response;
	if (business_domain === undefined) {
		response = null;
	}
	else {
		response = business_domain;
	} 
	callback(response);
}


function test(non_existent_id, valid_lookup_id, valid_lookup_domain) {
	{
		console.log("TEST #1: undefined domain");
		lookup_domain(non_existent_id, (res) => {
			if (res === null) {
				console.log("Passed");
			}
			else {
				console.log("Expected:");
				console.log("null");
				console.log("Actual:");
				console.log(res);
				console.log("********Failed");
			}
		}) 
		
	}
	{
		console.log("TEST #2: invalid parameter");
		lookup_domain(null, (res) => {
			if (res === null) {
				console.log("Passed");
			}
			else {
				console.log("Expected:");
				console.log("null");
				console.log("Actual:");
				console.log(res);
				console.log("********Failed");
			}
		})
		
	}
	{
		console.log("TEST #3: valid lookup");
		lookup_domain(valid_lookup_id, (res) => {
			if (res === valid_lookup_domain) {
				console.log("Passed");
			}
			else {
				console.log("Expected:");
				console.log(valid_lookup_domain);
				console.log("Actual:");
				console.log(res);
				console.log("********Failed");
			}
		})
		
	}

}

test(6, 3, "www.matz.com");

