
<!-- TODO    style this up -->
<template>
  <!--                         VVV  this allows the page to wait for the active-->
  <div class="profile-page" v-if="profile">
    <div class="cover-image">
      <img :src="profile.img" alt="">
<!--               VVV finish this -->
      <div v-if="profile.id == account.id">
      <router-link class="btn btn-warning" :to="{ name: 'Account'}">Edit Account Info</router-link>
    </div>
  </div>

  </div>
  <div v-else>
    some sort of loading message<i class="mdi mdi-spin mdi-hammer"></i><i class="mdi mdi-spin mdi-wrench"></i>
  </div>
</template>

<script>
import { profileService } from "../services/ProfileService.js"
import { computed, onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { useRoute } from "vue-router"
import Pop from "../utils/Pop.js"

export default {
  setup() {

    const route = useRoute()

    async function getProfileById() {
      try {
        await profileService.getProfileById(route.params.profileId)
      } catch (error) {
        logger.error('[getting profile by id]', error);
        Pop.error(error);
        router.push({ name: 'Home' })
        // ^^^ sends user home if profile id is bad
      }
    }

    async function getBlogsByCreatorId(){
      try {
      await blogsService.getBlogsByCreatorId(route.params.profileId)
      } catch (error) {
      logger.error('[getting blogs by creator Id]', error);
      Pop.error(error);
      }
    }

    onMounted(() => {
      getProfileById()
      getBlogsByCreatorId()
    })


    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.activeProfile),
      cover: computed(() => `url(${AppState.activeProfile?.coverImg || 'https://i.pinimg.com/originals/c8/c3/1b/c8c31b7538ae5eb8416051aa6e7c11f5.jpg'})`),
      blogs: computed(()=> AppState.profileBlogs)
    }
  }
}
</script>

<style lang="scss" scoped>
.cover-img{
  background-image: v-bind(cover);
}
</style>