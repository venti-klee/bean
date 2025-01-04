<script>
// import { computed } from 'vue'
// import { useRoute, useRouter } from 'vue-router'
// const router = useRouter()
// const route = useRoute()
export default {
  name: "UserLogin",
  data() {
    return {
      account: '',
      password: '',
    };
  },
  methods:{
 onSubmit () {
        console.log('submit!')





        if (this.account!==""&&this.password!=='') {
          //this.account === 'user001' && this.password === '123'
          // 假设用户ID为1，实际情况下需要从后端获取真实的用户ID
          //const userId = 25;
          // 从用户名中提取用户 ID
          const userIdMatch = this.account.match(/^user(\d+)$/);
          if (userIdMatch) {
            const userId = parseInt(userIdMatch[1], 10); // 提取并转换为整数

            // 在这里，你通常会发送请求到后端验证用户
            // 但在这个示例中，我们假设验证已经通过，并直接存储用户信息
            const user = {
              name: this.account,
              id: userId
            };

            // 将用户信息存储到 localStorage
            localStorage.setItem('user', JSON.stringify(user));

            // 路由跳转到 'index' 页面
            this.$router.push({ name: 'index' });
          } else {
            // 用户名格式不正确
            alert('用户名格式应为 "user+数字"');
          }
          // const userId = JSON.parse(localStorage.getItem('user')).id; // 获取用户ID
          // localStorage.setItem('user', JSON.stringify({ name: this.account, id: userId }));
          // this.$router.push({ name: 'index' });
        } else {
          alert('无效的凭据');
        }
      // alert("2222")
      // this.$router.push('index')
      //this.$router.push('http://www.baidu.com')
      // 这里添加登录逻辑，例如验证用户输入
      //if (this.account === 'user001' && this.password === '123') {
        // 登录成功，跳转到 Dashboard
      // this.$router.push({ name: 'Index' });
      // } else {
      //   alert('Invalid credentials');
      // }
    }
  }
}
</script>

<template>

  <img src="../assets/bean_ps.png" alt="bean_logo"  style="height: 100px ;vertical-align: center;margin-top: 45px;
  margin-bottom: 20px;">
  <h2>拌豆bean，欢迎您！</h2>

  <h4>在这里登录您的账户！</h4>
  <p>注意：账号格式为“user”+数字，其中数字编号为1-3327，密码格式没有限制不为空即可</p>
  <form @submit.prevent=onSubmit>
    <p>账号：</p>

    <input v-model="account" type="text" placeholder="请输入账号" required />
    <p>密码：</p>

    <input v-model="password" type="password" placeholder="请输入密码" required />
    <button type="submit">登录
    </button>
  </form>

</template>

<style scoped>
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  user-select: none;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background: #fff;
}

div {
  background:repeating-linear-gradient(to top,#cbdfd9,wheat);
  padding-left: 8%;
  padding-right: 8%;
  width: 50%;
  border-radius: 15px;
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