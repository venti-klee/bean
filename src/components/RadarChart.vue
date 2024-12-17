<template>
  <div ref="chartRef" style="width: 100%; height: 600px; border: 1px solid #ccc;"></div>
</template>

<script>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
import * as d3 from 'd3-hierarchy';

export default {
  name: 'RadarChart',
  setup() {
    const chartRef = ref(null);
    let myChart;
    let option;

    const fetchData = async () => {
      try {
        // Replace with your actual data fetching logic
        const rawData = [
          {
            "cluster_id": 0,
            "keywords": ["アニメ", "日本", "宮崎駿", "高畑勲", "ジブリ"],
            "movie_count": 1,
            "representative_movies": [
              {
                "country": "日本",
                "genre": "コメディ/アニメ/ファミリー",
                "id": 1417728,
                "img": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p462372509.webp",
                "name": "私の隣りのヤマダサン ホーホケキョとなりのヤマダくん",
                "rate": 8.7,
                "summary": "住在山野市の山田家には5人がいます：家族の父である山田隆年届不惑で小さな会社の雑務課の従業員です。彼はしばしば細かいことで妻と喧嘩しますが、婆さんには下されてしまいます；隆年の妻松子さんは夫と同じ年齢で専門家の主婦で、一日を家族のために料理したり掃除したりしながら奔走していますが、ぼんやりとした性格で忘れっぽくなったりします；松子さんの母さんは80代近くですが、精力的に過ごしています。この老方はいつも独特で厳しい話し方をしており、エキゾチックスグループよりも恐れない様子があります；長男阿昇さんは外見と学習能力ともに普通の中学生で、母親のぼんやりとした性格を継いでいて、日常生活で面白い出来事が起こります；妹の野野子ちゃんは3年生小学生で細身で、そんなにばかな家族の中でしばしば無視されます。このような平凡な山田家では毎日、面白くて楽しい日常が繰り広がっています。この作品は石井寿一（いしい ひさいち）による四格漫...",
                "tag": "['アニメ', '日本', '宮崎駿', '高畑勲', 'ジブリ', '日本のアニメ', '私の隣りのヤマダサン', 'アニメ']"
              }
            ]
          },
          {
            "cluster_id": 1,
            "keywords": ["イギリス", "DerekJarman", "ジェイティブ", "アート", "イギリス映画"],
            "movie_count": 2,
            "representative_movies": [
              {
                "country": "イギリス/日本",
                "genre": "ドラマ/ジェイティブ/伝記",
                "id": 1417428,
                "img": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2042160414.webp",
                "name": "ブル Blu",
                "rate": 8.4,
                "summary": "監督デリック・ジャーマンの遺作『ブル』は彼がHIVに苦しむ最後の日々を描いた作品です。このときジャーマンは視覚障害を迎え、直面しているのは死の色合いであるこの憂鬱な青。映画は始終同じ青のみで構成され、それは唯一の色です。物語も音楽も対白もキャラクターもなく、詩的な背景ミュージックとジャーマンの静かな自白だけが流れています。ジャーマンはこの極端な「アンチフィルム」形式で、自分自身の最後の人生を伝えることができます。それが病院での騒ぐ声、海岸での孤独な波打ち上げ音、そして死への無抵抗な黙り込み、そして愛する恋人との別れの痛みや決意などです。ジャーマンはこう述べます。「あなたたちへ宇宙の青を捧げる、青は魂の一扇扉であり、無限の可能性が現実になる」というジャーマンの最後の言葉が残されたまま、その人は世界を去りました。",
                "tag": "['イギリス', 'DerekJarman', 'ジェイティブ', 'アート', 'イギリス映画', 'blue', '映画', 'ジャーマン']"
              },
              {
                "country": "オーストラリア/アメリカ",
                "genre": "ドラマ/ロマンス/ミュージカル",
                "id": 1304641,
                "img": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p770508669.webp",
                "name": "モーリン・ルー Moulin Rouge!",
                "rate": 7.9,
                "summary": "モーリン・ルーは日夜踊り続けています。カッコいいダンサー、コンカンダンス、これは男性たちが花々しく過ごす場所です。しかし、ここで愛されるのは純粋で感動的なものです。クリストィアン（イワン・マグレゴー イヴァン・マクロゲア 飲）は若いピアニストで美しい歌喉を持っています。父親の反対にもかかわらず、彼はモンドマイタウンという町へ行った。これが楽しむことの国です。そこで彼女と偶然出会いました。サティン（ニコール・キドマン ニコール・キッドマン 飲）はモーリン・ルーのトップスターで「ダイヤモンド」と呼ばれています。しかしながら彼女はキャバレーの歌手として生きることから離れることを望んでいます。クリストィアンの登場は彼女の公爵との出会い計画を壊し、彼女の心の中に飛び込んでいったのです。俊美的な少年は彼女に歌を通して「自由」、「美」、「真実」について話しており、彼女に今まで感じられなかった「愛」を与えました。サティンは夢を見つけて自分の夢と共にクリストィアンと一緒に叶えていくことを望みました。しかしながら公爵からの妨げは全てを難しくしました。愛はどのようにして運命とは戦うのでしょうか？",
                "tag": "['ロマンス', 'アメリカ', 'ミュージカル', '音楽', '2001', 'クラシック', 'オーストラリア', 'ドラマ']"
              }
            ]
          }
        ];
        console.log('Fetched Data:', rawData);
        run(rawData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const run = (rawData) => {
      const dataWrap = prepareData(rawData);
      initChart(dataWrap.seriesData, dataWrap.maxDepth);
    };

    const prepareData = (rawData) => {
      const seriesData = [];
      let maxDepth = 0;

      function convert(source, basePath, depth) {
        if (source == null) {
          return;
        }
        if (maxDepth > 5) {
          return;
        }
        maxDepth = Math.max(depth, maxDepth);
        seriesData.push({
          id: basePath,
          value: source.$count || 1,
          depth: depth
        });
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key) && !key.match(/^\$/)) {
            var path = basePath + '.' + key;
            convert(source[key], path, depth + 1);
          }
        }
      }

      rawData.forEach((cluster, clusterIndex) => {
        const clusterNode = {
          id: `cluster_${cluster.cluster_id}`,
          $count: cluster.representative_movies.length,
          children: []
        };
        seriesData.push({
          id: clusterNode.id,
          value: clusterNode.$count,
          depth: 0,
          index: clusterIndex
        });

        // Keywords
        const keywordsNode = {
          id: `${clusterNode.id}_keywords`,
          $count: cluster.keywords.length,
          children: cluster.keywords.map(keyword => ({
            id: `${clusterNode.id}_keywords_${keyword}`,
            $count: 1,
            parent: `${clusterNode.id}_keywords`
          })),
          parent: clusterNode.id
        };
        clusterNode.children.push(keywordsNode);

        // Movie Count
        const movieCountNode = {
          id: `${clusterNode.id}_movie_count`,
          $count: cluster.movie_count,
          parent: clusterNode.id
        };
        clusterNode.children.push(movieCountNode);

        // Representative Movies
        const representativeMoviesNode = {
          id: `${clusterNode.id}_representative_movies`,
          $count: cluster.representative_movies.length,
          children: cluster.representative_movies.map(movie => {
            const movieNode = {
              id: `${clusterNode.id}_representative_movies_${movie.id}`,
              $count: 1,
              children: [
                { id: `${clusterNode.id}_representative_movies_${movie.id}_country`, $count: 1, name: movie.country, parent: `${clusterNode.id}_representative_movies_${movie.id}` },
                { id: `${clusterNode.id}_representative_movies_${movie.id}_genre`, $count: 1, name: movie.genre, parent: `${clusterNode.id}_representative_movies_${movie.id}` },
                { id: `${clusterNode.id}_representative_movies_${movie.id}_name`, $count: 1, name: movie.name, parent: `${clusterNode.id}_representative_movies_${movie.id}` },
                { id: `${clusterNode.id}_representative_movies_${movie.id}_rate`, $count: 1, name: movie.rate.toString(), parent: `${clusterNode.id}_representative_movies_${movie.id}` },
                { id: `${clusterNode.id}_representative_movies_${movie.id}_summary`, $count: 1, name: movie.summary, parent: `${clusterNode.id}_representative_movies_${movie.id}` },
                { id: `${clusterNode.id}_representative_movies_${movie.id}_tag`, $count: 1, name: movie.tag, parent: `${clusterNode.id}_representative_movies_${movie.id}` }
              ],
              parent: `${clusterNode.id}_representative_movies`
            };
            return movieNode;
          }),
          parent: clusterNode.id
        };
        clusterNode.children.push(representativeMoviesNode);

        convert(clusterNode, clusterNode.id, 1);
      });

      console.log('Prepared Data:', seriesData);
      return {
        seriesData: seriesData,
        maxDepth: maxDepth
      };
    };

    const initChart = (seriesData, maxDepth) => {
      var displayRoot = stratify();

      function stratify() {
        return d3
            .stratify()
            .parentId(function (d) {
              return d.parent || null;
            })(seriesData)
            .sum(function (d) {
              return d.value || 0;
            })
            .sort(function (a, b) {
              return b.value - a.value;
            });
      }

      function overallLayout(params, api) {
        var context = params.context;
        d3
            .pack()
            .size([api.getWidth() - 2, api.getHeight() - 2])
            .padding(3)(displayRoot);
        context.nodes = {};
        displayRoot.descendants().forEach(function (node) {
          context.nodes[node.id] = node;
        });
      }

      function renderItem(params, api) {
        var context = params.context;
        // Only do that layout once in each time `setOption` called.
        if (!context.layout) {
          context.layout = true;
          overallLayout(params, api);
        }
        var nodePath = api.value('id');
        var node = context.nodes[nodePath];
        if (!node) {
          // Render nothing.
          return;
        }
        var isLeaf = !node.children || !node.children.length;
        var focus = new Uint32Array(
            node.descendants().map(function (node) {
              return node.data.index;
            })
        );
        var nodeName = isLeaf
            ? nodePath
                .slice(nodePath.lastIndexOf('.') + 1)
                .split(/(?=[A-Z][^A-Z])/g)
                .join('\n')
            : '';
        var z2 = api.value('depth') * 2;
        return {
          type: 'circle',
          focus: focus,
          shape: {
            cx: node.x,
            cy: node.y,
            r: node.r
          },
          transition: ['shape'],
          z2: z2,
          textContent: {
            type: 'text',
            style: {
              text: nodeName,
              fontFamily: 'Arial',
              width: node.r * 1.3,
              overflow: 'truncate',
              fontSize: node.r / 3
            },
            emphasis: {
              style: {
                overflow: null,
                fontSize: Math.max(node.r / 3, 12)
              }
            }
          },
          textConfig: {
            position: 'inside'
          },
          style: {
            fill: api.visual('color')
          },
          emphasis: {
            style: {
              fontFamily: 'Arial',
              fontSize: 12,
              shadowBlur: 20,
              shadowOffsetX: 3,
              shadowOffsetY: 5,
              shadowColor: 'rgba(0,0,0,0.3)'
            }
          }
        };
      }

      option = {
        dataset: {
          source: seriesData
        },
        tooltip: {},
        visualMap: [
          {
            show: false,
            min: 0,
            max: maxDepth,
            dimension: 'depth',
            inRange: {
              color: ['#006edd', '#e0ffff']
            }
          }
        ],
        hoverLayerThreshold: Infinity,
        series: {
          type: 'custom',
          renderItem: renderItem,
          progressive: 0,
          coordinateSystem: 'none',
          encode: {
            tooltip: 'value',
            itemName: 'id'
          }
        }
      };

      myChart.setOption(option);

      myChart.on('click', { seriesIndex: 0 }, function (params) {
        drillDown(params.data.id);
      });

      function drillDown(targetNodeId) {
        displayRoot = stratify();
        if (targetNodeId != null) {
          displayRoot = displayRoot.descendants().find(function (node) {
            return node.data.id === targetNodeId;
          });
        }
        // A trick to prevent d3-hierarchy from visiting parents in this algorithm.
        displayRoot.parent = null;
        myChart.setOption({
          dataset: {
            source: seriesData
          }
        });
      }

      // Reset: click on the blank area.
      myChart.getZr().on('click', function (event) {
        if (!event.target) {
          drillDown();
        }
      });
    };

    onMounted(() => {
      if (chartRef.value) {
        myChart = echarts.init(chartRef.value);
        fetchData();
      } else {
        console.error('Chart container not found');
      }
    });

    return {
      chartRef
    };
  }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>



