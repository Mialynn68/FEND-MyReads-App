import React, { Component } from 'react'
import SelectShelf from './SelectShelf'

class DisplaySearchResults extends Component {

	render() {
  	return (
      <div className="search-books-results">
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
      </div>
    )
  }
}

export default DisplaySearchResults
