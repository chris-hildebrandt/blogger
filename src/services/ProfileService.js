import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { server } from "./AxiosService.js"

class ProfileService{
  async getProfileById(id){
    const res = await server.get(`api/profiles/${id}`)
    logger.log('check out the res', res.data)
    AppState.activeProfile = new Profile(res.data)
  }
}

export const profileService = new ProfileService()