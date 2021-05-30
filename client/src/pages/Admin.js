import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import AdminLogin from "../components/AdminLogin";
// import Dashboard from "../components/Dashboard";
import { loadUser } from "../actions/localAuthActions";

const Admin = () => {
	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state) => state.localAuth);
	// console.log(user);
	useEffect(() => {
		dispatch(loadUser());
	}, [dispatch]);

	return (
		<div>
			{isAuthenticated ? (
				<Redirect to="/dashboard" />
			) : (
				<Redirect to="/login" />
			)}
		</div>
	);
};

export default Admin;
