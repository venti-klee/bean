<template>
  <div style="background-color:rgba(255, 255, 255, 0.5); height: 800px;">
    <el-row>
      <el-col :span="21" :offset="0" style="height: 600px">
        <div>
          <el-row style="height: 300px;">
            <el-col :span="6" v-for="item in tableData" :key="item.id">
              <el-card :body-style="{ padding: '0px' }" shadow="hover" style="height: 360px; position: relative;">
                <div class="card-overlay" v-show="isHovered(item)">
                  <div class="overlay-content">
                    <h4>{{ item.name }}</h4>
                    <p>{{ getSummary(item) }}</p>
                  </div>
                </div>
                <el-image :src="item.img" fit="contain" style="height: 80%; padding: 0" @mouseover="hoverItem = item" @mouseleave="hoverItem = null"></el-image>
                <div class="el-card__footer" style="margin: 0;padding: 0">
                  <el-rate style="margin: 0"
                           v-model="item.rate"
                           disabled
                           show-score
                           text-color="#ff9900"
                           score-template="3.7 "
                  />
                  <h4>{{ item.name }}</h4>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <br>
        </div>
      </el-col>
      <el-col :span="3" :offset="0">
        <h2 class="two">历史口味推荐区</h2>
        <br>
        <p>拌豆酱根据您历史的电影评分记录猜测也许这些电影比较符合您的口味哦</p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "MyMayLike",
  data() {
    return {
      hoverItem: null,
      tableData: [
        { id: "26747919",
          name: "749局",
          summary: "故事发生在近未来，因为未知神秘生物的出现，导致整个城市面临前所未有的危机。一桩被隐藏多年的秘密计划浮出水面。少年马山（王俊凯 饰）被带入749局，进入层层迷宫，开启一程冒险之旅，并在这一旅程中完成了一次自我的成长与救赎。", img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2914023362.webp",
          genre: "动作 / 科幻 / 冒险",
          rate: 3.7 },
        // 可以添加更多电影数据
      ]
    };
  },
  methods: {
    isHovered(item) {
      return this.hoverItem === item;
    },
    getSummary(item) {
      return item.summary.slice(0, 50)+"...";
    }
  }
};
</script>
<style scoped>
.el-card {
  margin-right: 20px;
  margin-bottom: 20px;
  transition: all .5s;
  position: relative;
}
.el-card:hover {
  margin-top: -5px;
}
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  z-index: 10; /* 确保遮掩层在图片上方 */
}
.overlay-content {
  text-align: center;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.overlay-content h4 {
  margin: 5px 0;
  font-size: 18px;
}
.overlay-content p {
  margin: 5px 0;
  font-size: 14px;
  line-height: 1.5;
}
.two {
  margin: 0 auto;
  height: 300px;
  writing-mode: vertical-lr;
  writing-mode: tb-lr;
}
</style>
