import React from "react";
import { Link } from "react-router-dom";
import "../styles/client.css";
import shoestep from "../assets/shoestep.jpg";

const Home = () => {
	return (
		<div>
			<header className="fixed z-10 min-w-full ">
				<nav className="w100 bg-transparent p-5 flex text-white">
					<Link to="/" className="p-5">
						Home
					</Link>
					<Link to="/" className="p-5">
						Store
					</Link>
				</nav>
			</header>
			<section className="hero w-full p-8 bg">
				<div className="hero-content relative text-white w-1/3 h-full flex flex-col justify-center">
					<h1 className="hero-header font-bold text-3xl my-8">
						Lorem, ipsum dolor
					</h1>
					<p className="hero-desc">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quo
						nulla veniam, ratione illo tenetur id qui ullam nisi suscipit earum
						in tempora!
					</p>
				</div>
			</section>
			<section className="w-full px-10 py-20">
				<div className="w-full lg:w-10/12 p-10 mx-auto my-12 bg-white flex flex-wrap justify-between shadow-xl rounded-lg ">
					<div className="w-full md:w-2/5 lg:w-1/5 h-auto my-5 lg:my-0">
						<div className="w-10 h-10 bg-green-500 rounded-xl"></div>
						<h3 className="my-4 text-lg text-gray-700">Lorem, ipsum dolor.</h3>
						<p className=" text-sm text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
					<div className="w-full md:w-2/5 lg:w-1/5 h-auto my-5 lg:my-0">
						<div className="w-10 h-10 bg-red-500 rounded-xl"></div>
						<h3 className="my-4 text-lg text-gray-700">Lorem, ipsum dolor.</h3>
						<p className=" text-sm text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
					<div className="w-full md:w-2/5 lg:w-1/5 h-auto my-5 lg:my-0">
						<div className="w-10 h-10 bg-yellow-400 rounded-xl"></div>
						<h3 className="my-4 text-lg text-gray-700">Lorem, ipsum dolor.</h3>
						<p className=" text-sm text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
					<div className="w-full md:w-2/5 lg:w-1/5 h-auto my-5 lg:my-0">
						<div className="w-10 h-10 bg-purple-500 rounded-xl"></div>
						<h3 className="my-4 text-lg text-gray-700">Lorem, ipsum dolor.</h3>
						<p className=" text-sm text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
				</div>
			</section>
			<section className="w-full h-auto px-10 py-20 bg-blue-50">
				<div className="w-full lg:w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center">
					<div className="display sm:w-4/5 rounded-br-full bg-white shadow-lg rounded-bl-full md:max-w-md p-5 pt-0 md:pl-0 md:pt-5 md:rounded-bl-none md:rounded-br-full md:rounded-tr-full border-4 border-dotted border-t-0 md:border-l-0 md:border-t-4 overflow-hidden">
						<img
							src={shoestep}
							alt=""
							className="w-auto h-auto rounded-bl-full rounded-br-full md:rounded-bl-none md:rounded-br-full md:rounded-tr-full"
						/>
					</div>
					<div className="pitch-text mt-12 ml-0 md:mt-0 md:ml-8 md:w-2/5">
						<h3 className="text-2xl text-purple-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</h3>
						<p className="text-gray-700 tracking-widest text-left">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
							sapiente totam nihil tenetur tempore necessitatibus repellat,
							deserunt fuga! Rem saepe officiis possimus eaque laboriosam,
							provident assumenda necessitatibus commodi impedit quam
							reprehenderit itaque iure debitis cumque voluptatum. Quae quam
							illo neque, rerum iste similique laudantium deserunt.
						</p>
						<Link
							to="/"
							className="block w-max bg-purple-500 mt-10 px-6 py-3 text-white rounded-full"
						>
							Lorem Ipsum
						</Link>
					</div>
				</div>
			</section>
			<section className="w-full px-10 py-20">
				{/* <h2 className=" text-3xl md:text-4xl text-center">
					Our Journey So Far
				</h2> */}
				<div className="w-full lg:w-10/12 mx-auto my-12 bg-white flex flex-wrap justify-between  shadow-lg rounded-lg py-10">
					<div className="w-1/2 md:w-1/4 stat text-center my-6 md:my-0">
						<span className="block text-5xl text-purple-600 my-2">100+</span>
						<span className="block text-gray-500 text-lg my-2">
							Custom Orders
						</span>
					</div>
					<div className="w-1/2 md:w-1/4 stat text-center my-6 md:my-0">
						<span className="block text-5xl text-purple-600 my-2">100+</span>
						<span className="block text-gray-500 text-lg my-2">Deliveries</span>
					</div>
					<div className="w-1/2 md:w-1/4 stat text-center my-6 md:my-0">
						<span className="block text-5xl text-purple-600 my-2">500+</span>
						<span className="block text-gray-500 text-lg my-2">
							Shoes Built
						</span>
					</div>
					<div className="w-1/2 md:w-1/4 stat text-center my-6 md:my-0">
						<span className="block text-5xl text-purple-600 my-2">100+</span>
						<span className="block text-gray-500 text-lg my-2">Clients</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
