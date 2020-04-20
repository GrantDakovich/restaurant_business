const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoose = require('mongoose');

const constants = require('./../constants.js');


const client = new MongoClient(constants.path_to_mongo);

client.connect(function(err) {
	console.log("Connected successfully to server");
	const db = client.db(dbname);
	client.close();
})



































