import React, {Component} from 'react'

class ShelfTitle extends Component {

  render() {
    return (
      	<h2 className='bookshelf-title'>{this.props.title}</h2>
    )
  }
}

export default ShelfTitle
