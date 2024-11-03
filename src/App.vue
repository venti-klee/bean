<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  background:repeating-linear-gradient(to top,#cbdfd9,wheat);-->
  <div >
    <index-view></index-view>
  </div>

<!--<user-login></user-login>-->
<!--  <user-interface></user-interface>-->
<!--  <user-Cloud></user-Cloud>-->
  <app-footer></app-footer>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import TopHead from "@/components/TopHead.vue";
// import YearlyMovie from "@/components/YearlyMovie.vue";
// import MyMayLikw from "@/components/MyMayLike.vue";
// import ChoseLike from "@/components/ChoseLike.vue";
import IndexView from "@/views/IndexView.vue";
import AppFooter from "@/components/AppFooter.vue";
// import UserLogin from "@/components/UserLogin.vue";
//import UserInterface from "@/components/UserInterface.vue";
//import UserCloud from "@/components/UserCloud.vue";
export default {
  name: 'App',
  components: {
    AppFooter,
    IndexView,
    //UserCloud,
    //UserInterface,
    //UserLogin,
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
