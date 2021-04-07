const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const User = mongoose.model("User");
const Admin = mongoose.model("Admin");

/* 
@route POST login/ 
@description Login user  
*/

router.post("/", async (req, res) => {
	let { email, password } = req.body;

	if (!email || !password)
		return res.status(400).json({ message: "Please fill all fiels" });

	//Check if user exists

	User.findOne({ email }).then((user) => {
		if (!user) return res.status(400).json({ message: "User does not exist" });

		//Validate user
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (!isMatch)
				return res.status(400).json({ message: "Invalid Password" });

			jwt.sign(
				{ id: user.id },
				process.env.JWT_SECRET,

				(err, token) => {
					if (err) throw err;

					res.status(200).json({ token, user });
				}
			);
		});
	});
});

router.post("/admin", (req, res) => {
	let { email, password } = req.body;

	if (!email || !password)
		return res.status(400).json({ message: "Please fill all fields" });

	Admin.findOne({ email }).then((user) => {
		if (!user)
			return res
				.status(400)
				.json({ message: "No Admin account is associated with that email" });

		bcrypt.compare(password, user.password).then((isMatch) => {
			if (!isMatch)
				return res.status(400).json({ message: "Invalid credential" });

			jwt.sign(
				{ id: user.id },
				process.env.JWT_SECRET,
				{ expiresIn: 86400 },
				(err, token) => {
					if (err) throw err;

					return res.status(200).json({ token, user });
				}
			);
		});
	});
});

module.exports = router;
