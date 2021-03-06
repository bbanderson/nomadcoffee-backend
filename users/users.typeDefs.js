import { gql } from "apollo-server-core";

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
    name: String
    location: String
    # password: String
    avatarURL: String
    githubUsername: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    seeProfile(username: String): User
  }

    type LoginResult {
    ok: Boolean!
    token: String
    error: String
    }
  type Mutation {
    createAccount(
      username: String!
      email: String!
      name: String
      location: String
      avatarURL: String
      githubUsername: String
      password: String!
    ): User
    login(username: String!, password: String!): LoginResult!
  }
`;
