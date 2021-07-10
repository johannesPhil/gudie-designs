const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { Admin, User } = require("../../models");

const route = express.Router();

/* 
Using SQL
@route POST register/
@desc Register  User
*/

route.post("/", async (req, res) => {
	let { name, email, password } = req.body;

	if (!name || !email || !password) {
		return res.status(400).json({ msg: "Please fill all the fields" });
	}
	const user = User.findOne({ where: { email } });

	if (!user) {
		const salt = await bcrypt.genSalt(10);
		password = await bcrypt.hash(password, salt);

		User.create({
			name,
			email,
			password,
		})
			.then((user) => {
				jwt.sign({ id: user.id }, process.env.JWT_SECRET, (err, token) => {
					if (err) {
						return res.status(400).json({ err });
					}
					return res.status(200).json({
						token,
						user,
					});
				});
			})
			.catch((err) => {
				return res.status(400).json(err);
			});
	} else {
		return res.status(400).json({ msg: "Email already in use" });
	}
});

/*
@route POST register/admin
@desc Register  Admin
*/
route.post("/admin", async (req, res) => {
	let { name, email, password } = req.body;

	if (!name || !email || !password) {
		return res.status(400).json({ msg: "Please fill all fields" });
	}

	const admin = Admin.findOne({ where: { email } });

	if (!admin) {
		const salt = await bcrypt.genSalt(10);
		password = await bcrypt.hash(password, salt);

		Admin.create({
			name,
			email,
			password,
		})
			.then((admin) => {
				jwt.sign({ id: admin.id }, process.env.JWT_SECRET, (err, token) => {
					if (err) {
						return res.status(400).json({ err });
					}
					res.status(200).json({ token, admin });
				});
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	} else {
		return res.status(400).json({ msg: "Email already in use" });
	}
});

module.exports = route;
