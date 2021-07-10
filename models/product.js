"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.hasMany(models.productImages, {
				foreignKey: "productId",
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			});
		}
	}
	Product.init(
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			caption: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "Product must have a caption or title" },
					notEmpty: { msg: "Product cannot be empty" },
				},
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: { msg: "Product price must be supplied" },
					notEmpty: { msg: "Product price cannot be empty" },
				},
			},
			color: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "Product color must be supplied" },
					notEmpty: { msg: "Product color cannot be empty" },
				},
			},
			size: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: { msg: "Product size must be supplied" },
					notEmpty: { msg: "Product size cannot be empty" },
				},
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					notNull: { msg: "Product description must be supplied" },
					notEmpty: { msg: "Product description cannot be empty" },
				},
			},
		},
		{
			sequelize,
			tableName: "products",
			modelName: "Product",
		}
	);
	return Product;
};
