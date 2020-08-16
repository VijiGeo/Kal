import gql from "graphql-tag";

export const allUsersQuery = gql`
  query {
    allUsers(orderBy: position_DESC) {
      id
      email
      position
    }
  }
`;

// export const singleUserQuery = gql`
//   query($email: String!) {
//     User(email: $email) {
//       id
//       email
//       position
//     }
//   }
// `;
