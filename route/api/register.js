const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const sequelize = require("sequelize");
// const Admin = mongoose.model("Admin");
// const User = mongoose.model("User");
// const db = require("../../config/db");

const { Admin, User } = require("../../models");
const user = require("../../models/user");
// const Admin = require("../../models/Admin");

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
	User.findOne({ where: { email } }).then((user) => {
		if (user) {
			return res.status(400).json({ msg: "Email already in use" });
		}
	});

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

	Admin.findOne({ where: { email } }).then((admin) => {
		if (admin) {
			return res.status(400).json({ msg: "Admin email already in use" });
		}
	});

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
});

module.exports = route;
