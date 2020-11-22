import ApiController from './apiController';
import { getToken } from '../middleware/middleware-passport';

class BookController extends ApiController {
	constructor(bookRepository, logger) {
		super();
		this._bookRepository = bookRepository;
	}

	get UserRepository() {
		return this._bookRepository;
	}
	getBooks(req, res) {
		const books = [
			{
				isbn: '9781449325862',
				title: 'Git Pocket Guide',
				subtitle: 'A Working Introduction',
				author: 'Richard E. Silverman',
				published: '2013-08-02T00:00:00.000Z',
				publisher: "O'Reilly Media",
				pages: 234,
				description:
					'This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.',
				website:
					'http://chimera.labs.oreilly.com/books/1230000000561/index.html',
			},
			{
				isbn: '9781449337711',
				title: 'Designing Evolvable Web APIs with ASP.NET',
				subtitle: 'Harnessing the Power of the Web',
				author: 'Glenn Block, et al.',
				published: '2014-04-07T00:00:00.000Z',
				publisher: "O'Reilly Media",
				pages: 538,
				description:
					'Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.',
				website:
					'http://chimera.labs.oreilly.com/books/1234000001708/index.html',
			},
		];
		res.json(books);
	}
}

export default BookController;
