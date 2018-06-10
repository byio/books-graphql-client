import { gql } from 'apollo-boost';

// queries
const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

const getBookQuery = gql`
  query ($id: ID) {
    book (id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

const addBookMutation = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook (name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

export { getBooksQuery, getBookQuery, getAuthorsQuery, addBookMutation };
