<template>
<!--        VVV  this will break if the prop doesn't exist, that is why we set a default for the property in the model. -->
<div v-if="project.creator"></div>
</template>

<script>
import { propsToAttrMap } from "@vue/shared";
import { Blog } from "../models/Blog.js"

export default {
  props: {
    blog: { type: Blog, required: true }
  },

  setup() {

    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>