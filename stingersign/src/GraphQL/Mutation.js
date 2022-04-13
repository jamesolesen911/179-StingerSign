import { gql } from "@apollo/client";

export const ADD_NEW_USER = gql`
  mutation add_Profile_async(
    $Email: String!
    $FirstName: String!
    $MiddleName: String!
    $LastName: String!
    $PhoneNumber: String!
    $Nickname: String!
    $Password: String!
  ) {
    add_Profile_async(
      input: {
        Email: $Email
        FirstName: $FirstName
        MiddleName: $MiddleName
        LastName: $LastName
        PhoneNumber: $PhoneNumber
        Nickname: $Nickname
        Password: $Password
      }
    ) {
      result {
        _id
      }
    }
  }
`;
