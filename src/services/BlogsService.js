import { Blog } from "../models/Blog.js";

const { AppState } = require("../AppState.js");
const { server } = require("./AxiosService.js");

class BlogsService{

  async getBlogs() {
    const res = await server.get('/api/blogs')
    AppState.blogs = res.data.map(b => new Blog(b))
  }

  async getBlogsByCreatorI(creatorId){
    const res = await server.get('api/blogs', {
      params: {
        creatorId
      }
    })
    AppState.profileBlogs = res.data.map()

  }
}

export const blogsService = new BlogsService()