<template >
    <div>
      <div class="home-view">
        <page-content></page-content>
        <video-background>
        </video-background>
      </div>
  <div class="content-container" >
    <yearly-movie></yearly-movie>
    <hr>
    <br>
<!--    <my-may-likw></my-may-likw>-->
<!--    <hr>-->
<!--    <br>-->
    <my-may-like3></my-may-like3>
    <hr>
    <br>

    <my-may-like2></my-may-like2>
    <hr>
    <br>
    <chose-like-2></chose-like-2>
    <hr>
    <br>
    <chose-like></chose-like>
    </div>
    </div>
  <app-footer></app-footer>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import TopHead from "@/components/TopHead.vue";
import YearlyMovie from "@/components/YearlyMovie.vue";
import ChoseLike from "@/components/ChoseLike.vue";
import ChoseLike2 from "@/components/ChoseLike2.vue";
// import MyMayLikw from "@/components/MyMayLike.vue";
import VideoBackground from "@/components/VideoBackground.vue";
import PageContent from "@/components/PageContent.vue";
import MyMayLike2 from "@/components/MyMayLike2.vue";
import AppFooter from "@/components/AppFooter.vue";
import MyMayLike3 from "@/components/MyMayLike3.vue";
export default {
  name: 'IndeView',
  components: {
    MyMayLike3,
    AppFooter,
    MyMayLike2,
    PageContent,
    VideoBackground,
    // MyMayLikw,
    ChoseLike,
    ChoseLike2,
    YearlyMovie,
    //TopHead,
  }
}
</script>

<style scoped>
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
