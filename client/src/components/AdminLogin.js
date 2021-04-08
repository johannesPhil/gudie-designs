import React from "react";
import "../styles/admin.css";
import shoestep from "../assets/shoestep.jpg";

const AdminLogin = () => {
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
					className="w-full max-w-md bg-transparent bg-opacity-5 bg-white bg-clip-padding hover:bg-gray-600 hover:bg-opacity-50 duration-500 shadow-lg rounded-xl mt-32 mx-auto px-10 pb-10"
					style={{ backdropFilter: "blur(10px)" }}
				>
					<div
						className="w-16 h-16 mx-auto -mt-6 mb-5 rounded-full bg-opacity-50 bg-white bg-clip-padding hover:bg-gray-600 hover:bg-opacity-50"
						style={{ backdropFilter: "blur(10px)" }}
					></div>
					<form className="">
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
								id=""
								className="rounded-full border-2 w-full py-2 px-3 text-gray-700 bg-transparent  hover:border-purple-400 focus:border-purple-400 duration-500 transition-colors focus:outline-none focus:shadow-outline"
								placeholder="jondoe@example.com"
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
								id=""
								className="rounded-full border-2 w-full py-2 px-3 text-gray-700 bg-transparent hover:border-purple-400 focus:border-purple-400 duration-500 transition-colors focus:outline-none focus:shadow-outline "
								placeholder="jondoe@example.com"
							/>
							<button
								type="button"
								value="Login"
								className="bg-purple-500 hover:bg-purple-500 focus-within:bg-purple-500 text-white mx-auto mt-10 py-2 px-10 border-separate rounded-full focus:outline-none focus:shadow-outline"
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default AdminLogin;
