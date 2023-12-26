const e=JSON.parse('{"key":"v-4bcd12a8","path":"/database/redis/redis-data-structures-02.html","title":"Redis 3 种特殊数据类型详解","lang":"zh-CN","frontmatter":{"title":"Redis 3 种特殊数据类型详解","category":"数据库","tag":["Redis"],"head":[["meta",{"name":"keywords","content":"Redis常见数据类型"}],["meta",{"name":"description","content":"Redis特殊数据类型总结：HyperLogLogs（基数统计）、Bitmap （位存储）、Geospatial (地理位置)。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/database/redis/redis-data-structures-02.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Redis 3 种特殊数据类型详解"}],["meta",{"property":"og:description","content":"除了 5 种基本的数据类型之外，Redis 还支持 3 种特殊的数据类型：Bitmap、HyperLogLog、GEO。 Bitmap （位图） 介绍 根据官网介绍： Bitmaps are not an actual data type, but a set of bit-oriented operations defined on the String type which is treated like a bit vector. Since strings are binary safe blobs and their maximum length is 512 MB, they are suitable to set up to 2^32 different bits. Bitmap 不是 Redis 中的实际数据类型，而是在 String 类型上定义的一组面向位的操作，将其视为位向量。由于字符串是二进制安全的块，且最大长度为 512 MB，它们适合用于设置最多 2^32 个不同的位。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-26T22:44:02.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2023-10-26T22:44:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 3 种特殊数据类型详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-26T22:44:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]],"description":"除了 5 种基本的数据类型之外，Redis 还支持 3 种特殊的数据类型：Bitmap、HyperLogLog、GEO。 Bitmap （位图） 介绍 根据官网介绍： Bitmaps are not an actual data type, but a set of bit-oriented operations defined on the String type which is treated like a bit vector. Since strings are binary safe blobs and their maximum length is 512 MB, they are suitable to set up to 2^32 different bits. Bitmap 不是 Redis 中的实际数据类型，而是在 String 类型上定义的一组面向位的操作，将其视为位向量。由于字符串是二进制安全的块，且最大长度为 512 MB，它们适合用于设置最多 2^32 个不同的位。"},"headers":[{"level":2,"title":"Bitmap （位图）","slug":"bitmap-位图","link":"#bitmap-位图","children":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}]},{"level":2,"title":"HyperLogLog（基数统计）","slug":"hyperloglog-基数统计","link":"#hyperloglog-基数统计","children":[{"level":3,"title":"介绍","slug":"介绍-1","link":"#介绍-1","children":[]},{"level":3,"title":"常用命令","slug":"常用命令-1","link":"#常用命令-1","children":[]},{"level":3,"title":"应用场景","slug":"应用场景-1","link":"#应用场景-1","children":[]}]},{"level":2,"title":"Geospatial (地理位置)","slug":"geospatial-地理位置","link":"#geospatial-地理位置","children":[{"level":3,"title":"介绍","slug":"介绍-2","link":"#介绍-2","children":[]},{"level":3,"title":"常用命令","slug":"常用命令-2","link":"#常用命令-2","children":[]},{"level":3,"title":"应用场景","slug":"应用场景-2","link":"#应用场景-2","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1658300895000,"updatedTime":1698360242000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":6},{"name":"Guide","email":"koushuangbwcx@163.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":6.24,"words":1873},"filePathRelative":"database/redis/redis-data-structures-02.md","localizedDate":"2022年7月20日","excerpt":"<p>除了 5 种基本的数据类型之外，Redis 还支持 3 种特殊的数据类型：Bitmap、HyperLogLog、GEO。</p>\\n<h2> Bitmap （位图）</h2>\\n<h3> 介绍</h3>\\n<p>根据官网介绍：</p>\\n<blockquote>\\n<p>Bitmaps are not an actual data type, but a set of bit-oriented operations defined on the String type which is treated like a bit vector. Since strings are binary safe blobs and their maximum length is 512 MB, they are suitable to set up to 2^32 different bits.</p>\\n<p>Bitmap 不是 Redis 中的实际数据类型，而是在 String 类型上定义的一组面向位的操作，将其视为位向量。由于字符串是二进制安全的块，且最大长度为 512 MB，它们适合用于设置最多 2^32 个不同的位。</p>\\n</blockquote>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
