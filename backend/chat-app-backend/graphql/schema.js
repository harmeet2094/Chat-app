const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        creatorAt: String!
        updatedAt: String! 
    }

    type AuthData {
        token: String!
        userId: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        status: String!
        post: [Post!]!
    }

    type PostData {
        posts: [Post!]!
        totalPost: Int!
    }

    input UserData {
        email: String!
        name: String!
        password: String!
    }

    input PostDataInput {
        title: String!
        content: String!
        imageUrl: String!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData! 
        posts(page: Int): PostData!
        post(id: ID!): Post!
        user: User!
    }

    type RootMutation {
        createUser(userInput: UserData): User!
        createPost(postInput: PostDataInput): Post!
        updatePost(id: ID!, postInput: PostDataInput): Post!
        deletePost(id: ID!): Boolean
        updateStatus(status: String!): User! 
    }

    schema {
     query: RootQuery
     mutation: RootMutation   
    }
`)