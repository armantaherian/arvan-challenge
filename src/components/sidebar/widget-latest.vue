<template>
  <transition name="fade" mode="out-in">
    <div v-if="latestPosts.length" class="widget">
      <h5 class="mb-3">Latest Posts</h5>

      <ul class="no-style-list">
        <li v-for="article in latestPosts" :key="article.slug">
          <router-link tag="a" :to="`/post/${article.slug}`">
            <b-img left rounded :src="`https://picsum.photos/150/150/?image=${parseInt(Math.random() * 90)}`" width="75" height="75" alt="img" class="m-1 mr-2" />
            <h5 class="text-dark">{{ article.title }}</h5>
            <p class="text-secondary">Post {{ article.createdAt | date }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'widgetLatest',
  mounted() {
    if (!this.latestPosts.length) {
      this.$store.dispatch('getLatestPosts')
    }
  },
  computed: {
    ...mapGetters([
      'latestPosts'
    ]),
  },
}
</script>
