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
  <div class="divbody">
    <div class="child-div">
  <user-login></user-login>
    </div>
  </div>
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

<style scoped>
 * {
   box-sizing: border-box;
   -webkit-tap-highlight-color: transparent;
   outline: none;
   user-select: none;
 }

.divbody {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background: #fff;
}

 .child-div {
   background: repeating-linear-gradient(to top, #cbdfd9, wheat);
   min-height: 80vh;
   padding-left: 8%;
   padding-right: 8%;
   width: 50%;
   border-radius: 15px;
   margin-top: 5%;
   box-shadow: 0 2px 4px rgba(20, 20, 50, 0.2);
 }

div h2 {
  color: #8594A1;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 50px;
}

div h4 {
  text-align: left;
  color: #A2ACB4;
}

div p {
  color: #A2ACB4;
  text-align: left;
}

div input {
  width: 100%;
  height: 30px;
  padding: 10px;
  color: #C4CCD380;
  border-style: none;
  border-radius: 5px;
  transition: 0.2s;
}

div input:hover {
  color: #C4CCD3;
  border-color: #A2ACB4;
  border-width: 2px;
  border-style: solid;
}

div button {
  display: block;
  margin-top: 40px;
  margin-bottom: 50px;
  width: 100%;
  border-style: none;
  border-radius: 5px;
  background: #6F95B7;
  color: #F3F3F3;
  height: 35px;
  transition: 0.1s;
}
</style>
