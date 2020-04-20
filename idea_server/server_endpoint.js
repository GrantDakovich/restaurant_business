const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const orderHandler = require('./order_handler/server_handle_order.js');



const app = express();
const PORT = "7000";

app.use(bodyParser.urlencoded({extended: true}));


app.post("/receive_customer_order", (req, res) => {
	// We want to store the customer order
	console.log("Order received");
	const order_obj = req.body;
	handle_customer_object(order_obj,() => {});
		
});

app.post("/fulfilled_order_request", (req, res) => {
	// We want to remove the order from the database and modify the log file

});


app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`)
});






