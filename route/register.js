const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Admin = mongoose.model("Admin");
const User = mongoose.model("User");

const router = express.Router();

/* 
@route POST register/
@desc Register  User
*/

router.post("/", async (req, res) => {
	let { name, email, password } = req.body;

	if (!name || !email || !password)
		return res.status(400).json({ message: "Please fill all fields" });

	User.findOne({ email }).then((user) => {
		if (user) return res.status(400).json({ message: "Email already in use" });
	});

	const salt = await bcrypt.genSalt(10);
	password = await bcrypt.hash(password, salt);

	const newUser = new User({
		name,
		email,
		password,
	});

	newUser.save().then((user) => {
		jwt.sign({ id: user.id }, process.env.JWT_SECRET, (err, token) => {
			if (err) throw err;
			res.status(200).json({ token, user });
		});
	});
});

/* 
@route POST register/admin
@desc Register  Admin
*/
router.post("/admin", async (req, res) => {
	let { name, email, password } = req.body;

	if (!name || !email || !password)
		return res.status(400).json({ message: "Please fill all fields" });

	Admin.findOne({ email }).then((admin) => {
		if (admin)
			return res.status(400).json({ message: "Admin email already in use" });
	});

	const salt = await bcrypt.genSalt(10);
	password = await bcrypt.hash(password, salt);

	const admin = new Admin({
		name,
		email,
		password,
	});

	admin.save().then((admin) => {
		jwt.sign(
			{ id: admin.id },
			process.env.JWT_SECRET,
			{ expiresIn: 86400 },
			(err, token) => {
				if (err) throw err;
				res.status(200).json({ token, admin });
			}
		);
	});
});

module.exports = router;
