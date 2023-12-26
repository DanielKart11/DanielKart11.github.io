const e=JSON.parse('{"key":"v-c52504c8","path":"/database/redis/3-commonly-used-cache-read-and-write-strategies.html","title":"3种常用的缓存读写策略详解","lang":"zh-CN","frontmatter":{"title":"3种常用的缓存读写策略详解","category":"数据库","tag":["Redis"],"description":"看到很多小伙伴简历上写了“熟练使用缓存”，但是被我问到“缓存常用的 3 种读写策略”的时候却一脸懵逼。 在我看来，造成这个问题的原因是我们在学习 Redis 的时候，可能只是简单了写一些 Demo，并没有去关注缓存的读写策略，或者说压根不知道这回事。 但是，搞懂 3 种常见的缓存读写策略对于实际工作中使用缓存以及面试中被问到缓存都是非常有帮助的！ 下面介绍到的三种模式各有优劣，不存在最佳模式，根据具体的业务场景选择适合自己的缓存读写模式。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/database/redis/3-commonly-used-cache-read-and-write-strategies.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"3种常用的缓存读写策略详解"}],["meta",{"property":"og:description","content":"看到很多小伙伴简历上写了“熟练使用缓存”，但是被我问到“缓存常用的 3 种读写策略”的时候却一脸懵逼。 在我看来，造成这个问题的原因是我们在学习 Redis 的时候，可能只是简单了写一些 Demo，并没有去关注缓存的读写策略，或者说压根不知道这回事。 但是，搞懂 3 种常见的缓存读写策略对于实际工作中使用缓存以及面试中被问到缓存都是非常有帮助的！ 下面介绍到的三种模式各有优劣，不存在最佳模式，根据具体的业务场景选择适合自己的缓存读写模式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-26T22:44:02.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2023-10-26T22:44:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3种常用的缓存读写策略详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-26T22:44:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":3,"title":"Cache Aside Pattern（旁路缓存模式）","slug":"cache-aside-pattern-旁路缓存模式","link":"#cache-aside-pattern-旁路缓存模式","children":[]},{"level":3,"title":"Read/Write Through Pattern（读写穿透）","slug":"read-write-through-pattern-读写穿透","link":"#read-write-through-pattern-读写穿透","children":[]},{"level":3,"title":"Write Behind Pattern（异步缓存写入）","slug":"write-behind-pattern-异步缓存写入","link":"#write-behind-pattern-异步缓存写入","children":[]}],"git":{"createdTime":1636197814000,"updatedTime":1698360242000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"Guide","email":"koushuangbwcx@163.com","commits":2},{"name":"zhangzhe","email":"2277100031@qq.com","commits":1}]},"readingTime":{"minutes":5.47,"words":1640},"filePathRelative":"database/redis/3-commonly-used-cache-read-and-write-strategies.md","localizedDate":"2021年11月6日","excerpt":"<p>看到很多小伙伴简历上写了“<strong>熟练使用缓存</strong>”，但是被我问到“<strong>缓存常用的 3 种读写策略</strong>”的时候却一脸懵逼。</p>\\n<p>在我看来，造成这个问题的原因是我们在学习 Redis 的时候，可能只是简单了写一些 Demo，并没有去关注缓存的读写策略，或者说压根不知道这回事。</p>\\n<p>但是，搞懂 3 种常见的缓存读写策略对于实际工作中使用缓存以及面试中被问到缓存都是非常有帮助的！</p>\\n<p><strong>下面介绍到的三种模式各有优劣，不存在最佳模式，根据具体的业务场景选择适合自己的缓存读写模式。</strong></p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
