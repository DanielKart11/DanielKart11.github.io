const e=JSON.parse('{"key":"v-77ccd7f2","path":"/java/concurrent/java-concurrent-questions-03.html","title":"Java并发常见面试题总结（下）","lang":"zh-CN","frontmatter":{"title":"Java并发常见面试题总结（下）","category":"Java","tag":["Java并发"],"head":[["meta",{"name":"keywords","content":"多线程,死锁,线程池,CAS,AQS"}],["meta",{"name":"description","content":"Java并发常见知识点和面试题总结（含详细解答），希望对你有帮助！"}],["meta",{"property":"og:url","content":"https://javaguide.cn/java/concurrent/java-concurrent-questions-03.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Java并发常见面试题总结（下）"}],["meta",{"property":"og:description","content":"JavaGuide官方知识星球 ThreadLocal ThreadLocal 有什么用？ 通常情况下，我们创建的变量是可以被任何一个线程访问并修改的。如果想实现每一个线程都有自己的专属本地变量该如何解决呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-15T12:01:30.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Java并发"}],["meta",{"property":"article:modified_time","content":"2023-10-15T12:01:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java并发常见面试题总结（下）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-15T12:01:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]],"description":"JavaGuide官方知识星球 ThreadLocal ThreadLocal 有什么用？ 通常情况下，我们创建的变量是可以被任何一个线程访问并修改的。如果想实现每一个线程都有自己的专属本地变量该如何解决呢？"},"headers":[{"level":2,"title":"ThreadLocal","slug":"threadlocal","link":"#threadlocal","children":[{"level":3,"title":"ThreadLocal 有什么用？","slug":"threadlocal-有什么用","link":"#threadlocal-有什么用","children":[]},{"level":3,"title":"如何使用 ThreadLocal？","slug":"如何使用-threadlocal","link":"#如何使用-threadlocal","children":[]},{"level":3,"title":"ThreadLocal 原理了解吗？","slug":"threadlocal-原理了解吗","link":"#threadlocal-原理了解吗","children":[]},{"level":3,"title":"ThreadLocal 内存泄露问题是怎么导致的？","slug":"threadlocal-内存泄露问题是怎么导致的","link":"#threadlocal-内存泄露问题是怎么导致的","children":[]}]},{"level":2,"title":"线程池","slug":"线程池","link":"#线程池","children":[{"level":3,"title":"什么是线程池?","slug":"什么是线程池","link":"#什么是线程池","children":[]},{"level":3,"title":"为什么要用线程池？","slug":"为什么要用线程池","link":"#为什么要用线程池","children":[]},{"level":3,"title":"如何创建线程池？","slug":"如何创建线程池","link":"#如何创建线程池","children":[]},{"level":3,"title":"为什么不推荐使用内置线程池？","slug":"为什么不推荐使用内置线程池","link":"#为什么不推荐使用内置线程池","children":[]},{"level":3,"title":"线程池常见参数有哪些？如何解释？","slug":"线程池常见参数有哪些-如何解释","link":"#线程池常见参数有哪些-如何解释","children":[]},{"level":3,"title":"线程池的饱和策略有哪些？","slug":"线程池的饱和策略有哪些","link":"#线程池的饱和策略有哪些","children":[]},{"level":3,"title":"线程池常用的阻塞队列有哪些？","slug":"线程池常用的阻塞队列有哪些","link":"#线程池常用的阻塞队列有哪些","children":[]},{"level":3,"title":"线程池处理任务的流程了解吗？","slug":"线程池处理任务的流程了解吗","link":"#线程池处理任务的流程了解吗","children":[]},{"level":3,"title":"如何给线程池命名？","slug":"如何给线程池命名","link":"#如何给线程池命名","children":[]},{"level":3,"title":"如何设定线程池的大小？","slug":"如何设定线程池的大小","link":"#如何设定线程池的大小","children":[]},{"level":3,"title":"如何动态修改线程池的参数？","slug":"如何动态修改线程池的参数","link":"#如何动态修改线程池的参数","children":[]},{"level":3,"title":"如何设计一个能够根据任务的优先级来执行的线程池？","slug":"如何设计一个能够根据任务的优先级来执行的线程池","link":"#如何设计一个能够根据任务的优先级来执行的线程池","children":[]}]},{"level":2,"title":"Future","slug":"future","link":"#future","children":[{"level":3,"title":"Future 类有什么用？","slug":"future-类有什么用","link":"#future-类有什么用","children":[]},{"level":3,"title":"Callable 和 Future 有什么关系？","slug":"callable-和-future-有什么关系","link":"#callable-和-future-有什么关系","children":[]},{"level":3,"title":"CompletableFuture 类有什么用？","slug":"completablefuture-类有什么用","link":"#completablefuture-类有什么用","children":[]}]},{"level":2,"title":"AQS","slug":"aqs","link":"#aqs","children":[{"level":3,"title":"AQS 是什么？","slug":"aqs-是什么","link":"#aqs-是什么","children":[]},{"level":3,"title":"AQS 的原理是什么？","slug":"aqs-的原理是什么","link":"#aqs-的原理是什么","children":[]},{"level":3,"title":"Semaphore 有什么用？","slug":"semaphore-有什么用","link":"#semaphore-有什么用","children":[]},{"level":3,"title":"Semaphore 的原理是什么？","slug":"semaphore-的原理是什么","link":"#semaphore-的原理是什么","children":[]},{"level":3,"title":"CountDownLatch 有什么用？","slug":"countdownlatch-有什么用","link":"#countdownlatch-有什么用","children":[]},{"level":3,"title":"CountDownLatch 的原理是什么？","slug":"countdownlatch-的原理是什么","link":"#countdownlatch-的原理是什么","children":[]},{"level":3,"title":"用过 CountDownLatch 么？什么场景下用的？","slug":"用过-countdownlatch-么-什么场景下用的","link":"#用过-countdownlatch-么-什么场景下用的","children":[]},{"level":3,"title":"CyclicBarrier 有什么用？","slug":"cyclicbarrier-有什么用","link":"#cyclicbarrier-有什么用","children":[]},{"level":3,"title":"CyclicBarrier 的原理是什么？","slug":"cyclicbarrier-的原理是什么","link":"#cyclicbarrier-的原理是什么","children":[]}]},{"level":2,"title":"虚拟线程","slug":"虚拟线程","link":"#虚拟线程","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1659178686000,"updatedTime":1697371290000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":19},{"name":"guide","email":"koushuangbwcx@163.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"jun","email":"2395306536@qq.com","commits":2},{"name":"paigeman","email":"53284808+paigeman@users.noreply.github.com","commits":2},{"name":"Nicolas","email":"nicolaslee5@foxmail.com","commits":1},{"name":"OSrange","email":"2462206872@qq.com","commits":1},{"name":"Raxcl","email":"70327089+Raxcl@users.noreply.github.com","commits":1},{"name":"shikaibin","email":"957923132@qq.com","commits":1},{"name":"viosay","email":"windclear123@gmail.com","commits":1}]},"readingTime":{"minutes":40.63,"words":12189},"filePathRelative":"java/concurrent/java-concurrent-questions-03.md","localizedDate":"2022年7月30日","excerpt":"<figure><a href=\\"/about-the-author/zhishixingqiu-two-years.html\\" target=\\"blank\\"><img src=\\"https://oss.javaguide.cn/xingqiu/xingqiu.png\\" alt=\\"JavaGuide官方知识星球\\" tabindex=\\"0\\"></a><figcaption>JavaGuide官方知识星球</figcaption></figure>\\n<h2> ThreadLocal</h2>\\n<h3> ThreadLocal 有什么用？</h3>\\n<p>通常情况下，我们创建的变量是可以被任何一个线程访问并修改的。<strong>如果想实现每一个线程都有自己的专属本地变量该如何解决呢？</strong></p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
