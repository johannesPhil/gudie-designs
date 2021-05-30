const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const route = express.Router();
const { Admin, User } = require("../../models");
// const Admin = require("../../models/Admin");
const jwtAuth = require("../../middleware/jwtAuth");

/* 
@route POST login/ 
@description Login user  
*/

route.post("/", (req, res) => {
	// res.status(200).json({ message: "User Login" });
	let { email, password } = req.body;

	if (!email || !password)
		return res.status(400).json({ msg: "Please fill all fields" });

	//Check if user exists

	User.findOne({ where: { email } })
		.then((user) => {
			if (!user) return res.status(400).json({ msg: "User does not exist" });

			//Validate user
			bcrypt.compare(password, user.password).then((isMatch) => {
				if (!isMatch) return res.status(400).json({ msg: "Invalid Password" });

				jwt.sign(
					{ id: user.id },
					process.env.JWT_SECRET,

					(err, token) => {
						if (err) return res.status(400).json(err);

						res.json({
							token,
							user,
						});
					}
				);
			});
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

route.post("/admin", (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ msg: "Please fill all fields" });
	}

	Admin.findOne({ where: { email } })
		.then((admin) => {
			if (!admin) {
				return res.status(400).json({ msg: "Admin does not exist" });
			}

			bcrypt.compare(password, admin.password).then((isMatch) => {
				if (!isMatch) {
					return res.status(400).json({ msg: "Invalid credentials" });
				}

				jwt.sign(
					{ id: admin.id },
					process.env.JWT_SECRET,
					{ expiresIn: 86400 },
					(err, token) => {
						if (err) {
							return res.status(400).json(err);
						}

						return res.status(200).json({
							token,
							admin,
						});
					}
				);
			});
		})
		.catch((err) => {
			return res.status(400).json(err);
		});
});

route.get("/client", jwtAuth, (req, res) => {
	Admin.findByPk(req.client.id)
		.then((client) => {
			return res.status(200).json({ client });
		})
		.catch((err) => {
			return res.status(400).json(err);
		});
});

module.exports = route;
