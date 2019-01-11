<template>
  <transition name="fade" mode="out-in">
    <div v-if="tags.length" class="widget mb-5 mr-0 mr-lg-5">
      <h5 class="mb-3">Tags</h5>

      <b-list-group flush>
        <b-list-group-item v-for="tag in tags" :key="tag" :to="`/tag/${tag}`">{{ tag }}</b-list-group-item>
      </b-list-group>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'widgetTags',
  mounted() {
    if (!this.tags.length) {
      this.$store.dispatch('getTags')
    }
  },
  computed: {
    ...mapGetters([
      'tags'
    ]),
  },
}
</script>
