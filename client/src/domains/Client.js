import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";

const Client = () => {
	return (
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/register/admin" component={Register} exact />
			<Route path="/dashboard" component={Dashboard} />
			{/* <Route />
        <Route /> */}
		</Switch>
	);
};

export default Client;
