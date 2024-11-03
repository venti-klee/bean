<script>
// import { computed } from 'vue'
// import { useRoute, useRouter } from 'vue-router'
// const router = useRouter()
// const route = useRoute()
export default {
  name: "UserInterface",
  data() {
    return {
      logo_name: '拌豆bean',
      logo_slogen:'拌豆一款更适合中国宝宝体质的下饭酱',
      user_picture:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      user_name:"admin",
    }
  }
}
</script>

<template>
  <div class="el-page-header" id="top_head" style="height: 150px;background-color: white">
    <el-row style="height: 150px">
      <el-col :span="12">
        <img src="../assets/bean_logo.png" alt="bean_logo"  style="height: 150px ;float: left;vertical-align: center">
        {{ logo_slogen }}
        <h1>{{ logo_name }}</h1>
      </el-col>
      <el-col :span="4" :offset="8">
        <el-avatar :size="80" style="float: left;justify-content: center;align-items:center" >
          <img :src="user_picture"
               alt="user_picture" />
        </el-avatar>
        <p>{{user_name}}</p>
        <el-button type="success" plain size="small"  >个人空间</el-button>
      </el-col>
    </el-row>
  </div>


  <div class="container2">
    <div class="small">
      <h2>用户评论词云图</h2>
      <img src="../assets/wordcloud.png" alt="图片1" style="height:400px">
    </div>
    <div class="small">
      <h2 style="margin-top: 40px;">用户评分聚类次数雷达图</h2>
      <img src="../assets/wordradar.png" alt="图片2" style="height:400px">
    </div>
  </div>


</template>

<style scoped>
small {
  background:white;
  padding-left: 8%;
  padding-right: 8%;
  width: 50%;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(20, 20, 50, 0.2);
}
div h2 {
  color: black;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 10px;
}
.container2 {
  background:repeating-linear-gradient(to top,#cbdfd9,wheat);
  align-items: center; /* 垂直居中 */
  height: 140vh; /* 容器高度 */
  margin-top: 0px;
}
img {
  max-width: 100%; /* 图片最大宽度 */
  height: auto; /* 图片高度自适应 */
}
</style>