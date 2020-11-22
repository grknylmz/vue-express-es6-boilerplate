import mongoose from 'mongoose';
import chalk from 'chalk';

export default function () {
	mongoose.Promise = global.Promise;
	mongoose.set('debug', true);
	const DB_STRING = process.env.DB_STRING;
	if (DB_STRING) {
		return new Promise((resolve, reject) => {
			const connection = mongoose.createConnection();
			console.log(chalk.bgGreen('Connecting to Db...'));
			connection.openUri(DB_STRING, (err) => {
				if (err) {
					console.log(chalk.red('Database connection failed!'));
					reject(err);
				} else {
					console.log(chalk.bgGreen('Connected to Database'));
					resolve(connection);
				}
			});
		});
	} else {
		console.log(chalk.red('Please maintain the DB configuration'));
	}
}
