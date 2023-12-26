const e=JSON.parse('{"key":"v-5bb90b68","path":"/high-availability/performance-test.html","title":"性能测试入门","lang":"zh-CN","frontmatter":{"title":"性能测试入门","category":"高可用","description":"性能测试一般情况下都是由测试这个职位去做的，那还需要我们开发学这个干嘛呢？了解性能测试的指标、分类以及工具等知识有助于我们更好地去写出性能更好的程序，另外作为开发这个角色，如果你会性能测试的话，相信也会为你的履历加分不少。 这篇文章是我会结合自己的实际经历以及在测试这里取的经所得，除此之外，我还借鉴了一些优秀书籍，希望对你有帮助。 一 不同角色看网站性能 1.1 用户 当用户打开一个网站的时候，最关注的是什么？当然是网站响应速度的快慢。比如我们点击了淘宝的主页，淘宝需要多久将首页的内容呈现在我的面前，我点击了提交订单按钮需要多久返回结果等等。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/high-availability/performance-test.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"性能测试入门"}],["meta",{"property":"og:description","content":"性能测试一般情况下都是由测试这个职位去做的，那还需要我们开发学这个干嘛呢？了解性能测试的指标、分类以及工具等知识有助于我们更好地去写出性能更好的程序，另外作为开发这个角色，如果你会性能测试的话，相信也会为你的履历加分不少。 这篇文章是我会结合自己的实际经历以及在测试这里取的经所得，除此之外，我还借鉴了一些优秀书籍，希望对你有帮助。 一 不同角色看网站性能 1.1 用户 当用户打开一个网站的时候，最关注的是什么？当然是网站响应速度的快慢。比如我们点击了淘宝的主页，淘宝需要多久将首页的内容呈现在我的面前，我点击了提交订单按钮需要多久返回结果等等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-26T22:44:02.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2023-10-26T22:44:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"性能测试入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-26T22:44:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"一 不同角色看网站性能","slug":"一-不同角色看网站性能","link":"#一-不同角色看网站性能","children":[{"level":3,"title":"1.1 用户","slug":"_1-1-用户","link":"#_1-1-用户","children":[]},{"level":3,"title":"1.2 开发人员","slug":"_1-2-开发人员","link":"#_1-2-开发人员","children":[]},{"level":3,"title":"1.3 测试人员","slug":"_1-3-测试人员","link":"#_1-3-测试人员","children":[]},{"level":3,"title":"1.4 运维人员","slug":"_1-4-运维人员","link":"#_1-4-运维人员","children":[]}]},{"level":2,"title":"二 性能测试需要注意的点","slug":"二-性能测试需要注意的点","link":"#二-性能测试需要注意的点","children":[{"level":3,"title":"2.1 了解系统的业务场景","slug":"_2-1-了解系统的业务场景","link":"#_2-1-了解系统的业务场景","children":[]},{"level":3,"title":"2.2 历史数据非常有用","slug":"_2-2-历史数据非常有用","link":"#_2-2-历史数据非常有用","children":[]},{"level":3,"title":"三 性能测试的指标","slug":"三-性能测试的指标","link":"#三-性能测试的指标","children":[]},{"level":3,"title":"3.1 响应时间","slug":"_3-1-响应时间","link":"#_3-1-响应时间","children":[]},{"level":3,"title":"3.2 并发数","slug":"_3-2-并发数","link":"#_3-2-并发数","children":[]},{"level":3,"title":"3.3 吞吐量","slug":"_3-3-吞吐量","link":"#_3-3-吞吐量","children":[]},{"level":3,"title":"3.4 性能计数器","slug":"_3-4-性能计数器","link":"#_3-4-性能计数器","children":[]},{"level":3,"title":"四 几种常见的性能测试","slug":"四-几种常见的性能测试","link":"#四-几种常见的性能测试","children":[]},{"level":3,"title":"性能测试","slug":"性能测试","link":"#性能测试","children":[]},{"level":3,"title":"负载测试","slug":"负载测试","link":"#负载测试","children":[]},{"level":3,"title":"压力测试","slug":"压力测试","link":"#压力测试","children":[]},{"level":3,"title":"稳定性测试","slug":"稳定性测试","link":"#稳定性测试","children":[]}]},{"level":2,"title":"五 常用性能测试工具","slug":"五-常用性能测试工具","link":"#五-常用性能测试工具","children":[{"level":3,"title":"5.1 后端常用","slug":"_5-1-后端常用","link":"#_5-1-后端常用","children":[]},{"level":3,"title":"5.2 前端常用","slug":"_5-2-前端常用","link":"#_5-2-前端常用","children":[]}]},{"level":2,"title":"六 常见的性能优化策略","slug":"六-常见的性能优化策略","link":"#六-常见的性能优化策略","children":[]}],"git":{"createdTime":1646270096000,"updatedTime":1698360242000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4},{"name":"Guide","email":"koushuangbwcx@163.com","commits":3},{"name":"guide","email":"koushuangbwcx@163.com","commits":2},{"name":"hx78","email":"hangxing78@163.com","commits":1},{"name":"kite","email":"lizhengfeng.lzf@alibaba-inc.com","commits":1}]},"readingTime":{"minutes":8.14,"words":2443},"filePathRelative":"high-availability/performance-test.md","localizedDate":"2022年3月3日","excerpt":"<p>性能测试一般情况下都是由测试这个职位去做的，那还需要我们开发学这个干嘛呢？了解性能测试的指标、分类以及工具等知识有助于我们更好地去写出性能更好的程序，另外作为开发这个角色，如果你会性能测试的话，相信也会为你的履历加分不少。</p>\\n<p>这篇文章是我会结合自己的实际经历以及在测试这里取的经所得，除此之外，我还借鉴了一些优秀书籍，希望对你有帮助。</p>\\n<h2> 一 不同角色看网站性能</h2>\\n<h3> 1.1 用户</h3>\\n<p>当用户打开一个网站的时候，最关注的是什么？当然是网站响应速度的快慢。比如我们点击了淘宝的主页，淘宝需要多久将首页的内容呈现在我的面前，我点击了提交订单按钮需要多久返回结果等等。</p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
