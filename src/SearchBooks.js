import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import DisplaySearchResults from './DisplaySearchResults'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

	state = {
		query: '',
    books: []
  }

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	componentDidMount() {
    let query = 'react'
    BooksAPI.search(query).then(books => this.setState({ books: books }))
  }

	render() {
		let searchResults
		if (this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			searchResults = this.state.books.filter((book) => match.test(book.authors))

		} else {
			searchResults = this.state.books
		}

		searchResults.sort(sortBy('name'))

		console.log(this.props.onChangeShelf)

    	return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link
           		className="close-search"
           		to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input
									type="text"
									placeholder="Search by title or author"
									value={this.state.query}
									onChange={(event) => this.updateQuery(event.target.value)}
								/>
              </div>
            </div>
            <DisplaySearchResults
						books={searchResults}
						onChangeShelf={this.props.onChangeShelf}
						/>
          </div>
        )
    }
}

export default SearchBooks
