import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as l,c as o,a,b as n,d as t,w as i,e as u}from"./app-qOq64fjQ.js";const d={},k={href:"https://medium.com/@AlexanderObregon/maven-best-practices-tips-and-tricks-for-java-developers-438eca03f72b",target:"_blank",rel:"noopener noreferrer"},r=u(`<p>这篇文章不会涉及到 Maven 概念的介绍，主要讨论一些最佳实践、建议和技巧，以优化我们在项目中对 Maven 的使用并改善我们的开发体验。</p><h2 id="maven-标准目录结构" tabindex="-1"><a class="header-anchor" href="#maven-标准目录结构" aria-hidden="true">#</a> Maven 标准目录结构</h2><p>Maven 遵循标准目录结构来保持项目之间的一致性。遵循这种结构可以让其他开发人员更轻松地理解我们的项目。</p><p>Maven 项目的标准目录结构如下：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>src <span class="token operator">/</span>
  main <span class="token operator">/</span>
    java<span class="token operator">/</span>
    resources<span class="token operator">/</span>
  test<span class="token operator">/</span> java
     <span class="token operator">/</span>
    resources<span class="token operator">/</span>
pom<span class="token punctuation">.</span>xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>src/main/java</code>：源代码目录</li><li><code>src/main/resources</code>：资源文件目录</li><li><code>src/test/java</code>：测试代码目录</li><li><code>src/test/resources</code>：测试资源文件目录</li></ul><p>这只是一个最简单的 Maven 项目目录示例。实际项目中，我们还会根据项目规范去做进一步的细分。</p><h2 id="指定-maven-编译器插件" tabindex="-1"><a class="header-anchor" href="#指定-maven-编译器插件" aria-hidden="true">#</a> 指定 Maven 编译器插件</h2><p>默认情况下，Maven 使用 Java5 编译我们的项目。要使用不同的 JDK 版本，请在 <code>pom.xml</code> 文件中配置 Maven 编译器插件。</p><p>例如，如果你想要使用 Java8 来编译你的项目，你可以在<code>&lt;build&gt;</code>标签下添加以下的代码片段：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>maven-compiler-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.8.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>source</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>target</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>target</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，Maven 就会使用 Java8 的编译器来编译你的项目。如果你想要使用其他版本的 JDK，你只需要修改<code>&lt;source&gt;</code>和<code>&lt;target&gt;</code>标签的值即可。例如，如果你想要使用 Java11，你可以将它们的值改为 11。</p><h2 id="有效管理依赖关系" tabindex="-1"><a class="header-anchor" href="#有效管理依赖关系" aria-hidden="true">#</a> 有效管理依赖关系</h2><p>Maven 的依赖管理系统是其最强大的功能之一。在顶层 pom 文件中，通过标签 <code>dependencyManagement</code> 定义公共的依赖关系，这有助于避免冲突并确保所有模块使用相同版本的依赖项。</p><p>例如，假设我们有一个父模块和两个子模块 A 和 B，我们想要在所有模块中使用 JUnit 5.7.2 作为测试框架。我们可以在父模块的<code>pom.xml</code>文件中使用<code>&lt;dependencyManagement&gt;</code>标签来定义 JUnit 的版本：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencyManagement</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.junit.jupiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit-jupiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.7.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencyManagement</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在子模块 A 和 B 的 <code>pom.xml</code> 文件中，我们只需要引用 JUnit 的 <code>groupId</code> 和 <code>artifactId</code> 即可:</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.junit.jupiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit-jupiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="针对不同环境使用配置文件" tabindex="-1"><a class="header-anchor" href="#针对不同环境使用配置文件" aria-hidden="true">#</a> 针对不同环境使用配置文件</h2><p>Maven 配置文件允许我们配置不同环境的构建设置，例如开发、测试和生产。在 <code>pom.xml</code> 文件中定义配置文件并使用命令行参数激活它们：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>development<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activation</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activation</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span><span class="token punctuation">&gt;</span></span>dev<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>production<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span><span class="token punctuation">&gt;</span></span>prod<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用命令行激活配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn clean <span class="token function">install</span> <span class="token parameter variable">-P</span> production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="保持-pom-xml-干净且井然有序" tabindex="-1"><a class="header-anchor" href="#保持-pom-xml-干净且井然有序" aria-hidden="true">#</a> 保持 pom.xml 干净且井然有序</h2><p>组织良好的 <code>pom.xml</code> 文件更易于维护和理解。以下是维护干净的 <code>pom.xml</code> 的一些技巧：</p><ul><li>将相似的依赖项和插件组合在一起。</li><li>使用注释来描述特定依赖项或插件的用途。</li><li>将插件和依赖项的版本号保留在 <code>&lt;properties&gt;</code> 标签内以便于管理。</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>junit.version</span><span class="token punctuation">&gt;</span></span>5.7.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>junit.version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mockito.version</span><span class="token punctuation">&gt;</span></span>3.9.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mockito.version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-maven-wrapper" tabindex="-1"><a class="header-anchor" href="#使用-maven-wrapper" aria-hidden="true">#</a> 使用 Maven Wrapper</h2><p>Maven Wrapper 是一个用于管理和使用 Maven 的工具，它允许在没有预先安装 Maven 的情况下运行和构建 Maven 项目。</p><p>Maven 官方文档是这样介绍 Maven Wrapper 的：</p><blockquote><p>The Maven Wrapper is an easy way to ensure a user of your Maven build has everything necessary to run your Maven build.</p><p>Maven Wrapper 是一种简单的方法，可以确保 Maven 构建的用户拥有运行 Maven 构建所需的一切。</p></blockquote><p>Maven Wrapper 可以确保构建过程使用正确的 Maven 版本，非常方便。要使用 Maven Wrapper，请在项目目录中运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn wrapper:wrapper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此命令会在我们的项目中生成 Maven Wrapper 文件。现在我们可以使用 <code>./mvnw</code> （或 Windows 上的 <code>./mvnw.cmd</code>）而不是 <code>mvn</code> 来执行 Maven 命令。</p><h2 id="通过持续集成实现构建自动化" tabindex="-1"><a class="header-anchor" href="#通过持续集成实现构建自动化" aria-hidden="true">#</a> 通过持续集成实现构建自动化</h2><p>将 Maven 项目与持续集成 (CI) 系统（例如 Jenkins 或 GitHub Actions）集成，可确保自动构建、测试和部署我们的代码。CI 有助于及早发现问题并在整个团队中提供一致的构建流程。以下是 Maven 项目的简单 GitHub Actions 工作流程示例：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>name<span class="token punctuation">:</span> Java CI with Maven

on<span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span>

jobs<span class="token punctuation">:</span>
  build<span class="token punctuation">:</span>
    runs<span class="token operator">-</span>on<span class="token punctuation">:</span> ubuntu<span class="token operator">-</span>latest

    steps<span class="token punctuation">:</span>
    <span class="token operator">-</span> name<span class="token punctuation">:</span> Checkout code
      uses<span class="token punctuation">:</span> actions<span class="token operator">/</span>checkout<span class="token annotation punctuation">@v2</span>

    <span class="token operator">-</span> name<span class="token punctuation">:</span> Set up JDK <span class="token number">11</span>
      uses<span class="token punctuation">:</span> actions<span class="token operator">/</span>setup<span class="token operator">-</span>java<span class="token annotation punctuation">@v2</span>
      with<span class="token punctuation">:</span>
        java<span class="token operator">-</span>version<span class="token punctuation">:</span> <span class="token string">&#39;11&#39;</span>
        distribution<span class="token punctuation">:</span> <span class="token string">&#39;adopt&#39;</span>

    <span class="token operator">-</span> name<span class="token punctuation">:</span> Build with Maven
      run<span class="token punctuation">:</span> <span class="token punctuation">.</span>/mvnw clean install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="利用-maven-插件获得附加功能" tabindex="-1"><a class="header-anchor" href="#利用-maven-插件获得附加功能" aria-hidden="true">#</a> 利用 Maven 插件获得附加功能</h2><p>有许多 Maven 插件可用于扩展 Maven 的功能。一些流行的插件包括（前三个是 Maven 自带的插件，后三个是第三方提供的插件）：</p><ul><li>maven-surefire-plugin：配置并执行单元测试。</li><li>maven-failsafe-plugin：配置并执行集成测试。</li><li>maven-javadoc-plugin：生成 Javadoc 格式的项目文档。</li><li>maven-checkstyle-plugin：强制执行编码标准和最佳实践。</li><li>jacoco-maven-plugin: 单测覆盖率。</li><li>sonar-maven-plugin：分析代码质量。</li><li>……</li></ul><p>jacoco-maven-plugin 使用示例：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.jacoco<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jacoco-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.8.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>prepare-agent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>generate-code-coverage-report<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>report<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这些已有的插件无法满足我们的需求，我们还可以自定义插件。</p><p>探索可用的插件并在 <code>pom.xml</code> 文件中配置它们以增强我们的开发过程。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>Maven 是一个强大的工具，可以简化 Java 项目的构建过程和依赖关系管理。通过遵循这些最佳实践和技巧，我们可以优化 Maven 的使用并改善我们的 Java 开发体验。请记住使用标准目录结构，有效管理依赖关系，利用不同环境的配置文件，并将项目与持续集成系统集成，以确保构建一致。</p>`,46);function g(v,m){const p=s("ExternalLinkIcon"),e=s("RouterLink");return l(),o("div",null,[a("blockquote",null,[a("p",null,[n("本文由 JavaGuide 翻译并完善，原文地址："),a("a",k,[n("https://medium.com/@AlexanderObregon/maven-best-practices-tips-and-tricks-for-java-developers-438eca03f72b"),t(p)]),n(" 。")])]),a("p",null,[n("Maven 是一种广泛使用的 Java 项目构建自动化工具。它简化了构建过程并帮助管理依赖关系，使开发人员的工作更轻松。Maven 详细介绍可以参考我写的这篇 "),t(e,{to:"/tools/maven/maven-core-concepts.html"},{default:i(()=>[n("Maven 核心概念总结")]),_:1}),n(" 。")]),r])}const x=c(d,[["render",g],["__file","maven-best-practices.html.vue"]]);export{x as default};
