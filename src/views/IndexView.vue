<template >
    <div style="background:repeating-linear-gradient(to top,#cbdfd9,wheat);;">
      <div class="home-view">
        <page-content></page-content>
        <video-background>
        </video-background>
      </div>

    <yearly-movie></yearly-movie>
    <hr>
    <br>
    <my-may-likw></my-may-likw>
    <hr>
    <br>
    <chose-like></chose-like>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import TopHead from "@/components/TopHead.vue";
import YearlyMovie from "@/components/YearlyMovie.vue";
import ChoseLike from "@/components/ChoseLike.vue";
import MyMayLikw from "@/components/MyMayLike.vue";
import VideoBackground from "@/components/VideoBackground.vue";
import PageContent from "@/components/PageContent.vue";
export default {
  name: 'IndeView',
  components: {
    PageContent,
    VideoBackground,
    MyMayLikw,
    ChoseLike,
    YearlyMovie,
    //TopHead,
  }
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
</style>
