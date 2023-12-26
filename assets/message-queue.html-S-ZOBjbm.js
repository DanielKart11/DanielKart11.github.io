const e=JSON.parse('{"key":"v-73b08f23","path":"/high-performance/message-queue/message-queue.html","title":"消息队列基础知识总结","lang":"zh-CN","frontmatter":{"title":"消息队列基础知识总结","category":"高性能","tag":["消息队列"],"description":"提示 这篇文章中的消息队列主要指的是分布式消息队列。 “RabbitMQ？”“Kafka？”“RocketMQ？”...在日常学习与开发过程中，我们常常听到消息队列这个关键词。我也在我的多篇文章中提到了这个概念。可能你是熟练使用消息队列的老手，又或者你是不懂消息队列的新手，不论你了不了解消息队列，本文都将带你搞懂消息队列的一些基本理论。 如果你是老手，你可能从本文学到你之前不曾注意的一些关于消息队列的重要概念，如果你是新手，相信本文将是你打开消息队列大门的一板砖。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/high-performance/message-queue/message-queue.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"消息队列基础知识总结"}],["meta",{"property":"og:description","content":"提示 这篇文章中的消息队列主要指的是分布式消息队列。 “RabbitMQ？”“Kafka？”“RocketMQ？”...在日常学习与开发过程中，我们常常听到消息队列这个关键词。我也在我的多篇文章中提到了这个概念。可能你是熟练使用消息队列的老手，又或者你是不懂消息队列的新手，不论你了不了解消息队列，本文都将带你搞懂消息队列的一些基本理论。 如果你是老手，你可能从本文学到你之前不曾注意的一些关于消息队列的重要概念，如果你是新手，相信本文将是你打开消息队列大门的一板砖。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-26T22:44:02.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"消息队列"}],["meta",{"property":"article:modified_time","content":"2023-10-26T22:44:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息队列基础知识总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-26T22:44:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"什么是消息队列？","slug":"什么是消息队列","link":"#什么是消息队列","children":[]},{"level":2,"title":"消息队列有什么用？","slug":"消息队列有什么用","link":"#消息队列有什么用","children":[{"level":3,"title":"通过异步处理提高系统性能（减少响应所需时间）","slug":"通过异步处理提高系统性能-减少响应所需时间","link":"#通过异步处理提高系统性能-减少响应所需时间","children":[]},{"level":3,"title":"削峰/限流","slug":"削峰-限流","link":"#削峰-限流","children":[]},{"level":3,"title":"降低系统耦合性","slug":"降低系统耦合性","link":"#降低系统耦合性","children":[]},{"level":3,"title":"实现分布式事务","slug":"实现分布式事务","link":"#实现分布式事务","children":[]}]},{"level":2,"title":"使用消息队列会带来哪些问题？","slug":"使用消息队列会带来哪些问题","link":"#使用消息队列会带来哪些问题","children":[]},{"level":2,"title":"JMS 和 AMQP","slug":"jms-和-amqp","link":"#jms-和-amqp","children":[{"level":3,"title":"JMS 是什么？","slug":"jms-是什么","link":"#jms-是什么","children":[]},{"level":3,"title":"JMS 两种消息模型","slug":"jms-两种消息模型","link":"#jms-两种消息模型","children":[]},{"level":3,"title":"AMQP 是什么？","slug":"amqp-是什么","link":"#amqp-是什么","children":[]},{"level":3,"title":"JMS vs AMQP","slug":"jms-vs-amqp","link":"#jms-vs-amqp","children":[]}]},{"level":2,"title":"RPC 和消息队列的区别","slug":"rpc-和消息队列的区别","link":"#rpc-和消息队列的区别","children":[]},{"level":2,"title":"分布式消息队列技术选型","slug":"分布式消息队列技术选型","link":"#分布式消息队列技术选型","children":[{"level":3,"title":"常见的消息队列有哪些？","slug":"常见的消息队列有哪些","link":"#常见的消息队列有哪些","children":[]},{"level":3,"title":"如何选择？","slug":"如何选择","link":"#如何选择","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1636454878000,"updatedTime":1698360242000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":9},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4},{"name":"guide","email":"koushuangbwcx@163.com","commits":4},{"name":"jun","email":"2395306536@qq.com","commits":1}]},"readingTime":{"minutes":19.88,"words":5964},"filePathRelative":"high-performance/message-queue/message-queue.md","localizedDate":"2021年11月9日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>这篇文章中的消息队列主要指的是分布式消息队列。</p>\\n</div>\\n<p>“RabbitMQ？”“Kafka？”“RocketMQ？”...在日常学习与开发过程中，我们常常听到消息队列这个关键词。我也在我的多篇文章中提到了这个概念。可能你是熟练使用消息队列的老手，又或者你是不懂消息队列的新手，不论你了不了解消息队列，本文都将带你搞懂消息队列的一些基本理论。</p>\\n<p>如果你是老手，你可能从本文学到你之前不曾注意的一些关于消息队列的重要概念，如果你是新手，相信本文将是你打开消息队列大门的一板砖。</p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
