<template>
  <div>
    <div class="home-view">
      <!--      <page-content></page-content>-->
      <!--      <video-background>-->
      <!--      </video-background>-->

      <TopHeader2></TopHeader2>
    </div>
    <div class="content-container" >
      <UserNewsInfo></UserNewsInfo>
      <hr>
      <br>
      <h1>用户画像</h1><br>
      <h2>词云</h2>
      <WordCloud></WordCloud>
      <hr>
      <br>
      <!--    <my-may-likw></my-may-likw>-->
      <!--    <hr>-->
      <!--    <br>-->
      <h2>聚类图</h2>
      <Tree></Tree>
      <hr>
      <br>

    </div>
  </div>
  <AppFooter></AppFooter>
</template>

<script>
//import PageContent from "@/components/PageContent.vue";
//import VideoBackground from "@/components/VideoBackground.vue";
// import TopHeader2 from "@/components/TopHeader2.vue";
import WordCloud from "@/components/WordCloud.vue";
//import Radar from "@/components/RadarChart.vue";
import AppFooter from "@/components/AppFooter.vue";
import UserNewsInfo from "@/components/UserInfo.vue";
import Tree from "@/components/UserTree.vue"
import TopHeader2 from "@/components/TopHeader2.vue";
//import WordCloud from '@/components/WordCloud.vue'
export default {
  name: 'UserView',
  components: {
    TopHeader2,
    AppFooter,
    // TopHeader2,
    UserNewsInfo,
    //VideoBackground,
    //PageContent,
    WordCloud,
    Tree
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.home-view{
  /*position: relative;*/
  width: 100%;
  height: 100%;
}
.content-container {
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
}

</style>