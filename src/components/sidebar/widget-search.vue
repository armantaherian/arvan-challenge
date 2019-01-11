<template>
  <div class="widget mb-5 mr-0 mr-lg-5">
    <b-form-input
      type="text"
      class="search-input"
      placeholder="Search…"
      v-model="search"
    >
    </b-form-input>
  </div>
</template>

<script>
export default {
  name: 'widgetSearch',
  data() {
    return {
      search: '',
    }
  }
}
</script>
