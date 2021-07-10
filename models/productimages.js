"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class productImages extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.belongsTo(models.Product, {
				foreignKey: "productId",
				onDelete: "	CASCADE",
				onUpdate: "CASCADE",
			});
		}
	}
	productImages.init(
		{
			url: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isUrl: { msg: "Invalid URL provided" },
					notNull: { msg: "Image must have a url string " },
					notEmpty: { msg: "Image cannot be empty" },
				},
			},
		},
		{
			sequelize,
			tableName: "productimages",
			modelName: "productImages",
		}
	);
	return productImages;
};
