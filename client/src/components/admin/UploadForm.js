import React, { useState, useEffect } from "react";

import "../../styles/applied.css";
import { uploadProduct } from "../../actions/productActions";

const UploadForm = (e) => {
	const [blobs, setBlobs] = useState(null);
	const [imageFiles, setImageFiles] = useState(null);

	const [caption, setCaption] = useState("");
	const [price, setPrice] = useState("");
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");
	const [description, setDescription] = useState("");

	// Form error
	const [formError, setFormError] = useState("");

	const captionChange = (e) => {
		setCaption(e.target.value);
	};

	const priceChange = (e) => {
		setPrice(e.target.value);
	};

	const colorChange = (e) => {
		setColor(e.target.value);
	};

	const sizeChange = (e) => {
		setSize(e.target.value);
	};

	const descriptionChange = (e) => {
		setDescription(e.target.value);
	};

	const imageObject = [];
	const imageUrl = [];
	const imageSelection = (e) => {
		imageObject.push(e.target.files);
		setImageFiles(imageObject);
		console.log(imageObject);

		Object.entries(imageObject[0]).forEach((img) => {
			imageUrl.push(URL.createObjectURL(img[1]));
		});
		setBlobs(imageUrl);
	};

	const upload = (e) => {
		e.preventDefault();

		if (!caption || !price || !color || !size || !description) {
			setFormError("Please fill all fields");
			console.log(formError);
			return;
		}

		if (!imageFiles) {
			setFormError("Product image missing");
			console.log(formError);
			return;
		}

		const formData = new FormData(e.target);

		uploadProduct(formData);
	};

	useEffect(() => {}, []);

	return (
		<div className=" w-11/12 h-5/6 m-auto">
			<div className=" bg-white rounded-xl shadow-md p-10 my-2">
				<form
					action=""
					className="h-full bg-white"
					onSubmit={upload}
					encType="multipart/form-data"
				>
					<div className=" grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-x-20">
						<div className="flex flex-col">
							<div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
								<div className="">
									<label htmlFor="caption" className="label">
										Caption
									</label>
									<input
										type="text"
										name="caption"
										id="caption"
										onChange={captionChange}
										className="w-full p-2 mr-2 bg-gray-100 text-purple-900 hover:bg-purple-100 focus:bg-purple-200 focus:outline-none rounded-md"
									/>
								</div>
								<div className="">
									<label htmlFor="price" className="label">
										Price
									</label>
									<input
										type="number"
										name="price"
										id="price"
										onChange={priceChange}
										className="w-full p-2 bg-gray-100 hover:bg-purple-100 focus:bg-purple-100 focus:outline-none rounded-md"
									/>
								</div>
								<div className="">
									<label htmlFor="color" className="label">
										Color
									</label>
									<input
										type="text"
										name="color"
										id="color"
										onChange={colorChange}
										className="w-full p-2 bg-gray-100 hover:bg-purple-100 focus:bg-purple-100 focus:outline-none rounded-md"
									/>
								</div>
								<div className="">
									<label htmlFor="stock" className="label">
										Size
									</label>
									<input
										type="number"
										name="size"
										id="size"
										onChange={sizeChange}
										min="0"
										className="w-full p-2 bg-gray-100 hover:bg-purple-100 focus:bg-purple-100 focus:outline-none rounded-md"
									/>
								</div>
							</div>
							<div className="desc my-6">
								<label htmlFor="description" className="label">
									Description
								</label>
								<textarea
									name="description"
									id="desc"
									onChange={descriptionChange}
									className="w-full p-2 h-20 bg-gray-100 hover:bg-purple-100 focus:bg-purple-100 focus:outline-none"
								></textarea>
							</div>
						</div>

						<div className="w-full h-5/6 md:h-auto m-auto p-2 grid grid-cols-2  sm:grid-cols-3 duration-500 md:grid-cols-2 lg:grid-cols-4 justify-items-center lg:justify-items-end gap-4 border-2 border-purple-200 border-dotted rounded-md">
							{blobs
								? blobs.map((blob, index) => (
										<div className=" w-auto h-28" key={index}>
											<img
												src={blob}
												alt="product preview"
												className="h-full rounded-lg shadow-sm"
											/>
										</div>
								  ))
								: ""}
						</div>
					</div>
					<div className="flex flex-col-reverse sm:flex-row justify-between mt-6">
						<button className="bg-purple-500 px-4 py-1 text-white rounded focus:outline-white">
							Submit
						</button>
						<div className="images w-auto h-auto mb-4 sm:mb-0 bg-purple-500 rounded text-white">
							<label className=" block px-4 py-1 cursor-pointer text-center">
								<input
									type="file"
									name="images"
									id="images"
									multiple
									onChange={imageSelection}
									className="hidden"
								/>
								Select Images
							</label>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UploadForm;
