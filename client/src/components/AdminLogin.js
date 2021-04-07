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
			<section className="loginContent w-max flex align-middle justify-around">
				<h1 className="text-3xl text-white text-center">
					Yeah, Welcome. Do the necessary runs
				</h1>
				<div className="rounded-xl shadow-lg">
					ghjjjjjj
					{/* <div className="bg-white p-10">
						<form>
							<div className="pb-4">
								<label
									htmlFor="email"
									className="text-sm block text-gray-500  pb-2"
								>
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
									className="text-sm block text-gray-500  pb-2"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id=""
									className="rounded-full border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-purple-400"
									placeholder="jondoe@example.com"
								/>
							</div>
						</form>
					</div> */}
				</div>
			</section>
		</div>
	);
};

export default AdminLogin;
