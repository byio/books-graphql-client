import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { grahpql } from 'react-apollo';

// define graphql queries
const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

class AddBook extends Component {

  render () {
    console.log(`AddBook props: ${this.props}`);
    return (
      <form id="add-book">
        <div>
          <label>Book Title:</label>
          <input type="text" />
        </div>
        <div>
          <label>Genre:</label>
          <input type="text" />
        </div>
        <div>
          <label>Author:</label>
          <select>
            <option> -- Select Author -- </option>
          </select>
        </div>
        <button> + </button>
      </form>
    );
  }

}

export default graphql(getAuthorsQuery)(AddBook);
