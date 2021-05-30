const jwt = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {
	const token = req.header("x-auth-token");

	if (!token) {
		return res.status(400).json({ msg: "Your request is UNAUTHORIZED" });
	}

	try {
		const decipher = jwt.verify(token, process.env.JWT_SECRET);

		req.client = decipher;
	} catch (error) {
		return res.status(403).json({ msg: "Invalid Token Supplied" });
	}

	next();
};

module.exports = jwtAuth;
