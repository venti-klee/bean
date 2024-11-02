<template >
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--  <div style="background:repeating-linear-gradient(to top,#cbdfd9,wheat);;">-->
  <!--  <top-head></top-head>-->
  <!--  <hr>-->
  <!--  <br>-->
  <!--  <yearly-movie></yearly-movie>-->
  <!--  <hr>-->
  <!--  <br>-->
  <!--  <my-may-likw></my-may-likw>-->
  <!--  <hr>-->
  <!--  <br>-->
  <!--  <chose-like></chose-like>-->
  <!--  </div>-->
  <user-login></user-login>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TopHead from "@/components/TopHead.vue";
// import YearlyMovie from "@/components/YearlyMovie.vue";
// import MyMayLikw from "@/components/MyMayLike.vue";
// import ChoseLike from "@/components/ChoseLike.vue";
import UserLogin from "@/components/UserLogin.vue";
export default {
  name: '"LoginView"',
  components: {
    UserLogin,
    // ChoseLike,
    // MyMayLikw,
    // YearlyMovie,
    // TopHead,
    // HelloWorld
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
</style>
