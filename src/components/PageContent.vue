<template>

  <div class="pagecontent">
    <top-header-2></top-header-2>
    <el-image :src="require('@/assets/home-page-content2.png')" alt="Home Page Content" :fit="'cover'"></el-image>
  </div>
</template>

<script>
//import TopHead from "@/components/TopHead.vue";
import TopHeader2 from "@/components/TopHeader2.vue";
export default {
  name: "PageContent",
  components: {TopHeader2}
}
</script>

<style scoped>
/*
.pagecontent{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  margin: 0 auto;
  color: white;
  height: 400px;
  width: 100%;
  z-index: -5;
}
 */
.pagecontent {
  position: absolute;
  width: 100%;
  height: 600px;
  z-index: 5;
}
</style>