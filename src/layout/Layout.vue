<template>
  <div>
    <Header />

    <slot></slot>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/layout/Footer.vue'
import Header from '@/layout/Header.vue'

export default {
  name: 'app',
  components: {
    Footer,
    Header,
  }
}
</script>

<style>
</style>
