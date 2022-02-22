import gql from "graphql-tag";

export const READ_DEVELOPERS = gql`
  query developers {
    developers {
      id
      firstName
      lastName
    }
  }
`;

export const CREATE_DEVELOPER = gql`
  mutation CreateDeveloper($firstName: String!, $lastName: String!) {
    createDeveloper(firstName: $firstName, lastName: $lastName)
  }
`;

export const REMOVE_DEVELOPER = gql`
  mutation RemoveDeveloper($id: String!) {
    removeDeveloper(id: $id)
  }
`;

export const UPDATE_DEVELOPER = gql`
  mutation UpdateDeveloper(
    $id: String!,
    $firstName: String!,
    $lastName: String!
  ) {
    updateDeveloper(id: $id, firstName: $firstName, lastName: $lastName)
  }
`;
