import React, {Component} from 'react'
import ShelfTitle from './ShelfTitle'
import BookShelfChange from './BookShelfChange'

class Bookshelf extends Component {

	render() {
		return (
			<div className='bookshelf'>
				<ShelfTitle title={this.props.title} />
				<div className='bookshelf-books'>
					<ol className='books-grid'>
						{this.props.books.map((book) => (
							<li key={book.id}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
										</div>
										<div className="book-shelf-changer">
											<BookShelfChange
											value={book.shelf}
											onChangeShelf={this.props.onChangeShelf}
											book={book}
										/>
										</div>
									</div>
									<div className="book-title">{book.title}</div>
									<div className="book-authors">{book.author}</div>
								</div>
							</li>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default Bookshelf
