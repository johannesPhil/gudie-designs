const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const { sequelize } = require("./models");
// const connectDB = require("./config/db");
// const sql = require("./config/sqldb");
// const session = require("express-session");
// const passport = require("passport");
const path = require("path");

//Config
dotenv.config({ path: "./config/config.env" });

// connectDB
// 	.authenticate()
// 	.then(() => console.log("Sequelize Running!"))
// 	.catch((err) => console.log(err));

const app = express();

//BodyParser Middleware
app.use(express.json());

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// app.use(express.static(path.join(__dirname, "client", "public")));

// require("./config/passport")(passport);

// Sessions
// app.use(
// 	session({
// 		secret: "keyboard cat",
// 		resave: false,
// 		saveUninitialized: false,
// 		// cookie: { secure: true },
// 	})
// );

// Passport Middleware
// app.use(passport.initialize());
// app.use(passport.session());

// Routes
app.use("/api/register", require("./route/api/register"));
app.use("/api/login", require("./route/api/login"));
app.use("/api/produts", require("./route/api/products"));

//Serve Static assets in production
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
} else {
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
	sequelize.authenticate().then(() => console.log("Sequelize connected to DB"));
});
