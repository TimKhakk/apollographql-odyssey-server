// We use this specific pattern because it's better approach
// than a classic "fetch". It's much faster and has caching
import { RESTDataSource } from 'apollo-datasource-rest'

export class TrackAPI extends RESTDataSource {
  constructor() {
    super()
    // url of our REST API, from where we will load all data that we need
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/'
  }

  getTracksForHome() {
    return this.get('tracks') // endpoints from base
  }

  // return author by id
  getAuthor(authorId) {
    return this.get(`author/${authorId}`) // endpoints from base
  }

  // return a track by id
  getTrack(trackId) {
    return this.get(`track/${trackId}`) // endpoints from base
  }

  // return list of modules of a specific track by id
  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`)
  }

  // return a module by id
  getModule(moduleId) {
    return this.get(`module/${moduleId}`)
  }

  incrementTrackViews(trackId) {
    return this.patch(`track/${trackId}/numberOfViews`)
  }
}
