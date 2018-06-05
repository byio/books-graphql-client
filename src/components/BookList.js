import React, { Component } from 'react';
import { gql } from 'apollo-boost';

// define queries
const getBooksQuery = gql`
  {
    books {
      _id
      name
    }
  }
`;

class BookList extends Component {
  render () {
    return (
      <div>
        <ul id="book-list">
          <li>book name</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
