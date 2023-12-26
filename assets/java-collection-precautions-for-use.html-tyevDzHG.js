const e=JSON.parse('{"key":"v-6d300bb9","path":"/java/collection/java-collection-precautions-for-use.html","title":"Java集合使用注意事项总结","lang":"zh-CN","frontmatter":{"title":"Java集合使用注意事项总结","category":"Java","tag":["Java集合"],"description":"这篇文章我根据《阿里巴巴 Java 开发手册》总结了关于集合使用常见的注意事项以及其具体原理。 强烈建议小伙伴们多多阅读几遍，避免自己写代码的时候出现这些低级的问题。 集合判空 《阿里巴巴 Java 开发手册》的描述如下： 判断所有集合内部的元素是否为空，使用 isEmpty() 方法，而不是 size()==0 的方式。 这是因为 isEmpty() 方法的可读性更好，并且时间复杂度为 O(1)。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/collection/java-collection-precautions-for-use.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Java集合使用注意事项总结"}],["meta",{"property":"og:description","content":"这篇文章我根据《阿里巴巴 Java 开发手册》总结了关于集合使用常见的注意事项以及其具体原理。 强烈建议小伙伴们多多阅读几遍，避免自己写代码的时候出现这些低级的问题。 集合判空 《阿里巴巴 Java 开发手册》的描述如下： 判断所有集合内部的元素是否为空，使用 isEmpty() 方法，而不是 size()==0 的方式。 这是因为 isEmpty() 方法的可读性更好，并且时间复杂度为 O(1)。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-26T22:44:02.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Java集合"}],["meta",{"property":"article:modified_time","content":"2023-10-26T22:44:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java集合使用注意事项总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-26T22:44:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"集合判空","slug":"集合判空","link":"#集合判空","children":[]},{"level":2,"title":"集合转 Map","slug":"集合转-map","link":"#集合转-map","children":[]},{"level":2,"title":"集合遍历","slug":"集合遍历","link":"#集合遍历","children":[]},{"level":2,"title":"集合去重","slug":"集合去重","link":"#集合去重","children":[]},{"level":2,"title":"集合转数组","slug":"集合转数组","link":"#集合转数组","children":[]},{"level":2,"title":"数组转集合","slug":"数组转集合","link":"#数组转集合","children":[]}],"git":{"createdTime":1646270096000,"updatedTime":1698360242000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4},{"name":"guide","email":"koushuangbwcx@163.com","commits":2},{"name":"liangshuai","email":"44797618+tonels@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.14,"words":2441},"filePathRelative":"java/collection/java-collection-precautions-for-use.md","localizedDate":"2022年3月3日","excerpt":"<p>这篇文章我根据《阿里巴巴 Java 开发手册》总结了关于集合使用常见的注意事项以及其具体原理。</p>\\n<p>强烈建议小伙伴们多多阅读几遍，避免自己写代码的时候出现这些低级的问题。</p>\\n<h2> 集合判空</h2>\\n<p>《阿里巴巴 Java 开发手册》的描述如下：</p>\\n<blockquote>\\n<p><strong>判断所有集合内部的元素是否为空，使用 <code>isEmpty()</code> 方法，而不是 <code>size()==0</code> 的方式。</strong></p>\\n</blockquote>\\n<p>这是因为 <code>isEmpty()</code> 方法的可读性更好，并且时间复杂度为 O(1)。</p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
