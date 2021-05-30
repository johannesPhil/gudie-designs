import React, { useState, useEffect } from "react";

import "../../styles/applied.css";
import { uploadProduct } from "../../actions/productActions";

const UploadForm = (e) => {
	const [blobs, setBlobs] = useState(null);
	const [imageFiles, setImageFiles] = useState(null);
	// const [preview, setPreview] = useState("");
	//Form Content
	const [caption, setCaption] = useState("");
	const [price, setPrice] = useState("");
	const [color, setColor] = useState("");
	const [quantity, setQuantity] = useState("");
	const [description, setDescription] = useState("");

	// //Button state
	// const [disabled, setDisabled] = useState(false);
	// // Form error
	// const [formError, setFormError] = useState("");

	const imageObject = [];
	const imageUrl = [];
	const imageSelection = (e) => {
		imageObject.push(e.target.files);
		setImageFiles(imageObject);

		Object.entries(imageObject[0]).forEach((img) => {
			imageUrl.push(URL.createObjectURL(img[1]));
		});
		setBlobs(imageUrl);
	};

	const upload = (e) => {
		e.preventDefault();
		console.log(imageFiles);
		if (imageFiles === null) {
			console.log("No image");
			return;
		}

		const formData = new FormData();
		Object.entries(imageFiles[0]).forEach((image, index) => {
			formData.append(`photos${index}`, image);
		});

		formData.append(`caption`, caption);
		formData.append(`price`, price);
		formData.append(`color`, color);
		formData.append(`quantity`, quantity);
		formData.append(`description`, description);

		uploadProduct(formData);
	};

	useEffect(() => {}, []);

	return (
		<div className=" w-11/12 h-5/6 m-auto">
			<div className=" bg-white rounded-xl shadow-md p-10 my-2">
				<form action="" className="h-full bg-white" onSubmit={upload}>
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
										value={caption}
										onChange={(e) => setCaption(e.target.value)}
										className="w-full p-2 mr-2 bg-gray-100 text-purple-900 hover:bg-purple-100 focus:bg-purple-200 focus:outline-none rounded-md"
									/>
								</div>
								<div className="">
									<label htmlFor="price" className="label">
										Price
									</label>
									<input
										type="text"
										name="price"
										id="price"
										value={price}
										onChange={(e) => setPrice(e.target.value)}
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
										value={color}
										onChange={(e) => setColor(e.target.value)}
										className="w-full p-2 bg-gray-100 hover:bg-purple-100 focus:bg-purple-100 focus:outline-none rounded-md"
									/>
								</div>
								<div className="">
									<label htmlFor="stock" className="label">
										Stock(Quantity)
									</label>
									<input
										type="number"
										name="stock"
										id="quantity"
										value={quantity}
										onChange={(e) => setQuantity(e.target.value)}
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
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									className="w-full p-2 h-20 bg-gray-100 hover:bg-purple-100 focus:bg-purple-100 focus:outline-none"
								></textarea>
							</div>
						</div>

						<div className="w-full h-5/6 m-auto p-2 grid grid-cols-2  sm:grid-cols-3 duration-500 md:grid-cols-2 lg:grid-cols-4 justify-items-center lg:justify-items-end gap-4 border-2 border-purple-200 border-dotted rounded-md">
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
					<div className="flex flex-col sm:flex-row justify-between mt-6">
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
						<button className="bg-purple-500 px-4 py-1 text-white rounded focus:outline-white">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UploadForm;
