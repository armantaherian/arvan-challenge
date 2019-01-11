<template>
  <div class="site-header pt-3 pt-md-3 pb-1 pb-md-2 mb-5">
    <header class="general-header mb-2 mb-md-3">
      <b-container>
        <b-navbar toggleable="md" type="dark">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

          <b-navbar-brand href="/">
            <img src="/assets/logo.png" />
          </b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#" class="btn btn-sm">Home</b-nav-item>
              <b-nav-item href="#" class="btn btn-sm">About</b-nav-item>
              <b-nav-item href="#" class="btn btn-sm">Screen</b-nav-item>
              <b-nav-item href="#" class="btn btn-sm">Contact</b-nav-item>
              <b-nav-item href="#" class="btn btn-sm btn-outline-light ml-2">Create Account</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
    </header>

    <div class="page-header text-center pt-1 pt-md-3 pb-2 pb-md-4">
      <h2>Example heading</h2>
      <p>Home - Blog</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  components: {}
}
</script>

<style>
</style>
