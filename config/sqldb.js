const mysql = require("mysql");

// Define parameters for SQL connection
const sql = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "dandelion",
});

//Connect to the SQL environment with the saved parameters
sql.connect((err) => {
	if (err) throw err;
	console.log("SQL connected");
});

// Export the  connection
module.exports = sql;
