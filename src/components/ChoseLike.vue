<!--<script>-->
<!--export default {-->
<!--  name: "ChoseLike",-->
<!--}-->
<!--</script>-->


<!--<template>-->
<!--  <div style="background-color: white;height: 360px" >-->
<!--    <el-row>-->
<!--      <el-col :span="3" :offset="0"   >-->
<!--        <h2 class="two">自由小料推荐区</h2>-->
<!--      </el-col>-->
<!--      <el-col :span="21" :offset="0" style="height: 600px; background-color: #cbdfd9">-->
<!--        -->

<!--      </el-col>-->


<!--    </el-row>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->

<!--.two{-->
<!--  margin: 0 auto;-->
<!--  height: 300px;-->
<!--  writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/-->
<!--  writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/-->
<!--}-->
<!--</style>-->

<template>

  <div style="background-color: white;height: 900px" >
    <el-row >
      <el-col :span="3" :offset="0"   >
        <h2 class="two">自由小料推荐区</h2>
        <br>
        <p>拌豆酱将根据您选择的标签展开推荐哦</p>

      </el-col>
      <el-col :span="21" :offset="0" style="height: 600px; background-color: #cbdfd9">
        <el-row style="height: 400px;">
        <el-form >
          <el-form-item  prop="chose_tag">
            <label>请选择您感兴趣的标签</label>
            <hr>
            <el-checkbox-group v-model="checkboxGroup1">
              <el-row>
                <el-col :span="3" :offset="0"  v-for="item in genresList" :key="item.key" >
              <el-checkbox-button style=" margin-right: 20px;margin-bottom: 20px;" :value="item"
              >
                {{item.label}}
              </el-checkbox-button>
                </el-col>
              </el-row>
            </el-checkbox-group>
          </el-form-item>
<!--        <el-form-item prop="label">
          <div class="new-tag">
            <span>
            <el-input
                ref="saveTagInput"
                v-model.trim="inputValue"
                class="input-new-tag"
                placeholder="请输入标签"
            />
            <el-button icon="el-icon-plus" class="button-new-tag" size="small" @click="handleInputConfirm">确认添加</el-button>
              </span>
          </div>

          <div v-for="(tag, index) in dynamicTags" :key="index" class="tags-inline">
            <el-input
                v-if="editable[index]"
                :ref="'editableInput' + index"
                v-model="tag.label"
                class="input-edit-tag"
                size="small"
                placeholder="请输入标签"
                maxlength="100"
                @change="handleEditableInputConfirm(tag, index)"
                @blur="handleEditableInputBlur(tag, index)"
            />
            <el-tag
                v-else
                closable
                :disable-transitions="false"
                @click="showEditTagInput(index)"
                @close="handleClose(tag, index)"
            >{{ tag.label }}</el-tag>
          </div>
     </el-form-item>-->
          <el-form-item>
            <label>请选择个性化程度</label>
            <div class="slider-demo-block" style="width: 600px">
              <el-slider v-model="value" show-input />
            </div>
            <el-button type="primary" @click="onsubmit" style="float: right;">嘟，拌豆启动</el-button>
             </el-form-item>
<!--          <el-form-item style="width: 600px">-->
<!--            <el-button type="primary" @click="onsubmit" style="float: right;">嘟，拌豆启动</el-button>-->
<!--          </el-form-item>-->
        </el-form>
        </el-row>

        <el-row >
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
      </el-col>


    </el-row>

  </div>


</template>
<script>
import {tagEmits} from "element-plus";

export default {
  computed: {
    tagEmits() {
      return tagEmits
    }
  },
  data() {
    return {
      // dynamicTags: [],
      // inputVisible: false,
      // inputValue: '',
      // editable: [],
      checkboxGroup1:[],
      value:0,
      item:
          {id:"26747919",name:"749局",summary:"故事发生在近未来，因为未知神秘生物的出现，导致整个城市面临前所未有的危机。一桩被隐藏多年的秘密计划浮出水面。少年马山（王俊凯 饰）被带入749局，进入层层迷宫，开启一程冒险之旅，并在这一旅程中完成了一次自我的成长与救赎。",
            img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2914023362.webp",
            genre: "动作 / 科幻 / 冒险",rate: 3.7},

      genresList: [
    { label: '未知', key: 0 ,isSelect: false},
    { label: '喜剧', key: 1 ,isSelect: false},
    { label: '爱情', key: 2 ,isSelect: false},
    { label: '动作', key: 3 ,isSelect: false},
    { label: '科幻', key: 4 ,isSelect: false},
    { label: '动画', key: 5 ,isSelect: false},
    { label: '悬疑', key: 6 ,isSelect: false},
    { label: '犯罪', key: 7 ,isSelect: false},
    { label: '惊悚', key: 8 ,isSelect: false},
    { label: '冒险', key: 9 ,isSelect: false},
    { label: '音乐', key: 10 ,isSelect: false},
    { label: '历史', key: 11 ,isSelect: false},
    { label: '奇幻', key: 12 ,isSelect: false},
    { label: '恐怖', key: 13 ,isSelect: false},
    { label: '战争', key: 14,isSelect: false },
    { label: '传记', key: 15 ,isSelect: false},
    { label: '歌舞', key: 16 ,isSelect: false},
    { label: '武侠', key: 17 ,isSelect: false},
    { label: '情色', key: 18 ,isSelect: false},
    { label: '灾难', key: 19 ,isSelect: false},
    { label: '西部', key: 20 ,isSelect: false},
    { label: '纪录片', key: 21 ,isSelect: false},
    { label: '短片', key: 22 ,isSelect: false},
    { label: '剧情', key: 23 ,isSelect: false},
    { label: '古装', key: 24 ,isSelect: false},
    { label: '家庭', key: 25 ,isSelect: false},
    { label: '儿童', key: 26 ,isSelect: false},
    { label: '运动', key: 27 ,isSelect: false},
    { label: '同性', key: 28 ,isSelect: false},
    { label: '荒诞', key: 29 ,isSelect: false},
    { label: '惊栗', key: 30 ,isSelect: false},
    { label: '鬼怪', key: 31 ,isSelect: false},
    { label: '戏曲', key: 32 ,isSelect: false},
    { label: '真人秀', key: 33 ,isSelect: false},
    { label: '黑色电影', key: 34 ,isSelect: false},
    { label: '舞台艺术', key: 35 ,isSelect: false},
    { label: '脱口秀', key: 36 ,isSelect: false},
    { label: '成人', key: 37 ,isSelect: false},
    { label: '记录', key: 38 ,isSelect: false}
      ]
    }
    }
  ,
  methods: {
    onSubmit () {
      console.log('submit!')
    }
    // handleSelect(key) {
    //   const currentTag = this.genresList.find(item => item.key === key)
    //   currentTag.isSelect = !currentTag.isSelect
    //   // this.formData[key] = currentTag.isSelect
    // },
    //
//   // 确认添加标签
  //   handleInputConfirm() {
  //     const inputValue = this.inputValue
  //     if (inputValue) {
  //       this.dynamicTags.push({ label: inputValue })
  //     }
  //     this.inputVisible = false
  //     this.inputValue = ''
  //     // eslint-disable-next-line no-unused-vars
  //     this.$nextTick(_ => {
  //       this.$refs.saveTagInput.$refs.input.focus()
  //     })
  //   },
  //   // 编辑 标签 input显示
  //   showEditTagInput(index) {
  //     this.$set(this.editable, index, true)
  //     // eslint-disable-next-line no-unused-vars
  //     this.$nextTick((_) => {
  //       const editableInput = 'editableInput' + index
  //       this.$refs[editableInput][0].$refs.input.focus()
  //     })
  //   },
  //   // 编辑 标签 input发生改变
  //   handleEditableInputConfirm(item, index) {
  //     if (item.label) {
  //       this.$set(this.editable, index, false)
  //     } else {
  //       this.$message({ message: '请输入标签', type: 'info' })
  //     }
  //   },
  //   // 编辑 标签 input失去焦点
  //   handleEditableInputBlur(item, index) {
  //     this.$set(this.editable, index, false)
  //   },
  //   // 删除 标签
  //   handleClose(tag, index) {
  //     this.dynamicTags.splice(index, 1)
  //   }
  }
}


</script>
<style>
.slider-demo-block {
  min-width: 600px;
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.two{
  margin: 0 auto;
  height: 300px;
  writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
  writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
}
</style>