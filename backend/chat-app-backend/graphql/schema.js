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

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        status: String!
        post: [Post!]!
    }


    input UserData {
        email: String!
        name: String!
        password: String!
    }

    type RootQuery {
        hello: String!
    }

    type RootMutation {
        createUser(userInput: UserData): User!
    }

    schema {
     query: RootQuery
     mutation: RootMutation   
    }
`)