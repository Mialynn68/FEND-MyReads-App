import React, {Component} from 'react'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {

  render() {
    return (
      <div className='list-books-content'>
      	<div>
      		<Bookshelf
      		title='Currently Reading'
      		books={this.props.books.filter(book => book.shelf === 'currentlyReading')}
          onChangeShelf={this.props.onChangeShelf}
      		/>
      		<Bookshelf
      		title='Want To Read'
      		books={this.props.books.filter(book => book.shelf === 'wantToRead')}
          onChangeShelf={this.props.onChangeShelf}
      		/>
      		<Bookshelf
      		title='Read'
      		books={this.props.books.filter(book => book.shelf === 'read')}
          onChangeShelf={this.props.onChangeShelf}
      		/>
      	</div>
      </div>
    )
  }
}

export default ListBooks
