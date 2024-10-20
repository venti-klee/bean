
<template>
<div style="background-color:rgba(255, 255, 255, 0.5) ;height: 600px"   >
  <el-row>
    <el-col :span="21" :offset="0" style="height: 600px">
<!--      ; background-color:wheat-->
      <div>
        <el-row style="height: 300px;">
<!--        <el-col :span="4" v-for="item in tabledata" :key="item.id"  >-->
          <el-col :span="4" v-for="items in 12" :key="items.id"  >
          <el-card :body-style="{padding:'0px'}" shadow="hover" style="height: 280px;"  >
                  <div class="card-header" >
                    <h4>{{this.item.name}}</h4>
                  </div>
            <el-image :src="this.item.img"  fit="cover"  style="height: 180px ;padding:0 "></el-image>
                  <div class="el-card__footer" style="margin: 0;padding: 0">
                    <el-rate style="margin: 0"
                        v-model="this.item.rate"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="3.7 "
                    />
                    <p>{{this.item.name}}</p>
                  <!--                  <p class="text item">{{ item.summary }}</p>-->
                  </div>

          </el-card>
        </el-col>
        </el-row>
        <br>
      </div>
    </el-col>
    <el-col :span="3" :offset="0"   >
      <h2 class="two">历史口味推荐区</h2>
      <br>
      <p>拌豆酱根据您历史的电影评分记录猜测也许这些电影比较符合您的口味哦</p>
    </el-col>

  </el-row>
</div>
</template>
<script>
export default {
  name: "MyMayLikw",
  data(){
    return{
      item:
        {id:"26747919",name:"749局",summary:"故事发生在近未来，因为未知神秘生物的出现，导致整个城市面临前所未有的危机。一桩被隐藏多年的秘密计划浮出水面。少年马山（王俊凯 饰）被带入749局，进入层层迷宫，开启一程冒险之旅，并在这一旅程中完成了一次自我的成长与救赎。",
          img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2914023362.webp",
          genre: "动作 / 科幻 / 冒险",rate: 3.7},

    }
  }
}

</script>
<style scoped>
.el-card {
  margin-right: 20px;
  margin-bottom: 20px;
  transition: all .5s;
}
.el-card:hover{
  margin-top: -5px;
}
.two{
  margin: 0 auto;
  height: 300px;
  writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
  writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
}
</style>