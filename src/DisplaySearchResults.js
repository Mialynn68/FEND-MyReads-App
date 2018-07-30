import React, { Component } from 'react'
import SelectShelf from './SelectShelf'

class DisplaySearchResults extends Component {

	// handle invalid query and query without results
	// basics from http://devnacho.com/2016/02/15/different-ways-to-add-if-else-statements-in-JSX/

	renderBookList() {
		if (this.props.query != '') {
			if (this.props.books.length > 0) {
				return (
		        <ol className="books-grid">
							{this.props.books.map((book) => (
								<li key={book.id}>
									<div className="book">
										<div className="book-top">
											<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
											</div>
											<div className="book-shelf-changer">
												<SelectShelf
												value={book.shelf}
												onChangeShelf={this.props.onChangeShelf}
												book={book}/>
											</div>
										</div>
										<div className="book-title">{book.title}</div>
										<div className="book-authors">{book.author}</div>
									</div>
								</li>
		  				))}
						</ol>
				)
			} else {
				return (
					<p className="error">
						Your search had no result.
					</p>
				)
			}
		}
	}


	render() {
		console.log(this.props.books);

  	return (
      <div className="search-books-results">
				{ this.renderBookList()}
			</div>
    )
  }
}

export default DisplaySearchResults
