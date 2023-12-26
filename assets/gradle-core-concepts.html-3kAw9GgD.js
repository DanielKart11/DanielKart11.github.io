const e=JSON.parse('{"key":"v-3546186b","path":"/tools/gradle/gradle-core-concepts.html","title":"Gradle核心概念总结","lang":"zh-CN","frontmatter":{"title":"Gradle核心概念总结","category":"开发工具","head":[["meta",{"name":"keywords","content":"Gradle,Groovy,Gradle Wrapper,Gradle 包装器,Gradle 插件"}],["meta",{"name":"description","content":"Gradle 就是一个运行在 JVM 上的自动化的项目构建工具，用来帮助我们自动构建项目。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/tools/gradle/gradle-core-concepts.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Gradle核心概念总结"}],["meta",{"property":"og:description","content":"这部分内容主要根据 Gradle 官方文档整理，做了对应的删减，主要保留比较重要的部分，不涉及实战，主要是一些重要概念的介绍。 Gradle 这部分内容属于可选内容，可以根据自身需求决定是否学习，目前国内还是使用 Maven 普遍一些。 Gradle 介绍 Gradle 官方文档是这样介绍的 Gradle 的： Gradle is an open-source build automation tool flexible enough to build almost any type of software. Gradle makes few assumptions about what you’re trying to build or how to build it. This makes Gradle particularly flexible. Gradle 是一个开源的构建自动化工具，它足够灵活，可以构建几乎任何类型的软件。Gradle 对你要构建什么或者如何构建它做了很少的假设。这使得 Gradle 特别灵活。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-26T22:44:02.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2023-10-26T22:44:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gradle核心概念总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-26T22:44:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]],"description":"这部分内容主要根据 Gradle 官方文档整理，做了对应的删减，主要保留比较重要的部分，不涉及实战，主要是一些重要概念的介绍。 Gradle 这部分内容属于可选内容，可以根据自身需求决定是否学习，目前国内还是使用 Maven 普遍一些。 Gradle 介绍 Gradle 官方文档是这样介绍的 Gradle 的： Gradle is an open-source build automation tool flexible enough to build almost any type of software. Gradle makes few assumptions about what you’re trying to build or how to build it. This makes Gradle particularly flexible. Gradle 是一个开源的构建自动化工具，它足够灵活，可以构建几乎任何类型的软件。Gradle 对你要构建什么或者如何构建它做了很少的假设。这使得 Gradle 特别灵活。"},"headers":[{"level":2,"title":"Gradle 介绍","slug":"gradle-介绍","link":"#gradle-介绍","children":[]},{"level":2,"title":"Groovy 介绍","slug":"groovy-介绍","link":"#groovy-介绍","children":[]},{"level":2,"title":"Gradle 优势","slug":"gradle-优势","link":"#gradle-优势","children":[]},{"level":2,"title":"Gradle Wrapper 介绍","slug":"gradle-wrapper-介绍","link":"#gradle-wrapper-介绍","children":[{"level":3,"title":"生成 Gradle Wrapper","slug":"生成-gradle-wrapper","link":"#生成-gradle-wrapper","children":[]},{"level":3,"title":"更新 Gradle Wrapper","slug":"更新-gradle-wrapper","link":"#更新-gradle-wrapper","children":[]},{"level":3,"title":"自定义 Gradle Wrapper","slug":"自定义-gradle-wrapper","link":"#自定义-gradle-wrapper","children":[]}]},{"level":2,"title":"Gradle 任务","slug":"gradle-任务","link":"#gradle-任务","children":[]},{"level":2,"title":"Gradle 插件","slug":"gradle-插件","link":"#gradle-插件","children":[]},{"level":2,"title":"Gradle 构建生命周期","slug":"gradle-构建生命周期","link":"#gradle-构建生命周期","children":[{"level":3,"title":"初始化阶段","slug":"初始化阶段","link":"#初始化阶段","children":[]},{"level":3,"title":"配置阶段","slug":"配置阶段","link":"#配置阶段","children":[]},{"level":3,"title":"运行阶段","slug":"运行阶段","link":"#运行阶段","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1675334602000,"updatedTime":1698360242000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":6},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":5}]},"readingTime":{"minutes":10.47,"words":3142},"filePathRelative":"tools/gradle/gradle-core-concepts.md","localizedDate":"2023年2月2日","excerpt":"<blockquote>\\n<p>这部分内容主要根据 Gradle 官方文档整理，做了对应的删减，主要保留比较重要的部分，不涉及实战，主要是一些重要概念的介绍。</p>\\n</blockquote>\\n<p>Gradle 这部分内容属于可选内容，可以根据自身需求决定是否学习，目前国内还是使用 Maven 普遍一些。</p>\\n<h2> Gradle 介绍</h2>\\n<p>Gradle 官方文档是这样介绍的 Gradle 的：</p>\\n<blockquote>\\n<p>Gradle is an open-source <a href=\\"https://en.wikipedia.org/wiki/Build_automation\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">build automation</a> tool flexible enough to build almost any type of software. Gradle makes few assumptions about what you’re trying to build or how to build it. This makes Gradle particularly flexible.</p>\\n<p>Gradle 是一个开源的构建自动化工具，它足够灵活，可以构建几乎任何类型的软件。Gradle 对你要构建什么或者如何构建它做了很少的假设。这使得 Gradle 特别灵活。</p>\\n</blockquote>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
