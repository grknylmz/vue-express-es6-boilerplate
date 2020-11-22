import BaseRouter from './baseRouter';
import { authenticated } from '../middleware/middleware-security';

class BookRouter extends BaseRouter {
	constructor(bookRepository, bookController) {
		super(bookController);
		//  this.Router.use(authenticated());

		this.Router.route('/').get(async (req, res) =>
			this.Controller.getBooks(req, res)
		);
	}
}

export default BookRouter;
