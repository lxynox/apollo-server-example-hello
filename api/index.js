const { ApolloServer, gql } = require('apollo-server-micro')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => 'Hello apollo-server!',
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

module.exports = server.createHandler({ path: '/api' })
