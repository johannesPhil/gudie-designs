import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/admin.css";
import shoestep from "../assets/shoestep.jpg";

import { useDispatch } from "react-redux";
import { loginAdmin } from "../actions/localAuthActions";

const AdminLogin = () => {
	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state) => state.localAuth);
	const { errMsg, actionStatus } = useSelector((state) => state.error);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const emailChange = (e) => {
		setEmail(e.target.value);
	};

	const passwordChange = (e) => {
		setPassword(e.target.value);
	};

	const login = (e) => {
		e.preventDefault();

		const credentials = {
			email,
			password,
		};

		dispatch(loginAdmin(credentials));
	};

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	} else {
		return (
			<div>
				<div
					className="loginBackground"
					style={{ backgroundImage: `url(${shoestep})` }}
				></div>
				<section className="loginContent h-full w-full w-max-md flex flex-col align-middle justify-center px-10">
					<h1 className="text-3xl text-white text-center">
						Yeah, Welcome. Do the necessary runs
					</h1>
					<div
						className="w-full max-w-md bg-transparent bg-opacity-5 bg-white bg-clip-padding hover:bg-gray-600 hover:bg-opacity-50 duration-500 shadow-lg rounded-xl mt-32 mx-auto p-10 pb-10"
						style={{ backdropFilter: "blur(10px)" }}
					>
						<form onSubmit={login} noValidate>
							<div className="pb-4">
								<label
									htmlFor="email"
									className="text-sm block text-gray-400 pb-2 float-left"
								>
									Email Address
								</label>
								<input
									type="email"
									name="email"
									className="rounded-full border-2 w-full py-2 px-3 text-white bg-transparent  hover:border-purple-400 focus:border-purple-400 duration-500 transition-colors focus:outline-none focus:shadow-outline"
									placeholder="jondoe@example.com"
									onChange={emailChange}
								/>
							</div>
							<div className="pb-4">
								<label
									htmlFor="password"
									className="text-sm block text-gray-400 pb-2  float-left"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									className="rounded-full border-2 w-full py-2 px-3 text-white bg-transparent hover:border-purple-400 focus:border-purple-400 duration-500 transition-colors focus:outline-none focus:shadow-outline "
									onChange={passwordChange}
								/>
							</div>
							{actionStatus === "LOGIN_FAIL" ? (
								<p className="text-red-600">{errMsg}</p>
							) : null}
							<button
								className="bg-purple-500 hover:bg-purple-900 focus-within:bg-purple-900 transition-colors duration-500 text-white mx-auto mt-5 py-2 px-10 border-separate rounded-full focus:outline-none focus:shadow-outline"
								// onClick={login}
							>
								Login
							</button>
						</form>
					</div>
				</section>
			</div>
		);
	}
};

export default AdminLogin;
