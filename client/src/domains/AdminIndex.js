import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import AdminLogin from "../components/admin/AdminLogin";
import Admin from "../pages/Admin";

const AdminIndex = () => {
	return (
		<Switch>
			<Route exact path="/" component={Admin} />
			<Route exact path="/login" component={AdminLogin} />
			<Route exact path="/dashboard" component={Dashboard} />
		</Switch>
	);
};

export default AdminIndex;
