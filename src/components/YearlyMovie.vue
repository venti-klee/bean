
<template>
  <div class="lyui-card" >
    <br>
    <el-row>
      <el-col :span="3" :offset="0">
        <h2 class="two">经典热播展示区</h2>
      </el-col>
      <el-col :span="18" :offset="0" >
        <el-carousel :interval="4000" indicator-position="outside" height="400px">
          <el-carousel-item v-for="item in carouselist" :key="item.movieID">
            <el-row style="height:100%;">
              <el-col :span="12" class="image-col">
                <div class="image-container">
                  <el-image :src="item.img" fit="cover" class="movie-image"></el-image>
<!--                  <h3 class="movie-title">{{ item.name }}</h3>-->
                </div>
              </el-col>
              <el-col :span="12" class="text-col">
                <div class="text-content">
                  <p class="movie-name">{{ item.name }}</p>
                  <hr>
                  <p class="movie-summary">{{ truncateSummary(item.summary) }}</p>
                  <el-tag>{{ item.genre }}</el-tag>
                  <br>
                  <br>
                  <el-button  type="primary" @click="navigateToDouban(item.doubanaddress)">查看豆瓣页面</el-button>
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
// import cheerio from "cheerio";

export default {
  name: "YearlyMovie",
  data() {
    return {
      carouselist: [
        {
          "movieID": "1292001",
          "img":"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2914698334.webp",
          "name": "海上钢琴师 La leggenda del pianista sull'oceano",
          "director": "朱塞佩·托纳多雷",
          "actor": "蒂姆·罗斯,普路特·泰勒·文斯,比尔·努恩,梅兰尼·蒂埃里,阿尔贝托·巴斯克斯",
          "genre": "剧情,音乐",
          "tag": "经典,海上钢琴师,音乐,人生,意大利,钢琴,剧情,意大利电影",
          "summary": "本片讲述了一个钢琴天才传奇的一生。1900年，Virginian号豪华邮轮上，一个孤儿被遗弃在头等舱，由船上的水手抚养长大，取名1900（蒂姆•罗斯饰）。1900慢慢长大，显示出了无师自通的非凡钢琴天赋，在船上的乐队表演钢琴，每个听过他演奏的人，都被深深打动。爵士乐鼻祖杰尼听说了1900的高超技艺，专门上船和他比赛，最后自叹弗如，黯然离去。可惜，这一切的事情都发生在海上，1900从来不愿踏上陆地，直到有一天，他爱上了一个女孩，情愫在琴键上流淌。他会不会为了爱情，踏上陆地开始新的生活，用他的琴声惊艳世界？他将怎样谱写自己非凡的人生。",
          "rate": "9.2",
          "popular": "498660",
          "cluster": "0",
          "flag": "1",
          "doubanaddress": "https://movie.douban.com/subject/1292001/"
        },
        {
          "movieID": "1292052",
          "img":"https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2914698334.webp",
          "name": "肖申克的救赎 The Shawshank Redemption",
          "director": "弗兰克·德拉邦特",
          "actor": "蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿,威廉姆·赛德勒,克兰西·布朗,吉尔·贝罗斯,马克·罗斯顿,詹姆斯·惠特摩,杰弗里·德曼,拉里·布兰登伯格,尼尔·吉恩托利,布赖恩·利比,大卫·普罗瓦尔,约瑟夫·劳格诺,祖德·塞克利拉",
          "genre": "剧情,犯罪",
          "tag": "经典,励志,信念,自由,美国,人性,剧情,人生",
          "summary": "20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯TimRobbins饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗里曼MorganFreeman饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步……本片根据著名作家斯蒂芬·金（StephenEdwinKing）的...",
          "rate": "9.6",
          "popular": "688378",
          "cluster": "0",
          "flag": "1",
          "doubanaddress": "https://movie.douban.com/subject/1292052/"
        }
      ]
    };
  },
  methods: {
    async fetchMovies() {
      try {
        //http://192.168.43.21:5000/Filtering
        const response = await axios.get('https://apifoxmock.com/m1/5395920-5069443-default/yearlymovie');
        this.carouselist = await Promise.all(response.data.map(async (movie) => {
          const movieData = { ...movie };
          movieData.doubanaddress = await this.fetchMoviePoster(movie.movieID);
          return movieData;
        }));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
    async fetchMoviePoster(movieID) {
      try {
        // const response = await axios.get(`https://movie.douban.com/subject/${movieID}/`);
        // const $ = cheerio.load(response.data);
        //const posterUrl = $('div#mainpic img').attr('src');
        //console.log(posterUrl);
        return "https://movie.douban.com/subject/"+movieID+"/"; // 返回豆瓣页面地址
      } catch (error) {
        console.error('Error fetching movie poster:', error);
        return '';
      }
    },
    truncateSummary(summary) {
      if (summary.length > 100) {
        return summary.substring(0, 100) + '...';
      }
      return summary;
    },
    navigateToDouban(url) {
      window.open(url, '_blank');
    }
  },
  created() {
    this.fetchMovies();
  }
};
</script>


<style scoped>
.carouselback{
  background:repeating-linear-gradient(to top,#cbdfd9,wheat);
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.two {
  margin: 0 auto;
  height: 300px;
  writing-mode: vertical-lr; /*从左向右 从右向左是 writing-mode: vertical-rl;*/
  writing-mode: tb-lr; /*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
}

.lyui-card {
  margin-bottom: 15px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  background:repeating-linear-gradient(to top,#cbdfd9,wheat);
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, .05);
  -webkit-box-shadow: #d4d2d2 0px 0px 10px;
  -moz-box-shadow: #d4d2d2 0px 0px 10px;
}

.image-col {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.image-container {
  position: relative;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  overflow: hidden;
}

.movie-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  background:repeating-linear-gradient(to top,#cbdfd9,wheat) ;
}

.movie-title {
  position: absolute;
  bottom: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
}

.text-col {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

}

.text-content {
  text-align: center;
  width: 80%;
}

.movie-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.movie-summary {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
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
</style>