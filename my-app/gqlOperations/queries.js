const { gql } = require("@apollo/client");

export const GET_ALL_QUOTES= gql`
query getAllQuotes{
    quotes{
      name
      by{
        _id
        firstName
      }
    }
  }
`
export const GET_ALL_USERS= gql`
query getAllUsers{
    users{
      _id
      firstName
      lastName
      email
    }
  }
`
export const GET_ALL_POSTS= gql`
query NewQuery($after: String = "") {
  posts(after: $after, first: 10) {
    nodes {
      title
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`


export const COMMENTS_QUERY = gql`
  query getAllUsers($cursor: String) {
    users(first: 10, after: $cursor) {
      _id
      firstName
      lastName
      email
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
