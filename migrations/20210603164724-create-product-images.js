"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("productimages", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			url: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					isUrl: { msg: "Invalid URL provided" },
					notNull: { msg: "Image must have a url string " },
					notEmpty: { msg: "Image cannot be empty" },
				},
			},
			productId: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "Image URL must have a associated product ID " },
					notEmpty: { msg: "Image URL cannot be empty" },
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("productimages");
	},
};
