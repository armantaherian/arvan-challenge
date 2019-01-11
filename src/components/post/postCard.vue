<template>
  <article class="card">
    <router-link tag="a" :to="`post/${article.slug}`">
      <img :src="`https://picsum.photos/600/300/?image=${parseInt(Math.random() * 100)}`" alt="Image" class="card-img-top">
    </router-link>

    <div class="card-body">
      <h4 class="card-title">
        <router-link tag="a" :to="`post/${article.slug}`">
          {{ article.title }}
        </router-link>
      </h4>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ `By: ${article.author.username}, Date: ${this.$options.filters.date(article.createdAt)}` }}
      </h6>
      <p class="card-text" v-html="article.description"></p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'postCard',
  props: {
    article: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
  .card {
    transition: box-shadow .25s ease-out;
    box-shadow: 0 0 35px 4px rgba(219, 219, 219, .6);

    &:hover {
      box-shadow: 0 0 40px 1px rgba(219, 219, 219, .9);
    }
  }
</style>
