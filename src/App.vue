<template>
  <Layout>
    <router-view class="view"></router-view>
  </Layout>
</template>

<script>
import Layout from '@/layout/Layout.vue'

export default {
  name: 'app',
  components: {
    Layout,
  }
}
</script>

<style scss>
</style>
