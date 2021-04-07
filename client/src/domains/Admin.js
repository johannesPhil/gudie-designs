import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import AdminLogin from "../components/AdminLogin";

const Admin = () => {
	return (
		<Switch>
			<Route path="/" component={AdminLogin} />
			<Route path="/dashboard" component={Dashboard} />
		</Switch>
	);
};

export default Admin;
