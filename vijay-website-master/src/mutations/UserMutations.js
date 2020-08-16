import gql from "graphql-tag";

export const createUserMutation = gql`
  mutation($email: String!, $position: Int!) {
    createUser(email: $email, position: $position) {
      id
      email
      position
    }
  }
`;
