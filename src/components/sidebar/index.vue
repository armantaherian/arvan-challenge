<template>
  <aside class="sidebar mb-5">
    <div class="widget mb-5 mr-0 mr-lg-5">
      <b-form-input
        type="text"
        class="search-input"
        placeholder="Search…"
      > <!-- v-model="search" -->
      </b-form-input>
    </div>

    <div class="widget mb-5 mr-0 mr-lg-5">
      <h5 class="mb-3">Categories</h5>

      <b-list-group flush>
        <b-list-group-item href="#">This is a default list group item</b-list-group-item>
        <b-list-group-item href="#">This is a primary list group item</b-list-group-item>
        <b-list-group-item href="#">This is a secondary list group item</b-list-group-item>
        <b-list-group-item href="#">This is a success list group item</b-list-group-item>
      </b-list-group>
    </div>

    <div class="widget">
      <h5 class="mb-3">Latest Posts</h5>

      <ul class="no-style-list">
        <li>
          <a href="#">
            <b-img left rounded="0" src="https://picsum.photos/250/250/?image=58" width="75" height="75" alt="img" class="m-1 mr-2" />
            <h5 class="text-dark">Some quick example text to build on the</h5>
            <p class="text-secondary">Post 22 April, 2018</p>
          </a>
        </li>

        <li>
          <a href="#">
            <b-img left rounded="0" src="https://picsum.photos/250/250/?image=54" width="75" height="75" alt="img" class="m-1 mr-2" />
            <h5 class="text-dark">Some quick example text to build on the</h5>
            <p class="text-secondary">Post 22 April, 2018</p>
          </a>
        </li>

        <li>
          <a href="#">
            <b-img left rounded="0" src="https://picsum.photos/250/250/?image=59" width="75" height="75" alt="img" class="m-1 mr-2" />
            <h5 class="text-dark">Some quick example text to build on the</h5>
            <p class="text-secondary">Post 22 April, 2018</p>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  components: {}
}
</script>

<style>
</style>
