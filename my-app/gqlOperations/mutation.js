const { gql } = require("@apollo/client");

export const SIGNUP_USER= gql`
mutation createUser($userNew:UserInput!){
    user:signupUser(userNew:$userNew){
      _id
      firstName
    }
  }
`

