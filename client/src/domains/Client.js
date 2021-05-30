import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";

const Client = () => {
	return (
		<Switch>
			<Route path="/" component={Login} exact />
			<Route path="/register/admin" component={Register} exact />
			<Route path="/dashboard" component={Dashboard} />
			{/* <Route />
        <Route /> */}
		</Switch>
	);
};

export default Client;
