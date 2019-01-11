<template>
  <main>
    <b-container>
      <b-row>
        <b-col sm="12" md="8" class="mb-lg-5">
          <transition name="fade" mode="out-in">
            <article v-if="loaded" class="post mb-5">
              <header class="mb-4">
                <h3>{{ article.title }}</h3>
                <time class="text-secondary">By: {{ article.author.username }}, Date: {{ article.createdAt | date }}</time>
              </header>

              <div v-if="article.image" class="post-thumbnail mb-4">
                <b-img :src="article.image" fluid alt="Responsive image" />
              </div>

              <div class="entry mb-4">
                <p v-html="article.body"></p>
              </div>

              <footer class="d-flex justify-content-between">
                <div class="post-social">
                  Share
                </div>

                <div v-if="article.tagList.length" class="post-tags d-flex">
                  <div><strong>Tags:</strong></div>

                  <ul class="no-style-list list-inline">
                    <li v-for="tag in article.tagList" :key="tag">
                      <router-link tag="a" :to="`/tag/${tag}`">{{ tag }}</router-link>
                    </li>
                  </ul>
                </div>
              </footer>
            </article>

            <article v-else class="post mb-5">
              Loading…
            </article>
          </transition>

          <transition name="fade" mode="out-in">
            <Author v-if="loaded" :author="article.author" />
          </transition>

          <transition name="fade" mode="out-in">
            <Comment v-if="loaded" :slug="article.slug" />
          </transition>
        </b-col>

        <b-col sm="12" md="4">
          <Sidebar />
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Sidebar from '@/components/sidebar'
import Author from '@/components/post/author'
import Comment from '@/components/post/commentSection'

export default {
  name: 'post',
  components: {
    Sidebar,
    Author,
    Comment,
  },
  created() {
    this.getArticle(this.currentPostId)
  },
  watch: {
    currentPostId: function(newValue) {
      this.$store.commit('destroyArticle')
      this.getArticle(newValue)
    }
  },
  computed: {
    currentPostId() {
      return this.$route.params.id
    },
    loaded() {
      return this.article.slug
    },
    ...mapGetters([
      'article'
    ]),
  },
  methods: {
    ...mapActions([
      'getArticle'
    ])
  },
  destroyed() {
    this.$store.commit('destroyArticle')
  }
}
</script>
