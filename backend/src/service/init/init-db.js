import mongoose from 'mongoose';
import chalk from 'chalk';
export default function (dbConfig) {
	mongoose.Promise = global.Promise;
	mongoose.set('debug', true);
	const DB_HOST = process.env.DB_HOST;
	if (DB_HOST) {
		return new Promise((resolve, reject) => {
			const connection = mongoose.createConnection();
			console.log(chalk.red('Connection to Db...'));
			connection.openUri(dbConfig.connection, (err) => {
				if (err) {
					reject(err);
				} else {
					resolve(connection);
				}
			});
		});
	} else {
		console.log(chalk.red('Please maintain the DB configuration'));
	}
}
