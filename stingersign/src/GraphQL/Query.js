import { gql } from "@apollo/client";

export const FIRST_AND_LAST_NAME_FOR_ALL_USERS = gql`
  query blocksQuery {
  list_ProfileItems {
    _ProfileItems {
      Email
      FirstName
      LastName
    }
  }
}
`;

export const USER_INFO = gql`
query blocksQuery {
  list_ProfileItems {
    _ProfileItems {
      Email
      FirstName
      LastName
      MiddleName
      Nickname
      PhoneNumber
    }
  }
}
`