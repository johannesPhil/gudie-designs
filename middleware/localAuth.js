const jwt = require("jsonwebtoken");

const localAuth = (req, res, next) => {
	const token = req.header("x-auth-token");

	if (!token) return res.status(401).json({ message: "Unauthorized Access" });

	try {
		const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

		req.admin = verifiedToken;
	} catch (error) {
		res.status(400).json({ message: "Invalid Token", error });
	}

	next();
};

module.exports = localAuth;
