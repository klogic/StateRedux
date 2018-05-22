import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render() {
    if (!this.props.book){
      return <div>Please select book.</div>
    }
    return (
    <div>
      <h3> Book Title : {this.props.book.title} </h3>
      <h5> Pages: {this.props.book.pages} </h5>
    </div>
    )
  }
}

function mapStatetoProps(state){
  return {
    book: state.activeBook
  };
}
export default connect(mapStatetoProps)(BookDetail);