const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			User.hasMany(models.Test, { foreignKey: 'user_id' });
		}

		async validatePassword(password) {
			return await bcrypt.compare(password, this.password);
		}
	}

	User.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'User',
			timestamps: true,
			hooks: {
				beforeCreate: async (user) => {
					const salt = await bcrypt.genSalt(10);
					user.password = await bcrypt.hash(user.password, salt);
				},
			},
		}
	);

	return User;
};
