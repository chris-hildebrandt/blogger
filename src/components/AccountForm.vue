<template>
<!-- are these properties in the model? -->
  <form @submit.prevent="handleSubmit" class="card">
    <div class="card-body">
      <div>
        <label for="name">Name:</label>
        <input type="text" class="form-control" v-model="editable.name" required name="name">
      </div>
      <div>
        <label for="picture">Picture:</label>
        <input type="url" class="form-control" v-model="editable.picture" required name="picture" placeholder="picture">
      </div>
      <div>
        <label for="coverImg">Cover Image:</label>
        <input type="url" class="form-control" v-model="editable.coverImg" required name="coverImg"
          placeholder="picture">
      </div>
      <button type="submit" class="btn btn-info">Save Changes</button>
    </div>
  </form>
</template>

<script>
import { accountService } from "../services/AccountService.js"
import { ref, watchEffect } from "@vue/runtime-core"
import { AppState } from "../AppState.js"
import { router } from "../router.js"

export default {
  setup() {

    const editable = ref({})

    watchEffect(() => {
      if (!AppState.account) { return }
      editable.value = { ...AppState.account }
    })

    return {
      editable,
      async handleSubmit() {
        try {
          await accountService.editAccount(editable.value)
          // TODO finish VVV this
          router.push({ name: 'Profile', params: { profileId: editable.value.id}})
        } catch (error) {
          logger.error('[editing account]', error);
          Pop.error(error);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>