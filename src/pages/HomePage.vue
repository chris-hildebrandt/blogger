<template>
  <div class="home container">
    <div class="row">
      <div class="col-md-4" v-for="b in blogs" :key="b.id">
        <BlogCard :blog="b" />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";

export default {
  components: { BlogCard },
  setup() {

    async function getBlogs(){
      try {
      await blogsService.getBlogs
      } catch (error) {
      logger.error('[]', error);
      Pop.error(error);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
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
