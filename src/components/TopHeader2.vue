<template>
    <div class="nav" style="padding: 0; background-color: rgba(0,0,0,0.5);">
      <div class="nav-logo" style="width: 20%;">
        <a class="logo" href="/">
          <img src="../assets/bean_logo2.png" alt="bean_logo" style="height: 60px"/>
        </a>
      </div>
      <div class="nav-left" style="width: 30%; padding-right: 30px">
<!--        <el-menu-->
<!--            theme="dark"-->
<!--            mode="horizontal"-->
<!--            background-color="transparent"-->
<!--            text-color="white"-->
<!--            active-text-color="white">-->
<!--          <el-menu-item index="/movieset">电影集</el-menu-item>-->
<!--          <el-menu-item index="/recommand">自由推荐</el-menu-item>-->
<!--        </el-menu>-->
      </div>
      <div class="nav-search" style="width: 35%; padding-top: 15px; margin-left: 30px">
<!--        <el-input-->
<!--            placeholder="输入电影、导演、演员名称..."-->
<!--            prefix-icon="el-icon-search"-->
<!--            size="small"-->
<!--            style="width: 70%; margin-right: 10px"-->
<!--            v-model="keywords">-->
<!--        </el-input>-->
<!--        <el-button size="small" type="primary" @click="searchClick">-->
<!--          <Search style="width: 1em; height: 1em; margin-right: 8px" />-->
<!--          搜索</el-button>-->
      </div>
      <div class="nav-sep" style="width: 1%;">
        <h3 style="color: white">|</h3>
      </div>
      <div  class="user-profile" style="width: 15%">

        <el-dropdown>
          <span class="el-dropdown-link">{{user_name }}
          <el-icon class="el-icon-arrow-down">
            <arrow-down />
          </el-icon>
          </span>
          <template #dropdown>
          <el-dropdown-menu >
            <el-dropdown-item>个人空间</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-avatar :size="40" >
          <el-icon><UserFilled /></el-icon>
        </el-avatar>
      </div>
    </div>
</template>

<script>
import {ArrowDown, UserFilled} from "@element-plus/icons-vue";

export default {
  components: {UserFilled, ArrowDown},
  data() {
    return {
      user_picture: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      user_name: "admin",
    }
  },
  methods: {
}
}
</script>

<style scoped>
/* 继承原有样式 */
/deep/ ul.el-menu--popup-bottom-start {
  background-color: rgba(2, 10, 14, 1) !important;
}

.nav {
  width: 100%;
  height: 60px;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.el-menu {
  border: none !important;
}

.el-menu-item:hover {
  background-color: #3a91ba !important;
}

.el-menu-item {
  border-bottom: none !important;
  background-color: transparent !important;
}

.logo img {
  background: no-repeat;
}

.nav-search {
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}


.user-profile {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-dropdown-link {
  color: white;
  font-size: 15px;
  padding-right: 10px;
  cursor: pointer;
}

/* 新增样式 */
.el-page-header {
  position: relative;
  z-index: 10;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.el-page-header img {
  vertical-align: middle;
}

.el-page-header .el-col {
  display: flex;
  align-items: center;
}

.el-page-header .el-avatar {
  margin-right: 10px;
}

.el-page-header p {
  margin: 0;
  font-size: 18px;
}

.el-page-header .el-button {
  margin-top: 10px;
}
</style>