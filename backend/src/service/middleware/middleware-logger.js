import morgan from 'morgan';
import chalk from 'chalk';

// Custom morgan tokens
morgan.token('content-type', (req) => req.headers['content-type']);
morgan.token('content-length', (req, res) => res.get('Content-Length'));

export default (app) => {
	app.use(
		morgan(
			'REQUEST: :method :url :remote-addr HTTP/:http-version :content-type :status :content-length :response-time',
			{
				stream: {
					write: (message) => {
						console.log(chalk.yellow(message.trim()));
					},
				},
			}
		)
	);
};
