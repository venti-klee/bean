<script>
import MovieFilter from "@/components/movieFilter.vue";
import TopHeader2 from "@/components/TopHeader2.vue";

export default {
  name: "FilterView",
  components: {TopHeader2, MovieFilter}
}
</script>

<template>
  <div style="background-color: #333333"></div>
  <top-header2></top-header2>
<movie-filter></movie-filter>
</template>

<style scoped>

</style>