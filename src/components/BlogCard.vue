<template>

  <div class="blog-card card selectable">
    <div class="card-body">
      <div class="card-title">
        <h6 class="text-uppercase text-light shadow">
        {{ blog.title }} - {{ new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit'})}}
        </h6>
          <!-- VVV  this will break if the prop doesn't exist, that is why we set a default for the property in the model. -->
        <div v-if="blog.creator"></div>
        <router-link :to="{ name: 'Profile', params: { profileId: blog.creator.id } }">
          <img :src="blog.creator.picture" alt="" :title="blog.creator.name" class="selectable elevation-2">
        </router-link>
      </div>
      <div v-if="blog.creator.id == account.id">
        <button @click="toggleEdit">Edit</button>
        <BlogForm v-if="editing" />
      </div>
    </div>
  </div>
</template>

<script>
import { Blog } from "../models/Blog.js"
import { AppState } from "../AppState.js";
import { computed, ref } from "@vue/reactivity";

export default {
  props: {
    blog: { type: Blog, required: true }
  },

  setup(props) {

    const editing = ref(false)

    return {
      editing,
      account: computed(()=> AppState.account),
      cover: computed(()=> `url(${props.blog.coverImg})`),
      toggleEdit() {
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>