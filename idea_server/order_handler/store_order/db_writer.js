const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const constants = require('./../../constants.js');



// db: "RestaurantOrdersDB"
// collection: {restaurantName} + "Collection"


function insertOne(document, dbName, collectionName, callback) {
	const client = new MongoClient(constants.path_to_mongo, {useNewUrlParser: true, useUnifiedTopology: true});
	client.connect(function(err) {
		console.log("Connected successfully to server");
		const db = client.db(dbName);
		const collection = db.collection(collectionName);
		collection.insertOne(document, function(err, result) {

			client.close();
			callback();
		}
		);
	});
}



function test() {
	const a = {
		ten: "10",
		eleven: 11,
		twelve: "12"
	};
	insertOne(a, "RestaurantOrdersDB", "testCollection", () => {console.log("done")});
}

//test();







module.exports = {
	insertOne
}