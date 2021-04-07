import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<section className="App h-screen w-full flex justify-center items-center bg-gray-100">
			<form
				action=""
				className="w-full max-w-md bg-white shadow-lg appearance-none rounded-xl px-8 py-8 pt-8 mx-8"
			>
				<div className="pb-4">
					<label htmlFor="email" className="text-sm block text-gray-500  pb-2">
						Email Address
					</label>
					<input
						type="email"
						name="email"
						id=""
						className="rounded-full border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-purple-400"
						placeholder="jondoe@example.com"
					/>
				</div>
				<div className="pb-4">
					<label
						htmlFor="password"
						className="text-sm block text-gray-500 pb-2"
					>
						PASSWORD
					</label>
					<input
						type="password"
						name="email"
						id=""
						className="rounded-full border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-purple-400"
						placeholder="Enter your password"
					/>
				</div>
				<div>
					<div className="flex justify-between items-center">
						<button
							className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
							type="button"
						>
							Sign In
						</button>
						<Link
							to="/register/admin"
							className="text-sm text-purple-500 underline"
						>
							Create an account here
						</Link>
					</div>
				</div>
			</form>
		</section>
	);
};

export default Register;
