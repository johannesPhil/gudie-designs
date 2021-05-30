import { loadUser } from "./../actions/localAuthActions";
import { Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UploadForm from "./admin/UploadForm";

import logo from "../assets/logo.svg";
import "../styles/applied.css";

const Dashboard = () => {
	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state) => state.localAuth);
	const [content, setContent] = useState(1);

	const toggleContent = (key) => {
		setContent(key);
	};

	useEffect(() => {
		dispatch(loadUser());
	}, [dispatch]);
	if (true) {
		return (
			<div className="dashboard-wrapper bg-gray-100 w-screen h-screen m-auto p-8">
				<div
					className="w-full h-full p-3 bg-transparent bg-opacity-100 bg-white bg-clip-padding rounded-md shadow-xl"
					style={{ backdropFilter: "blur(10px)" }}
				>
					<div className="top-banner w-full h-auto py-5 rounded-t-3xl flex flex-row justify-between items-center">
						<img src={logo} alt="" className="w-10 h-10 block" />
						<p className="block text-white">Overview</p>
						<input
							type="text"
							name=""
							id=""
							placeholder="Search Orders..."
							className="h-2/4 w-72 border px-3 border-purple-300 bg-transparent rounded-lg text-sm"
						/>
					</div>
					<div className="dashboard-body w-full h-5/6 flex flex-row">
						<div className="side-nav w-2/12 h-full rounded-bl-3xl py-24">
							<ul className="text-white duration-500">
								<li
									className={content === 1 ? "tab-list active-tab" : "tab-list"}
									onClick={() => toggleContent(1)}
								>
									Overview
								</li>
								<li
									className={content === 2 ? "tab-list active-tab" : "tab-list"}
									onClick={() => toggleContent(2)}
								>
									New Orders
								</li>
								<li
									className={content === 3 ? "tab-list active-tab" : "tab-list"}
									onClick={() => toggleContent(3)}
								>
									New Orders
								</li>
								<li
									className={content === 4 ? "tab-list active-tab" : "tab-list"}
									onClick={() => toggleContent(4)}
								>
									Fulfilled Orders
								</li>
							</ul>
						</div>
						<div className="content-wrapper w-10/12 h-auto flex flex-col bg-gray-50 p-8 overflow-y-auto">
							<div
								className={
									content === 1
										? "content active-content"
										: "h-auto content overflow-y-auto"
								}
							>
								<UploadForm />
							</div>
							<div
								className={content === 2 ? "content active-content" : "content"}
							>
								<p className="">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Perspiciatis nostrum minus vero doloremque!
								</p>
							</div>
							<div
								className={content === 3 ? "content active-content" : "content"}
							>
								<p className="">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Exercitationem fuga itaque sequi, reiciendis deleniti
									repellendus.
								</p>
							</div>
							<div
								className={content === 4 ? "content active-content" : "content"}
							>
								<p className="">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
									aperiam quam nihil nemo harum adipisci sunt!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <Redirect to="/login" />;
	}
};

export default Dashboard;
