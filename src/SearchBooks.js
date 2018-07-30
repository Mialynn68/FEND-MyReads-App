import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import DisplaySearchResults from './DisplaySearchResults'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

	state = {
		query: '',
    books: []
  }

	updateSearch = (query) => {
		if (query) {
			this.setState({ query: query })
			BooksAPI.search(query).then(books => this.setState({ books: books }))
		} else {
			this.setState({ query: '', books:[] })
		}
	}

	render() {
    	return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link
           		className="close-search"
           		to="/">Close</Link>
              <div className="search-books-input-wrapper">

								<DebounceInput
									minLength={1}
									debounceTimeout={300}
									type="text"
									placeholder="Search by title or author"
									value={this.state.query}
									onChange={(event) => this.updateSearch(event.target.value)}
								/>
                {/*<input
									type="text"
									placeholder="Search by title or author"
									value={this.state.query}
									onChange={(event) => this.updateSearch(event.target.value)}
								/>*/}
              </div>
            </div>
            <DisplaySearchResults
						books={this.state.books}
						onChangeShelf={this.props.onChangeShelf}
						query={this.state.query}
						/>
          </div>
        )
    }
}

export default SearchBooks
