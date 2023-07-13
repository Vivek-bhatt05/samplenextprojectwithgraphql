const { gql } = require("@apollo/client");

export const SIGNUP_USER= gql`
mutation createUser($userNew:UserInput!){
    user:signupUser(userNew:$userNew){
      _id
      firstName
    }
  }
`


export const LOGIN_USER= gql`
 mutation SigninUser($userSignin:UserSigninInput!){
  user:signinUser(userSignin:$userSignin){
    token
  }
}
`

