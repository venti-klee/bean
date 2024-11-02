<template >

  <div class="el-page-header" id="top_head" style="height: 150px;background-color: rgba(0,0,0,0)">
    <el-row style="height: 150px">
      <el-col :span="12">
    <img src="../assets/bean_logo2.png" alt="bean_logo"  style="height: 150px ;float: left;vertical-align: center">
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
</template>

<script>
export default {

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

<style>

</style>
