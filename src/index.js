//TODO
import { ApolloServer } from 'apollo-server'
import typeDefs from './schema.js'
import { resolvers } from './resolvers.js'
import { TrackAPI } from './datasources/track-api.js'

const trackAPI = new TrackAPI()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // returns an object with trackApi prop which was instatiated with TrackApi class
  dataSources: () => ({ trackAPI }),
})

server.listen({ port: process.env.PORT || 4000 }).then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `)
})