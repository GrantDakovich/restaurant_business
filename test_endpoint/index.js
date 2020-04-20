const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const PORT = "8000";

app.use(bodyParser.json());


app.post("/test", (req, res) => {
	console.log(req.body);
	res.send();
});


app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`)
});

