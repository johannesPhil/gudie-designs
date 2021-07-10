const express = require("express");
const multer = require("multer");
const route = express.Router();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const imagePaths = [];

const { Product, productImages } = require("../../models");

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: "gudie",
		format: async (req, file) => {
			"jpg", "jpeg", "png";
		},
	},
});

const upload = multer({ storage: storage });

route.post("/", upload.array("images"), (req, res) => {
	const imageFiles = req.files;
	const fields = req.body;
	let { caption, price, color, size, description } = req.body;

	if (!caption || !price || !color || !size || !description) {
		return res.status(400).json({ msg: "Please fill all fields" });
	}

	const findProduct = Product.findOne({ where: { caption } });

	if (!findProduct) {
		Product.create({
			caption,
			price,
			color,
			size,
			description,
		})
			.then((product) => {
				imageFiles.forEach((image) => {
					productImages.create({
						url: image.path,
						productId: product.id,
					});
				});

				return res.status(200).json({ msg: "Product uploaded" });
			})
			.catch((error) => {
				res.status(500).json({ msg: error });
			});
	} else {
		return res
			.status(400)
			.json({ msg: "Product with exact caption already exists" });
	}
});

module.exports = route;
