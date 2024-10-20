<script xmlns:el-col="http://www.w3.org/1999/html">
export default {
  name: "YearlyMovie",
  data(){
    return{
      carouselist:[
        {id:"1291543",name:"功夫",summary:"1940年代的上海，自小受尽欺辱的街头混混阿星（周星驰）为了能出人头地，可谓窥见机会的缝隙就往里钻，今次他盯上行动日益猖獗的黑道势力“斧头帮”，想借之大名成就大业。阿星假冒“斧头帮”成员试图在一个叫“猪笼城寨”的地方对居民敲诈，不想引来真的“斧头帮”与“猪笼城寨”居民的恩怨。“猪笼城寨”原是藏龙卧虎之处，居民中有许多身怀绝技者（元华、梁小龙等），他们隐藏于此本是为远离江湖恩怨，不想麻烦自动上身，躲都躲不及。而在观战正邪两派的斗争中，阿星逐渐领悟功夫的真谛。"
        ,img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.webp"
        ,genre:"喜剧/动作/犯罪/奇幻"},
        {id:"26747919",name:"749局",summary:"故事发生在近未来，因为未知神秘生物的出现，导致整个城市面临前所未有的危机。一桩被隐藏多年的秘密计划浮出水面。少年马山（王俊凯 饰）被带入749局，进入层层迷宫，开启一程冒险之旅，并在这一旅程中完成了一次自我的成长与救赎。",
          img:"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2913450214.webp",
        genre: "动作 / 科幻 / 冒险"},
        {id:"36689857",name:"荒野机器人",summary: "影片改编自皮特·布朗的同名畅销书，聚焦机器人萝斯（露皮塔·尼永奥 Lupita Nyong'o 配音）的冒险之旅。她因一场意外漂流到了孤岛，偏离了程序预设的发展轨道，不得不面对险恶的生存环境，并试图与充满戒备和敌意的野生动物建立关系。随着萝斯遇到了一只小灰雁（基特·康纳 Kit Connor 配音）并成为了他的“妈妈”，她逐渐在这座荒岛中找到了归属感。被定义好的编程即将被打破，一段关乎爱的心灵故事即将展开。",
          img:"https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2913022141.webp",
          genre: "科幻 / 动画 / 冒险"}

      ]
    }
  }
}
</script>
<template>
  <div class="lyui-card" style="background-color:rgba(255, 255, 255, 0.5) "  >
    <br>
    <el-row  >
<!--      style="background-color: #cbdfd9"-->
      <el-col :span="3" :offset="0"   >
        <h2 class="two">年度推荐电影名单</h2>
      </el-col>
      <el-col :span="18" :offset="0" style="background-color:rgba(255, 255, 255, 0.5) " >
  <el-carousel :interval="4000" indicator-position="outside" height="360px"  >
    <el-carousel-item v-for="item in carouselist" :key="item">
      <el-row>
        <el-col :span="12">
          <el-image :src="item.img" height="350px" fit="cover" ></el-image>
          <h3 style="justify-content: center">{{ item.name }}</h3></el-col>
        <el-col :span="12">
          <p style="justify-content: center">{{item.name}}</p>
          <hr>
          <p>{{item.summary}}</p>
          <el-tag>{{item.genre}}</el-tag>
        </el-col>

      </el-row>
    </el-carousel-item>
  </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: white;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: white;
}
.two{
margin: 0 auto;
height: 300px;
writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
}
.lyui-card {
  margin-bottom: 15px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, .05);
  -webkit-box-shadow: #d4d2d2 0px 0px 10px;
  -moz-box-shadow: #d4d2d2 0px 0px 10px;
}


body {
  padding: 120px;
}

.mainbox {
  width: 320px;
  height: 320px;
  position: relative;
  /* 超出隐藏需要加上 */
  overflow: hidden;
}

.content {
  width: 320px;
  height: 320px;
  line-height: 320px;
  text-align: center;
  background-color: #cde;
}

.line {
  /* 结合外层元素的相对定位 */
  position: absolute;
}

.line:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  /* 加上渐变效果，方可形成拖尾效果 */
  background: linear-gradient(90deg, transparent, orange);
  animation: animate1 8s linear infinite;
}

/* 分别控制其上下左右的定位距离，从而形成线条跟随效果 */
@keyframes animate1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.line:nth-child(2) {
  top: -100%;
  right: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, transparent, red);
  animation: animate2 8s linear infinite;
  /* 注意要加上延时触发动画效果，这样线条才会依次触发 */
  animation-delay: 2s;
}

@keyframes animate2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

.line:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 100%;
  background: linear-gradient(270deg, transparent, green);
  animation: animate3 8s linear infinite;
  animation-delay: 4s;
}

@keyframes animate3 {
  0% {
    right: -100%;
    height: 3px;
  }

  50%,
  100% {
    height: 2px;
    right: 100%;
  }
}

.line:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #3a86ff);
  animation: animate4 8s linear infinite;
  animation-delay: 6s;
}

@keyframes animate4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }
}

</style>

