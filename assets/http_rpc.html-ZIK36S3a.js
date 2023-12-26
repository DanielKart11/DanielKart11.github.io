const t=JSON.parse('{"key":"v-2c362878","path":"/distributed-system/rpc/http_rpc.html","title":"有了 HTTP 协议，为什么还要有 RPC ？","lang":"zh-CN","frontmatter":{"title":"有了 HTTP 协议，为什么还要有 RPC ？","category":"分布式","tag":["rpc"],"description":"本文来自小白 debug投稿，原文：https://juejin.cn/post/7121882245605883934 。 我想起了我刚工作的时候，第一次接触 RPC 协议，当时就很懵，我 HTTP 协议用的好好的，为什么还要用 RPC 协议？","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/distributed-system/rpc/http_rpc.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"有了 HTTP 协议，为什么还要有 RPC ？"}],["meta",{"property":"og:description","content":"本文来自小白 debug投稿，原文：https://juejin.cn/post/7121882245605883934 。 我想起了我刚工作的时候，第一次接触 RPC 协议，当时就很懵，我 HTTP 协议用的好好的，为什么还要用 RPC 协议？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-26T22:44:02.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"rpc"}],["meta",{"property":"article:modified_time","content":"2023-10-26T22:44:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"有了 HTTP 协议，为什么还要有 RPC ？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-26T22:44:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"从 TCP 聊起","slug":"从-tcp-聊起","link":"#从-tcp-聊起","children":[]},{"level":2,"title":"使用纯裸 TCP 会有什么问题","slug":"使用纯裸-tcp-会有什么问题","link":"#使用纯裸-tcp-会有什么问题","children":[]},{"level":2,"title":"HTTP 和 RPC","slug":"http-和-rpc","link":"#http-和-rpc","children":[{"level":3,"title":"RPC 其实是一种调用方式","slug":"rpc-其实是一种调用方式","link":"#rpc-其实是一种调用方式","children":[]},{"level":3,"title":"那既然有 RPC 了，为什么还要有 HTTP 呢？","slug":"那既然有-rpc-了-为什么还要有-http-呢","link":"#那既然有-rpc-了-为什么还要有-http-呢","children":[]},{"level":3,"title":"HTTP 和 RPC 有什么区别","slug":"http-和-rpc-有什么区别","link":"#http-和-rpc-有什么区别","children":[]},{"level":3,"title":"为什么既然有了 HTTP2，还要有 RPC 协议？","slug":"为什么既然有了-http2-还要有-rpc-协议","link":"#为什么既然有了-http2-还要有-rpc-协议","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1659422471000,"updatedTime":1698360242000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"guide","email":"koushuangbwcx@163.com","commits":1}]},"readingTime":{"minutes":11.75,"words":3524},"filePathRelative":"distributed-system/rpc/http&rpc.md","localizedDate":"2022年8月2日","excerpt":"<blockquote>\\n<p>本文来自<a href=\\"https://juejin.cn/user/4001878057422087\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">小白 debug</a>投稿，原文：<a href=\\"https://juejin.cn/post/7121882245605883934\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://juejin.cn/post/7121882245605883934</a> 。</p>\\n</blockquote>\\n<p>我想起了我刚工作的时候，第一次接触 RPC 协议，当时就很懵，我 HTTP 协议用的好好的，为什么还要用 RPC 协议？</p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{t as data};
