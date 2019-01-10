<template>
  <footer class="site-footer text-center text-light">
    <div class="pt-5 pb-5">
      <div class="subscribe">
        <h3>Subscribe Our Newsletter</h3>
        <p class="mb-5">Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio tincidunt maximus.<br />Pellentesque tempus gravida viverra.</p>

        <form>
          <input type="email" placeholder="Enter Email Address">
          <button type="submit" class="font-weight-light">Subscribe ›</button>
        </form>
      </div>
    </div>

    <div class="footer-nav">
      <b-container>
        <b-navbar toggleable="md" type="dark">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
              <b-nav-text>Designed by <a href="#">GoldeLayers</a> | Powered by WordPress</b-nav-text>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto text-uppercase font-weight-light">
              <b-nav-item href="#">Home</b-nav-item>
              <b-nav-item href="#">About Us</b-nav-item>
              <b-nav-item href="#">Pages</b-nav-item>
              <b-nav-item href="#">Gallery</b-nav-item>
              <b-nav-item href="#">Blog</b-nav-item>
              <b-nav-item href="#">Contact</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  components: {}
}
</script>

<style>
</style>
