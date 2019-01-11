<template>
  <Layout>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
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
