<template>
  <aside class="sidebar mb-5">
    <WidgetSearch />

    <WidgetTags />

    <WidgetLatest />
  </aside>
</template>

<script>
import WidgetSearch from './widget-search'
import WidgetTags from './widget-tags'
import WidgetLatest from './widget-latest'

export default {
  name: 'sidebar',
  components: {
    WidgetSearch,
    WidgetTags,
    WidgetLatest,
  },
}
</script>
