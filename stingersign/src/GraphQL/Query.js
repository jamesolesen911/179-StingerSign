import { gql } from "@apollo/client";

export const FIRST_AND_LAST_NAME_FOR_ALL_USERS = gql`
  query blocksQuery {
  list_ProfileItems {
    _ProfileItems {
      Email
      FirstName
      LastName
      Password
    }
  }
}
`

export const GET_FILES = gql`
query blocksQuery {
  listVendia_FileItems(limit: 10) {
    Vendia_FileItems {
      _id
      _owner
      copyStrategy
      createdTime
      destinationKey
      temporaryUrl
    }
  }
}
`

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
