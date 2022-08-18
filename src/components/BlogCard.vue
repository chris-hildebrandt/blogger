<template>

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