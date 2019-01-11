<template>
  <main>
    <b-container>
      <b-row>
        <b-col sm="12" md="8" class="mb-lg-5">
          <p v-if="!articlesCount">Loading…</p>

          <PostList v-if="articlesCount" :list="articles" />

          <div v-if="articlesCount" class="pagination mt-5 mb-5">
            <b-pagination-nav hide-goto-end-buttons use-router
              align="center"
              :number-of-pages="numberOfPage"
              base-url="?p="
              v-model="currentPage"
              prev-text="‹ Previous"
              next-text="Next ›"
            />
          </div>
        </b-col>

        <b-col sm="12" md="4">
          <Sidebar />
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import Sidebar from '@/components/sidebar'
import PostList from '@/components/post/postList'

export default {
  name: 'index',
  components: {
    Sidebar,
    PostList,
  },
  data() {
    return {
      currentPage: 1
    }
  },
  created() {
    if (this.$route.query.p) {
      this.currentPage = parseInt(this.$route.query.p);
    }
  },
  mounted() {
    if (!this.articlesCount) {
      this.$store.dispatch('getArticles', this.currentPage)
    }
  },
  watch: {
    currentPage: function (newCurrentPage) {
      this.$store.dispatch('getArticles', newCurrentPage)
    }
  },
  computed: {
    numberOfPage() {
      return this.articlesCount % 20 === 0 ? this.articlesCount / 20 : this.articlesCount / 20 + 1
    },
    ...mapState({
      articlesCount: state => state.article.articlesCount,
    }),
    ...mapGetters([
      'articles'
    ]),
  },
}
</script>

<style>
</style>
