import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li className="list-group-item" key={book.title}>{ book.title }</li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group">
        { this.renderList() }
      </ul>
    );
  };
}

// call state from reducers 
function mapStatetoProps(state){
  // whatever return from this function, will be show up as props
  return {
    'books': state.books  // come from reducers/index.js 
    //  where declare books: BookReducer that was imported from reducer_book.js
  };
}

export default connect (mapStatetoProps)(BookList);