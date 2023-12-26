const e=JSON.parse('{"key":"v-79a9b916","path":"/java/collection/hashmap-source-code.html","title":"HashMap 源码分析","lang":"zh-CN","frontmatter":{"title":"HashMap 源码分析","category":"Java","tag":["Java集合"],"description":"JavaGuide官方知识星球 感谢 changfubai 对本文的改进做出的贡献！","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/collection/hashmap-source-code.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"HashMap 源码分析"}],["meta",{"property":"og:description","content":"JavaGuide官方知识星球 感谢 changfubai 对本文的改进做出的贡献！"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-26T22:44:02.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Java集合"}],["meta",{"property":"article:modified_time","content":"2023-10-26T22:44:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashMap 源码分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-26T22:44:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"HashMap 简介","slug":"hashmap-简介","link":"#hashmap-简介","children":[]},{"level":2,"title":"底层数据结构分析","slug":"底层数据结构分析","link":"#底层数据结构分析","children":[{"level":3,"title":"JDK1.8 之前","slug":"jdk1-8-之前","link":"#jdk1-8-之前","children":[]},{"level":3,"title":"JDK1.8 之后","slug":"jdk1-8-之后","link":"#jdk1-8-之后","children":[]}]},{"level":2,"title":"HashMap 源码分析","slug":"hashmap-源码分析","link":"#hashmap-源码分析","children":[{"level":3,"title":"构造方法","slug":"构造方法","link":"#构造方法","children":[]},{"level":3,"title":"put 方法","slug":"put-方法","link":"#put-方法","children":[]},{"level":3,"title":"get 方法","slug":"get-方法","link":"#get-方法","children":[]},{"level":3,"title":"resize 方法","slug":"resize-方法","link":"#resize-方法","children":[]}]},{"level":2,"title":"HashMap 常用方法测试","slug":"hashmap-常用方法测试","link":"#hashmap-常用方法测试","children":[]}],"git":{"createdTime":1636214511000,"updatedTime":1698360242000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":7},{"name":"guide","email":"koushuangbwcx@163.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"Davin-Lee","email":"45418134+Davin-Lee@users.noreply.github.com","commits":1},{"name":"Sr","email":"39112652+Itswag@users.noreply.github.com","commits":1},{"name":"andyoung","email":"1218853253@qq.com","commits":1},{"name":"godelgnis","email":"2275433755@qq.com","commits":1},{"name":"jun","email":"2395306536@qq.com","commits":1}]},"readingTime":{"minutes":14.4,"words":4321},"filePathRelative":"java/collection/hashmap-source-code.md","localizedDate":"2021年11月7日","excerpt":"<figure><a href=\\"/about-the-author/zhishixingqiu-two-years.html\\" target=\\"blank\\"><img src=\\"https://oss.javaguide.cn/xingqiu/xingqiu.png\\" alt=\\"JavaGuide官方知识星球\\" tabindex=\\"0\\"></a><figcaption>JavaGuide官方知识星球</figcaption></figure>\\n<blockquote>\\n<p>感谢 <a href=\\"https://github.com/changfubai\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">changfubai</a> 对本文的改进做出的贡献！</p>\\n</blockquote>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
