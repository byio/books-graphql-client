import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {

  displayAuthors () {
    let data = this.props.data;
    if (data.loading) {
      return (
        <option>Loading authors ...</option>
      );
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id}>{author.name}</option>
        );
      });
    }
  }

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
            {this.displayAuthors()}
          </select>
        </div>
        <button> + </button>
      </form>
    );
  }

}

export default graphql(getAuthorsQuery)(AddBook);
