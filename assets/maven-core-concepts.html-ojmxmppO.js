const e=JSON.parse(`{"key":"v-df91889a","path":"/tools/maven/maven-core-concepts.html","title":"Maven核心概念总结","lang":"zh-CN","frontmatter":{"title":"Maven核心概念总结","category":"开发工具","head":[["meta",{"name":"keywords","content":"Maven坐标,Maven仓库,Maven生命周期,Maven多模块管理"}],["meta",{"name":"description","content":"Apache Maven 的本质是一个软件项目管理和理解工具。基于项目对象模型 (Project Object Model，POM) 的概念，Maven 可以从一条中心信息管理项目的构建、报告和文档。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/tools/maven/maven-core-concepts.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Maven核心概念总结"}],["meta",{"property":"og:description","content":"这部分内容主要根据 Maven 官方文档整理，做了对应的删减，主要保留比较重要的部分，不涉及实战，主要是一些重要概念的介绍。 Maven 介绍 Maven 官方文档是这样介绍的 Maven 的： Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information. Apache Maven 的本质是一个软件项目管理和理解工具。基于项目对象模型 (Project Object Model，POM) 的概念，Maven 可以从一条中心信息管理项目的构建、报告和文档。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-26T22:44:02.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2023-10-26T22:44:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maven核心概念总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-26T22:44:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]],"description":"这部分内容主要根据 Maven 官方文档整理，做了对应的删减，主要保留比较重要的部分，不涉及实战，主要是一些重要概念的介绍。 Maven 介绍 Maven 官方文档是这样介绍的 Maven 的： Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information. Apache Maven 的本质是一个软件项目管理和理解工具。基于项目对象模型 (Project Object Model，POM) 的概念，Maven 可以从一条中心信息管理项目的构建、报告和文档。"},"headers":[{"level":2,"title":"Maven 介绍","slug":"maven-介绍","link":"#maven-介绍","children":[]},{"level":2,"title":"Maven 坐标","slug":"maven-坐标","link":"#maven-坐标","children":[]},{"level":2,"title":"Maven 依赖","slug":"maven-依赖","link":"#maven-依赖","children":[{"level":3,"title":"依赖配置","slug":"依赖配置","link":"#依赖配置","children":[]},{"level":3,"title":"依赖范围","slug":"依赖范围","link":"#依赖范围","children":[]},{"level":3,"title":"传递依赖性","slug":"传递依赖性","link":"#传递依赖性","children":[]},{"level":3,"title":"依赖冲突","slug":"依赖冲突","link":"#依赖冲突","children":[]},{"level":3,"title":"排除依赖","slug":"排除依赖","link":"#排除依赖","children":[]}]},{"level":2,"title":"Maven 仓库","slug":"maven-仓库","link":"#maven-仓库","children":[]},{"level":2,"title":"Maven 生命周期","slug":"maven-生命周期","link":"#maven-生命周期","children":[{"level":3,"title":"default 生命周期","slug":"default-生命周期","link":"#default-生命周期","children":[]},{"level":3,"title":"clean 生命周期","slug":"clean-生命周期","link":"#clean-生命周期","children":[]},{"level":3,"title":"site 生命周期","slug":"site-生命周期","link":"#site-生命周期","children":[]}]},{"level":2,"title":"Maven 插件","slug":"maven-插件","link":"#maven-插件","children":[]},{"level":2,"title":"Maven 多模块管理","slug":"maven-多模块管理","link":"#maven-多模块管理","children":[]},{"level":2,"title":"文章推荐","slug":"文章推荐","link":"#文章推荐","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1671201148000,"updatedTime":1698360242000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":7},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":5},{"name":"Edwin.Wu","email":"edwin.wu05@gmail.com","commits":2},{"name":"guide","email":"koushuangbwcx@163.com","commits":2},{"name":"Erzbir","email":"2978086497@qq.com","commits":1},{"name":"mojospy","email":"76961348+coolapker@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":16.64,"words":4993},"filePathRelative":"tools/maven/maven-core-concepts.md","localizedDate":"2022年12月16日","excerpt":"<blockquote>\\n<p>这部分内容主要根据 Maven 官方文档整理，做了对应的删减，主要保留比较重要的部分，不涉及实战，主要是一些重要概念的介绍。</p>\\n</blockquote>\\n<h2> Maven 介绍</h2>\\n<p><a href=\\"https://github.com/apache/maven\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Maven</a> 官方文档是这样介绍的 Maven 的：</p>\\n<blockquote>\\n<p>Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information.</p>\\n<p>Apache Maven 的本质是一个软件项目管理和理解工具。基于项目对象模型 (Project Object Model，POM) 的概念，Maven 可以从一条中心信息管理项目的构建、报告和文档。</p>\\n</blockquote>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}`);export{e as data};
