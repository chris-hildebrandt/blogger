<template>
  <!--                         VVV  this allows the page to wait for the active-->
  <div class="profile-page" v-if="profile">
    <div>
      <img :src="profile.img" alt="">
    </div>
<!--               VVV finish this -->
    <div v-if="profile.id == account.id">
      <router-link></router-link>
    </div>

  </div>
  <div v-else>
    some sort of loading message
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
        await profileService.getProfileById()
      } catch (error) {
        logger.error('[]', error);
        Pop.error(error);
        router.push({ name: 'Home' })
      }
    }

    onMounted(() => {
      getProfileById()
    })


    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.activeProfile),
      cover: computed(() => `${AppState.activeProfile?.coverImg}`),
    }
  }
}
</script>

<style lang="scss" scoped>
. v-bind(cover)
</style>