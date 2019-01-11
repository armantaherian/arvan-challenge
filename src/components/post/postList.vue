<template>
  <b-row>
    <b-col v-for="article in list" :key="article.slug" :md="6" class="mb-4">
      <PostCard :article="article" />
    </b-col>
  </b-row>
</template>

<script>
import PostCard from '@/components/post/postCard'

export default {
  name: 'postList',
  components: {
    PostCard,
  },
  props: {
    list: {
      type: Array,
      required: true,
    }
  },
}
</script>
