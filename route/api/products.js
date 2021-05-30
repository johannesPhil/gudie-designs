const express = require("express");

const route = express.Router();

route.post("/", (req, res) => {
	const { caption, price, color, quantity, description, photos } = req.body;
	console.log(req.body);
	res.json(req.body);
});

module.exports = route;
