const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = function (passport) {
	passport.use(
		new GoogleStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
				callbackURL: "http://localhost:3000/auth/google/callback",
				proxy: true,
			},
			async (accessToken, refreshToken, profile, done) => {
				console.log({ token: accessToken, profile: profile });
			}
		)
	);
	// passport.serializeUser((user, done) => {
	// 	done(null, user.id);
	// });

	// passport.deserializeUser((id, done) => {
	// 	User.findById(id, (err, user) => done(err, user));
	// });
};
