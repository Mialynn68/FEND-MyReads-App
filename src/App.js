import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ListBooksTitle from './ListBooksTitle'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import './App.css'


class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

	/*componentDidMount() {
    BooksAPI.getAll().then(books => console.log(books))
    let query = 'react';
    BooksAPI.search(query).then(books => console.log(books))
  }*/

	changeShelf = (book, shelf) => {
		//console.log(book, shelf)
		BooksAPI.update(book, shelf)
		BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
	}

  render() {
    return (
      <div className="app">
        {/*<Route path="/search"
        component={SearchBooks}/>*/}

				{/*<Route
					path="/search"
					render={(routeProps) => (
						<SearchBooks { ...routeProps } { ...onChangeShelf=this.changeShelf }/>
					)}
				/>*/}

				<Route path="/search" render={() => (
          <SearchBooks
            onChangeShelf={this.changeShelf}
          />
        )}/>

        <Route exact path="/" render={() => (
          <div className="list-books">
            <ListBooksTitle
            title='MyReads'
            />
            <div className="list-books-content">
              <ListBooks
              books={this.state.books}
              onChangeShelf={this.changeShelf}
              />
            </div>
            <div className="open-search">
             <Link
               to="/search"
               >Add a book
						 </Link>
            </div>
          </div>
        )}/>
      </div>
  )}
}

export default BooksApp
