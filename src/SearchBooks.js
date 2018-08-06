import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'
import escapeRegExp from 'escape-string-regexp'
import DisplaySearchResults from './DisplaySearchResults'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

	state = {
		query: '',
		searchResult: []
  }

	updateSearch = (query) => {
		if (query) {
			this.setState({ query: query })
			BooksAPI.search(query).then((result) =>
				this.setState({ searchResult: result }))
		} else {
			this.setState({ query: '', searchResult:[] })
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
						searchResult={this.state.searchResult}
						onChangeShelf={this.props.onChangeShelf}
						query={this.state.query}
						books={this.props.books}
						/>
          </div>
        )
    }
}

export default SearchBooks
