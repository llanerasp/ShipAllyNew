const db = require('./index');
const bcrypt = require('bcrypt');

async function syncDatabase() {
	try {
		// Sincronizar todos los modelos
		await db.sequelize.sync({ force: true });
		console.log('Database synchronized successfully');

		// Crear un usuario de prueba
		await db.User.create({
			username: 'test',
			email: 'test@example.com',
			password: 'password123', // El hook beforeCreate se encargará del hash
		});

		console.log('Test user created');

		process.exit(0);
	} catch (error) {
		console.error('Error synchronizing database:', error);
		process.exit(1);
	}
}

syncDatabase();
