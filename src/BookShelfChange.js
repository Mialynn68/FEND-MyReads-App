import React, { Component } from 'react'

class BookShelfChange extends Component {
  constructor(props) {
    super(props)
    //this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    //this.setState({value: event.target.value})
    const shelf=event.target.value
		const book=this.props.book
    this.props.onChangeShelf(book, shelf)
  }

  render() {
    return (
      <select value={this.props.value} onChange={this.handleChange}>
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
