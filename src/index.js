//TODO
import { ApolloServer } from 'apollo-server'
import typeDefs from './schema.js'
import { resolvers } from './resolvers.js'
import { TrackAPI } from './datasources/track-api.js'

async function startApolloServer(typeDefs, server) {
  const trackAPI = new TrackAPI()

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // returns an object with trackApi prop which was instatiated with TrackApi class
    dataSources: () => ({ trackAPI }),
  })

  const { url } = await server.listen({
    port: process.env.PORT || 4000,
  })

  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `)
}

startApolloServer(typeDefs, server)
