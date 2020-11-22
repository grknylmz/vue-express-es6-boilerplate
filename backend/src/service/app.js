import express from 'express';
import middlewareLogging from './middleware/middleware-logger';
import middlewarePassport from './middleware/middleware-passport';
import middlewareRequestParser from './middleware/middleware-request-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../config/doc/swagger.json';

// #region Common components
import ModelOfTRepository from '../data/repositories/modelOfTRepository';
import middlewareCors from './middleware/middleware-cors';
// #endregion

// #region User
import UserModel from '../data/models/userModel';
import UserController from '../service/controllers/userController';
import UserRouter from '../service/routes/userRouter';
import BookController from '../service/controllers/bookController';
import BookRouter from '../service/routes/bookRouter';
// #endregion

export default async function (dbConnection, corsConfig, securityConfig) {
	var app = express();

	const userRepository = new ModelOfTRepository(UserModel(dbConnection));
	const userController = new UserController(userRepository);
	const userRouter = new UserRouter(userRepository, userController);
	const bookController = new BookController({});
	const bookRouter = new BookRouter({}, bookController);

	middlewareLogging(app);
	middlewareRequestParser(app);
	middlewarePassport(app, userRepository, securityConfig);
	middlewareCors(app, corsConfig);

	var apiRouter = express.Router();
	apiRouter.use('/users', userRouter.Router);
	apiRouter.use('/books', bookRouter.Router);
	app.use('/api', apiRouter);
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
	return app;
}
