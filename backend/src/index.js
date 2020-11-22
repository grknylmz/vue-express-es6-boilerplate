import appLication from './service/app';
import chalk from 'chalk';
import initDb from './service/init/init-db';
import corsConfig from '../config/development/cors.json';
import securityConfig from '../config/development/security.json';
import dotenv from 'dotenv';
// #endregion

Promise.all([dotenv.config(), initDb()])
	.then(async ([dbConnection]) => {
		const PORT = process.env.PORT || 5000;
		const app = await appLication(dbConnection, corsConfig, securityConfig);
		app.listen(PORT, () => {
			console.log(chalk.blue(`Server started on port ${PORT}`));
		});
		process.on('SIGINT', async () => {
			await dbConnection.close();
		});
	})
	.catch((err) => {
		console.log('An error occurred while initializing the application.', err);
	});
