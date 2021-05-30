"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Admin extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
		toJSON() {
			return { ...this.get(), id: undefined, password: undefined };
		}
	}
	Admin.init(
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "User must have a name" },
					notEmpty: { msg: "Name cannot be empty" },
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "Admin must have an email address" },
					notEmpty: { msg: "Email cannot be empty" },
					isEmail: { msg: "Please enter a valid email address" },
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "Admin must have a password" },
					notEmpty: { msg: "Password cannot be empty" },
				},
			},
		},
		{
			sequelize,
			tableName: "admin",
			modelName: "Admin",
		}
	);
	return Admin;
};
