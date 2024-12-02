<template>
  <div class="card" >
    <TopHeader2 /> <!-- 将 TopHeader2 组件放在这里 -->
    <div class="card-body" style="margin-top: 20px">

      <div class="row">

        <div class="col-md-4">
          <el-avatar :size=200 style="font-size: 50px"> user</el-avatar>
        </div>
        <div class="col-md-8">
          <div class="username">user</div>
          <div class="fans">观看电影数量：123</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader2 from "@/components/TopHeader2.vue";

export default {
  name: "UserNewsInfo",
  components: { TopHeader2 } // 确保 TopHeader2 组件被正确注册
};
</script>
<style scoped>
img {
  border-radius: 50%;
}

button {
  padding: 2px 4px;
  font-size: 14px;
  width: 70px;
}

.username {
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
}

.fans {
  font-size: 14px;
  color: gray;
}
.bestsellers-container {
  height: 600px;
  width: 600px;
  background:white;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  margin-left: 310px;
  margin-bottom: 20px
}
</style>
