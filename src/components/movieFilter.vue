<template>
  <div class="movie-nav" style="background-color: #333333">
    <div class="chooseMovie" style="display: flex">
      <el-tag effect="dark" style="margin-left: 10px">选电影</el-tag>
    </div>
    <div class="chooseBytype" style="display: flex; width: 100%; flex-wrap: wrap; margin-top: 10px">
      <el-radio-group>
        <el-radio v-for="(val, key) in categories" :key="key" :label="key">{{ val }}</el-radio>
      </el-radio-group>
    </div>
    <el-divider></el-divider>
    <div class="chooseByOther" style="margin-left: 15px">
      <el-radio-group
      >
        <el-radio label="1">按评分</el-radio>
        <el-radio label="2">按时间</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default{
  name: "MovieFilter",
  data() {
    return {
      categories:{
        0: '全部', 1: '剧情', 2: '喜剧', 3: '动作',
        4: '爱情', 5: '科幻', 6: '动画', 7: '悬疑',
        8: '惊悚', 9: '恐怖', 10: '犯罪', 11: '同性',
        12: '音乐', 13: '歌舞', 14: '传记', 15: '历史',
        16: '战争', 17: '西部', 18: '奇幻', 19: '冒险',
        20: '灾难', 21: '武侠', 22: '情色'
      },
      movies: [
        {
          "movieID": "1292001",
          "img": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2914698334.webp",
          "name": "海上钢琴师 La leggenda del pianista sull'oceano",
          "director": "朱塞佩·托纳多雷",
          "actor": "蒂姆·罗斯,普路特·泰勒·文斯,比尔·努恩,梅兰尼·蒂埃里,阿尔贝托·巴斯克斯",
          "genre": "剧情,音乐",
          "tag": "经典,海上钢琴师,音乐,人生,意大利,钢琴,剧情,意大利电影",
          "summary": "本片讲述了一个钢琴天才传奇的一生。1900年，Virginian号豪华邮轮上，一个孤儿被遗弃在头等舱，由船上的水手抚养长大，取名1900（蒂姆•罗斯饰）。1900慢慢长大，显示出了无师自通的非凡钢琴天赋，在船上的乐队表演钢琴，每个听过他演奏的人，都被深深打动。爵士乐鼻祖杰尼听说了1900的高超技艺，专门上船和他比赛，最后自叹弗如，黯然离去。可惜，这一切的事情都发生在海上，1900从来不愿踏上陆地，直到有一天，他爱上了一个女孩，情愫在琴键上流淌。他会不会为了爱情，踏上陆地开始新的生活，用他的琴声惊艳世界？他将怎样谱写自己非凡的人生。",
          "rate": "9.2",
          "popular": "498660",
          "cluster": "0"
        },
        {
          "movieID": "1292052",
          "img": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp",
          "name": "肖申克的救赎 The Shawshank Redemption",
          "director": "弗兰克·德拉邦特",
          "actor": "蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿,威廉姆·赛德勒,克兰西·布朗,吉尔·贝罗斯,马克·罗斯顿,詹姆斯·惠特摩,杰弗里·德曼,拉里·布兰登伯格,尼尔·吉恩托利,布赖恩·利比,大卫·普罗瓦尔,约瑟夫·劳格诺,祖德·塞克利拉",
          "genre": "剧情,犯罪",
          "tag": "经典,励志,信念,自由,美国,人性,剧情,人生",
          "summary": "20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯TimRobbins饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗里曼MorganFreeman饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步……本片根据著名作家斯蒂芬·金（StephenEdwinKing）的...",
          "rate": "9.6",
          "popular": "688378",
          "cluster": "0"
        },
        {
          "movieID": "1292720",
          "img": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2372307693.webp",
          "name": "阿甘正传 Forrest Gump",
          "director": "罗伯特·泽米吉斯",
          "actor": "汤姆·汉克斯,罗宾·怀特,加里·西尼斯,麦凯尔泰·威廉逊,莎莉·菲尔德,Michael Conner Humphreys,海利·乔·奥斯蒙",
          "genre": "剧情,爱情",
          "tag": "励志,经典,美国,人生,信念,成长,剧情,人性",
          "summary": "阿甘（汤姆·汉克斯饰）于二战结束后不久出生在美国南方阿拉巴马州一个闭塞的小镇，他先天弱智，智商只有75，然而他的妈妈是一个性格坚强的女性，她常常鼓励阿甘“傻人有傻福”，要他自强不息。阿甘像普通孩子一样上学，并且认识了一生的朋友和至爱珍妮（罗宾·莱特·潘饰），在珍妮和妈妈的爱护下，阿甘凭着上帝赐予的“飞毛腿”开始了一生不停的奔跑。阿甘成为橄榄球巨星、越战英雄、乒乓球外交使者、亿万富翁，但是，他始终忘不了珍妮，几次匆匆的相聚和离别，更是加深了阿甘的思念。有一天，阿甘收到珍妮的信，他们终于又要见面……",
          "rate": "9.4",
          "popular": "577180",
          "cluster": "6"
        },
        {
          "movieID": "1295644",
          "img": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2913554676.webp",
          "name": "这个杀手不太冷 Léon",
          "director": "吕克·贝松",
          "actor": "让·雷诺,娜塔莉·波特曼,加里·奥德曼,丹尼·爱罗,麦温",
          "genre": "剧情,动作,犯罪",
          "tag": "经典,法国电影,爱情,温情,剧情,人性,动作,犯罪",
          "summary": "里昂（让·雷诺饰）是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔达（纳塔丽·波特曼饰)敲开他的房门，要求在他那里暂避杀身之祸。原来邻居家的主人是警方缉毒组的眼线，只因贪污了一小包毒品而遭恶警（加里·奥德曼饰）杀害全家的惩罚。马蒂尔达得到里昂的留救，幸免于难，并留在里昂那里。里昂教小女孩使枪，她教里昂法文，两人关系日趋亲密，相处融洽。女孩想着去报仇，反倒被抓，里昂及时赶到，将女孩救回。混杂着哀怨情仇的正邪之战渐次升级，更大的冲突在所难免……",
          "rate": "9.4",
          "popular": "657725",
          "cluster": "5"
        },
        {
          "movieID": "1291546",
          "img": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.webp",
          "name": "霸王别姬",
          "director": "陈凯歌",
          "actor": "张国荣,张丰毅,巩俐,葛优,英达,蒋雯丽,吴大维,吕齐,雷汉,尹治,马明威,费振翔,智一桐,李春,赵海龙,李丹,童弟,沈慧芬",
          "genre": "剧情,爱情,同性",
          "tag": "经典,爱情,中国电影,同志,文艺,人性,人生,剧情",
          "summary": "段小楼（张丰毅）与程蝶衣（张国荣）是一对打小一起长大的师兄弟，两人一个演生，一个饰旦，一向配合天衣无缝，尤其一出《霸王别姬》，更是誉满京城，为此，两人约定合演一辈子《霸王别姬》。但两人对戏剧与人生关系的理解有本质不同，段小楼深知戏非人生，程蝶衣则是人戏不分。段小楼在认为该成家立业之时迎娶了名妓菊仙（巩俐），致使程蝶衣认定菊仙是可耻的第三者，使段小楼做了叛徒，自此，三人围绕一出《霸王别姬》生出的爱恨情仇战开始随着时代风云的变迁不断升级，终酿成悲剧。",
          "rate": "9.4",
          "popular": "474848",
          "cluster": "6"
        },
        {
          "movieID": "1292722",
          "img": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p457760035.webp",
          "name": "泰坦尼克号 Titanic",
          "director": "詹姆斯·卡梅隆",
          "actor": "莱昂纳多·迪卡普里奥,凯特·温丝莱特,比利·赞恩,凯西·贝茨,弗兰西丝·费舍,格伦·克洛斯,比利·鲍勃·松顿,大卫·沃纳,苏茜·爱米斯,维克多·加柏",
          "genre": "剧情,爱情,灾难",
          "tag": "经典,爱情,美国,浪漫,灾难,历史,泰坦尼克号",
          "summary": "1912年4月10日，号称 ‘世界工业史上的奇迹’ 的‘泰坦尼克号’开始了它的处女航，从英国的南安普敦出发驶往美国纽约。豪华巨轮上聚集了当时社会上的名流富豪，同时也搭载着众多希冀在美国实现梦想的普通人。穷画家杰克（莱昂纳多·迪卡普里奥饰）阴差阳错地来到这艘船上，并且遇见了贵族少女露丝（凯特·温丝莱特饰）。原本是两个世界的人因为命运的安排相遇相爱，就在杰克准备向露丝求婚的时候，泰坦尼克号撞上了冰山，爱情面临着生死考验。",
          "rate": "9.4",
          "popular": "765123",
          "cluster": "0"
        },
        {
          "movieID": "1291549",
          "img": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2884280708.webp",
          "name": "放牛班的春天 Les Choristes",
          "director": "克里斯托夫·巴哈蒂",
          "actor": "热拉尔·朱尼奥,让-巴蒂斯特·莫尼耶,弗朗索瓦·贝莱昂,凯德·麦拉德,玛丽·布奈尔",
          "genre": "剧情,音乐",
          "tag": "法国,音乐,教育,感人,剧情,励志",
          "summary": "1949年的法国乡村，音乐家克莱门特（热拉尔·朱尼奥饰）来到了一个偏远的寄宿学校当助理教师。学校里的学生大部分都是难缠的问题儿童。到任后不久，克莱门特发现学校的校长以残暴高压的手段管治这所学校，体罚在这里司空见惯。克莱门特尝试用自己的方法改善这种状况，他重新组建合唱团，鼓励孩子们加入。通过音乐，克莱门特不仅改变了孩子们的生活，也修复了自己的心灵。",
          "rate": "9.2",
          "popular": "234567",
          "cluster": "0"
        },
        {
          "movieID": "1292063",
          "img": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2578474613.webp",
          "name": "美丽人生 La vita è bella",
          "director": "罗伯托·贝尼尼",
          "actor": "罗伯托·贝尼尼,尼可莱塔·布拉斯基,乔治·坎塔里尼",
          "genre": "剧情,喜剧,战争",
          "tag": "意大利,战争,爱情,感人,喜剧,家庭",
          "summary": "1940年代的意大利，犹太青年圭多（罗伯托·贝尼尼饰）邂逅了美丽的女教师朵拉（尼可莱塔·布拉斯基饰），两人迅速坠入爱河并结婚生子。然而好景不长，二战爆发，圭多一家被抓进纳粹集中营。为保护儿子的纯真，圭多用尽一切办法让孩子相信这只是一场游戏，只要遵守规则就能获得大奖。在这场残酷的游戏中，圭多用爱和智慧为儿子编织了一个美好的童话。",
          "rate": "9.5",
          "popular": "345678",
          "cluster": "0"
        },
        {
          "movieID": "1291561",
          "img": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.webp",
          "name": "千与千寻 千と千尋の神隠し",
          "director": "宫崎骏",
          "actor": "柊瑠美,入野自由,夏木麻衣,菅原文太,中村彰男",
          "genre": "动画,奇幻,冒险",
          "tag": "日本,动画,宫崎骏,奇幻,成长,感动",
          "summary": "10岁的少女千寻（柊瑠美 配音）跟随父母搬家途中意外进入了一个神秘的世界。在这个充满神灵和怪物的地方，千寻的父母因贪吃变成了猪。为了找回原来的自己，千寻决定留在这个世界工作，寻找解除魔法的方法。在澡堂老板娘汤婆婆的帮助下，千寻开始了她的冒险之旅。在这个过程中，千寻学会了勇敢、坚强和独立。",
          "rate": "9.3",
          "popular": "456789",
          "cluster": "0"
        },
        {
          "movieID": "1292220",
          "img": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2648230660.webp",
          "name": "情书 Love Letter",
          "director": "岩井俊二",
          "actor": "中山美穗,丰川悦司,酒井美纪,柏原收史,小田切让,小池荣子",
          "genre": "剧情,爱情",
          "tag": "日本,爱情,青春,浪漫,感人,书信",
          "summary": "一封写给已故未婚妻的情书意外寄到了一个同名同姓的女孩手中，由此引发了一系列感人至深的故事。藤井树（中山美穗 饰）在整理去世未婚夫的遗物时发现了这封信，出于好奇回信询问，却发现了一个关于初恋的秘密。原来，未婚夫藤井树（柏原收史 饰）曾经暗恋过同班女生藤井树（酒井美纪 饰），而这段未曾说出口的爱情成为了两人生命中最美好的回忆。",
          "rate": "8.9",
          "popular": "123456",
          "cluster": "0"
        },
        {
          "movieID": "1292064",
          "img": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p479682972.webp",
          "name": "楚门的世界 The Truman Show",
          "director": "彼得·威尔",
          "actor": "金·凯瑞,劳拉·琳妮,艾德·哈里斯,诺亚·艾默里奇,布莱恩·考伦,菲利普·贝克·霍尔",
          "genre": "剧情,科幻",
          "tag": "美国,科幻,现实,思考,讽刺,人生",
          "summary": "楚门（金·凯瑞饰）是一位保险推销员，他生活在一个看似完美的小镇上，拥有完美的妻子和完美的朋友。然而，楚门渐渐发现自己周围的一切都是人为设定的，甚至包括天气。经过一系列的探索和尝试，楚门终于意识到自己生活在一个巨大的电视节目中，而全世界都在观看他的生活。面对这个荒诞的事实，楚门决定走出这个虚假的世界，寻找真实的自我。",
          "rate": "9.0",
          "popular": "567890",
          "cluster": "0"
        },
        {
          "movieID": "1889243",
          "img": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.webp",
          "name": "星际穿越 Interstellar",
          "director": "克里斯托弗·诺兰",
          "actor": "马修·麦康纳,安妮·海瑟薇,杰西卡·查斯坦,迈克尔·凯恩,马特·达蒙",
          "genre": "科幻,冒险",
          "tag": "美国,科幻,太空,探索,亲情,时间",
          "summary": "地球即将无法支持人类生存，前NASA飞行员库珀（马修·麦康纳饰）被选中执行一项任务，穿越虫洞寻找适合人类居住的新星球。在这一过程中，库珀和他的团队遇到了前所未有的挑战，同时也发现了宇宙间最深邃的秘密。这不仅是一次拯救人类的旅程，也是库珀与女儿之间情感联系的深刻展现。",
          "rate": "9.1",
          "popular": "678901",
          "cluster": "0"
        },
        {
          "movieID": "3793023",
          "img": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p579729551.webp",
          "name": "三傻大闹宝莱坞 3 Idiots",
          "director": "拉库马·希拉尼",
          "actor": "阿米尔·汗,卡琳娜·卡普,马杜什达娜·夏尔玛,沙尔曼·乔什,奥米·维斯瓦尼",
          "genre": "剧情,喜剧",
          "tag": "印度,喜剧,教育,励志,友谊,批判",
          "summary": "影片讲述的是三位好友兰彻（阿米尔·汗饰）、法罕（沙尔曼·乔什饰）和拉贾（马杜什达娜·夏尔玛饰）在印度最著名的工程学院学习的故事。兰彻是一个与众不同的学生，他质疑传统教育体系，提倡自由思想。他的行为引起了同学们的好奇和老师的不满。随着时间的推移，兰彻的影响改变了法罕和拉贾的命运，也触动了整个校园。",
          "rate": "9.2",
          "popular": "789012",
          "cluster": "0"
        },
        {
          "movieID": "3319755",
          "img": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p501177648.webp",
          "name": "怦然心动 La pieuvre et l'amour",
          "director": "马克·帕里戈",
          "actor": "基娅拉·马斯特洛亚尼,皮埃尔·理查德,安娜·莫格拉利斯,让-保罗·卢弗",
          "genre": "剧情,爱情",
          "tag": "法国,爱情,成长,初恋,青春",
          "summary": "朱丽叶（基娅拉·马斯特洛亚尼饰）和艾提安（皮埃尔·理查德饰）是邻居，从小一起长大。他们之间的关系经历了从儿时的纯真友谊到青春期微妙变化的过程。随着年龄的增长，两人的感情也逐渐深化，但彼此之间的误会和错过却让他们错过了彼此。多年后，当他们再次相遇时，是否还能找回那份最初的悸动？",
          "rate": "8.7",
          "popular": "890123",
          "cluster": "0"
        }
      ],
    };
  },

};
</script>

<style scoped>

</style>