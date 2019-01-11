<template>
  <section class="comments">
    <h4 v-if="comments.length" class="mb-4">{{ comments.length || "No" }} {{ commentTitle }}</h4>

    <CommentList :list="comments" />

    <AddComment :slug="slug" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import AddComment from '@/components/post/addComment'
import CommentList from '@/components/post/commentList'

export default {
  name: 'commentSection',
  components: {
    AddComment,
    CommentList,
  },
  props: {
    slug: {
      type: String,
      required: true,
    }
  },
  mounted() {
    this.$store.dispatch('getComment', this.slug)
  },
  computed: {
    loaded() {
      return this.article.slug
    },
    commentTitle() {
      return this.comments.length > 1 ? "Comments" : "Comment"
    },
    ...mapGetters([
      'comments'
    ]),
  },
}
</script>
