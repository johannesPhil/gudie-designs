const express = require("express");
const router = express.Router();
const passport = require("passport");

// @desc Auth with Google
// @route GET /auth.google
router.get(
	"/google",
	passport.authenticate("google", {
		scope: ["https://www.googleapis.com/auth/plus.login", "profile"],
	})
);

// @desc Google auth callback
// @route GET /auth/google/callback
router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/" }),
	(req, res) => {
		res.redirect(req.headers.host + "/dashboard?token=" + req.user.token);
	}
);

module.exports = router;
