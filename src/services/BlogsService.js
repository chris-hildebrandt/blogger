const { AppState } = require("../AppState.js");
const { server } = require("./AxiosService.js");

class BlogsService{

  async getBlogsByCreatorI(creatorId){
    const res = await server.get('api/blogs', {
      params: {
        creatorId
      }
    })
    AppState.profileBlogs = res.data.map()
    
  }
}