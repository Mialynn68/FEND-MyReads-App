import React, { Component } from 'react'

class BookShelfChange extends Component {

  render() {
		const book=this.props.book
    return (
      <select
				value={this.props.value}
				onChange={(event) => this.props.onChangeShelf(book, event.target.value)}>
      	<option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default BookShelfChange
