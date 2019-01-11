<template>
  <div class="comment-list mb-5">
    <ul class="list-unstyled">
      <b-media v-for="comment in list" :key="comment.id" tag="li" class="mb-4">
        <b-img :src="comment.author.image" slot="aside" class="rounded" width="70" height="70" alt="placeholder" />
        <h5 class="mb-1">{{ comment.author.username }}</h5>
        <div class="text-secondary mb-2">{{ comment.createdAt | date }}</div>
        <p v-html="comment.body"></p>
        <!-- <div class="comment-reply mb-4"><b-button size="sm" variant="primary">Reply</b-button></div> -->
      </b-media>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'commentList',
  props: {
    list: {
      type: Array,
      required: true,
    }
  },
}
</script>
