import React from 'react'

function BookShelfChange(props) {
	const book=props.book
    return (
      <select
				value={props.value}
				onChange={(event) => props.onChangeShelf(book, event.target.value)}>
      	<option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }

export default BookShelfChange
