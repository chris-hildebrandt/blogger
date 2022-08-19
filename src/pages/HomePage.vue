<template>
  <div class="home container">
    <div class="row">
      <div class="col-md-5 m-3" v-for="b in blogs" :key="b.id">
        <BlogCard :blog="b" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import BlogCard from "../components/BlogCard.vue";
import { blogsService } from "../services/BlogsService.js"

export default {
  components: { BlogCard },
  setup() {

    async function getBlogs(){
      try {
      await blogsService.getBlogs()
      } catch (error) {
      logger.error('[]', error);
      Pop.error(error);
      }
    }

    onMounted(()=> {
      getBlogs()
    })
    return {
      blogs: computed(()=> AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  overflow-y: auto;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
