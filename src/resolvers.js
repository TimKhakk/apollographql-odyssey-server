export const resolvers = {
  Query: {
    // return list of tracks, for home page
    tracksForHome: (_, __, { dataSources }) => dataSources.trackAPI.getTracksForHome(),
    // return a single track by id, for the Track page
    track: (_, { id }, { dataSources }) => dataSources.trackAPI.getTrack(id),
    // return a module track by id, for the Module page
    module: (_, { id }, { dataSources }) => dataSources.trackAPI.getModule(id),
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id)
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        }
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        }
      }
    },
  },
  IncrementTrackViewsResponse: {},
  Track: {
    // gets author's data by id, for Track type in our schema
    author: ({ authorId }, _, { dataSources }) => dataSources.trackAPI.getAuthor(authorId),
    // gets list of modules of a track by track's id
    modules: ({ id }, _, { dataSources }) => dataSources.trackAPI.getTrackModules(id),
  },
  Module: {
    track: ({ trackId }, _, { dataSources }) => dataSources.trackAPI.getTrack(trackId),
  },
}
