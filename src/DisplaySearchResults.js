import React, { Component } from 'react'
import SelectShelf from './SelectShelf'

class DisplaySearchResults extends Component {

	/*let thumbnail = (book) => {
		if (book.imageLinks) {
			return book.imageLinks.thumbnail
		} else {
			return ''
			}
	}*/

	// handle invalid query and query without results
	// basics from http://devnacho.com/2016/02/15/different-ways-to-add-if-else-statements-in-JSX/

	renderBookList() {
		if (this.props.query !== '') {
			if (this.props.searchResult.length > 0) {
				return (
		        <ol className="books-grid">
							{this.props.searchResult.map(resultBook => {
								let shelf = 'none'

								this.props.books.map(book => (
									book.id === resultBook.id ?
									shelf = book.shelf : ''
								))
								return (
								<li key={resultBook.id}>
									<div className="book">
										<div className="book-top">
											<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${resultBook.imageLinks.thumbnail})` }}>
											</div>
											<div className="book-shelf-changer">
												<SelectShelf
												value={shelf}
												onChangeShelf={this.props.onChangeShelf}
												book={resultBook}/>
											</div>
										</div>
										<div className="book-title">{resultBook.title}</div>
										<div className="book-authors">{resultBook.author}</div>
									</div>
								</li>
							)
						})
					}
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
  	return (
      <div className="search-books-results">
				{ this.renderBookList()}
			</div>
    )
  }
}

export default DisplaySearchResults
