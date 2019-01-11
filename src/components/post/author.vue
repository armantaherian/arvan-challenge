<template>
  <section class="post-author mb-5">
    <b-media>
      <b-img v-if="author.image" slot="aside" class="rounded" :src="author.image" width="180" alt="placeholder" />
      <b-img v-else slot="aside" class="rounded" blank blank-color="#777" width="180" alt="placeholder" />
      <h4 v-if="author.username">{{ author.username }}</h4>
      <div class="text-secondary mb-3">Post Editor</div>
      <p v-if="author.bio" v-html="author.bio"></p>
    </b-media>
  </section>
</template>

<script>
export default {
  name: 'author',
  props: {
    author: {
      type: Object,
      required: true
    },
  }
}
</script>
