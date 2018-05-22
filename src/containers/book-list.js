import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
// { selectBook } equal => const selectBook = index.selectBook
import { bindActionCreators } from 'redux'

class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li 
        className="list-group-item" 
        onClick = { () => this.props.selectBook(book) }
        key={book.title}>{ book.title }
        </li>
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

function mapDispatchtoProps(dispatch) {
  // call bindActionCreators for make sure selectBook will going throught reducer
  // let dispatch help it with this job.
  return bindActionCreators({ selectBook : selectBook}, dispatch);
}

// make data in function mapDispatchtoProps to props. can use it as => this.props.selectBook
export default connect (mapStatetoProps, mapDispatchtoProps)(BookList);