const jwt = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {
	const token = req.headers("x-auth-token");

	if (!token)
		return res.status(401).json({ message: "Your request is UNAUTHORIZED" });

	try {
		const decipher = jwt.verify(token, process.env.JWT_SECRET);

		req.user = decipher;
	} catch (error) {
		return res.status(400).json({ message: "Invalid Token Supplied" });
	}

	next();
};

module.exports = jwtAuth;
