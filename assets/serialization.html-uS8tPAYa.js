import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as i,a as n,b as s,d as e,e as t}from"./app-qOq64fjQ.js";const l={},r=t(`<h2 id="什么是序列化和反序列化" tabindex="-1"><a class="header-anchor" href="#什么是序列化和反序列化" aria-hidden="true">#</a> 什么是序列化和反序列化?</h2><p>如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。</p><p>简单来说：</p><ul><li><strong>序列化</strong>：将数据结构或对象转换成二进制字节流的过程</li><li><strong>反序列化</strong>：将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程</li></ul><p>对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。</p><p>下面是序列化和反序列化常见应用场景：</p><ul><li>对象在进行网络传输（比如远程方法调用 RPC 的时候）之前需要先被序列化，接收到序列化的对象之后需要再进行反序列化；</li><li>将对象存储到文件之前需要进行序列化，将对象从文件中读取出来需要进行反序列化；</li><li>将对象存储到数据库（如 Redis）之前需要用到序列化，将对象从缓存数据库中读取出来需要反序列化；</li><li>将对象存储到内存之前需要进行序列化，从内存中读取出来之后需要进行反序列化。</li></ul><p>维基百科是如是介绍序列化的：</p><blockquote><p><strong>序列化</strong>（serialization）在计算机科学的数据处理中，是指将数据结构或对象状态转换成可取用格式（例如存成文件，存于缓冲，或经由网络中发送），以留待后续在相同或另一台计算机环境中，能恢复原先状态的过程。依照序列化格式重新获取字节的结果时，可以利用它来产生与原始对象相同语义的副本。对于许多对象，像是使用大量引用的复杂对象，这种序列化重建的过程并不容易。面向对象中的对象序列化，并不概括之前原始对象所关系的函数。这种过程也称为对象编组（marshalling）。从一系列字节提取数据结构的反向操作，是反序列化（也称为解编组、deserialization、unmarshalling）。</p></blockquote><p>综上：<strong>序列化的主要目的是通过网络传输对象或者说是将对象存储到文件系统、数据库、内存中。</strong></p><figure><img src="https://oss.javaguide.cn/github/javaguide/a478c74d-2c48-40ae-9374-87aacf05188c.png" alt="" tabindex="0"><figcaption></figcaption></figure><p style="text-align:right;font-size:13px;color:gray;">https://www.corejavaguru.com/java/serialization/interview-questions-1</p><p><strong>序列化协议对应于 TCP/IP 4 层模型的哪一层？</strong></p><p>我们知道网络通信的双方必须要采用和遵守相同的协议。TCP/IP 四层模型是下面这样的，序列化协议属于哪一层呢？</p><ol><li>应用层</li><li>传输层</li><li>网络层</li><li>网络接口层</li></ol><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/tcp-ip-4-model.png" alt="TCP/IP 四层模型" tabindex="0"><figcaption>TCP/IP 四层模型</figcaption></figure><p>如上图所示，OSI 七层协议模型中，表示层做的事情主要就是对应用层的用户数据进行处理转换为二进制流。反过来的话，就是将二进制流转换成应用层的用户数据。这不就对应的是序列化和反序列化么？</p><p>因为，OSI 七层协议模型中的应用层、表示层和会话层对应的都是 TCP/IP 四层模型中的应用层，所以序列化协议属于 TCP/IP 协议应用层的一部分。</p><h2 id="常见序列化协议有哪些" tabindex="-1"><a class="header-anchor" href="#常见序列化协议有哪些" aria-hidden="true">#</a> 常见序列化协议有哪些？</h2><p>JDK 自带的序列化方式一般不会用 ，因为序列化效率低并且存在安全问题。比较常用的序列化协议有 Hessian、Kryo、Protobuf、ProtoStuff，这些都是基于二进制的序列化协议。</p><p>像 JSON 和 XML 这种属于文本类序列化方式。虽然可读性比较好，但是性能较差，一般不会选择。</p><h3 id="jdk-自带的序列化方式" tabindex="-1"><a class="header-anchor" href="#jdk-自带的序列化方式" aria-hidden="true">#</a> JDK 自带的序列化方式</h3><p>JDK 自带的序列化，只需实现 <code>java.io.Serializable</code>接口即可。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@Builder</span>
<span class="token annotation punctuation">@ToString</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RpcRequest</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1905122041950251207L</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> requestId<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> interfaceName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> methodName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> parameters<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> paramTypes<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">RpcMessageTypeEnum</span> rpcMessageTypeEnum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>serialVersionUID 有什么作用？</strong></p><p>序列化号 <code>serialVersionUID</code> 属于版本控制的作用。反序列化时，会检查 <code>serialVersionUID</code> 是否和当前类的 <code>serialVersionUID</code> 一致。如果 <code>serialVersionUID</code> 不一致则会抛出 <code>InvalidClassException</code> 异常。强烈推荐每个序列化类都手动指定其 <code>serialVersionUID</code>，如果不手动指定，那么编译器会动态生成默认的 <code>serialVersionUID</code>。</p><p><strong>serialVersionUID 不是被 static 变量修饰了吗？为什么还会被“序列化”？</strong></p><p><s><code>static</code> 修饰的变量是静态变量，位于方法区，本身是不会被序列化的。 <code>static</code> 变量是属于类的而不是对象。你反序列之后，<code>static</code> 变量的值就像是默认赋予给了对象一样，看着就像是 <code>static</code> 变量被序列化，实际只是假象罢了。</s></p>`,28),u={href:"https://github.com/Snailclimb/JavaGuide/issues/2174",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"static",-1),k=n("code",null,"serialVersionUID",-1),v=n("code",null,"serialVersionUID",-1),m=t("<p>官方说明如下：</p><blockquote><p>A serializable class can declare its own serialVersionUID explicitly by declaring a field named <code>&quot;serialVersionUID&quot;</code> that must be <code>static</code>, <code>final</code>, and of type <code>long</code>;</p><p>如果想显式指定 <code>serialVersionUID</code> ，则需要在类中使用 <code>static</code> 和 <code>final</code> 关键字来修饰一个 <code>long</code> 类型的变量，变量名字必须为 <code>&quot;serialVersionUID&quot;</code> 。</p></blockquote><p>也就是说，<code>serialVersionUID</code> 只是用来被 JVM 识别，实际并没有被序列化。</p><p><strong>如果有些字段不想进行序列化怎么办？</strong></p><p>对于不想进行序列化的变量，可以使用 <code>transient</code> 关键字修饰。</p><p><code>transient</code> 关键字的作用是：阻止实例中那些用此关键字修饰的的变量序列化；当对象被反序列化时，被 <code>transient</code> 修饰的变量值不会被持久化和恢复。</p><p>关于 <code>transient</code> 还有几点注意：</p><ul><li><code>transient</code> 只能修饰变量，不能修饰类和方法。</li><li><code>transient</code> 修饰的变量，在反序列化后变量值将会被置成类型的默认值。例如，如果是修饰 <code>int</code> 类型，那么反序列后结果就是 <code>0</code>。</li><li><code>static</code> 变量因为不属于任何对象(Object)，所以无论有没有 <code>transient</code> 关键字修饰，均不会被序列化。</li></ul><p><strong>为什么不推荐使用 JDK 自带的序列化？</strong></p><p>我们很少或者说几乎不会直接使用 JDK 自带的序列化方式，主要原因有下面这些原因：</p>",10),b=n("li",null,[n("strong",null,"不支持跨语言调用"),s(" : 如果调用的是其他语言开发的服务的时候就不支持了。")],-1),h=n("li",null,[n("strong",null,"性能差"),s("：相比于其他序列化框架性能更低，主要原因是序列化之后的字节数组体积较大，导致传输成本加大。")],-1),g=n("strong",null,"存在安全问题",-1),f={href:"https://cryin.github.io/blog/secure-development-java-deserialization-vulnerability/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.zhihu.com/question/37562657/answer/1916596031",target:"_blank",rel:"noopener noreferrer"},_=n("h3",{id:"kryo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kryo","aria-hidden":"true"},"#"),s(" Kryo")],-1),w=n("p",null,"Kryo 是一个高性能的序列化/反序列化工具，由于其变长存储特性并使用了字节码生成机制，拥有较高的运行速度和较小的字节码体积。",-1),I=n("p",null,"另外，Kryo 已经是一种非常成熟的序列化实现了，已经在 Twitter、Groupon、Yahoo 以及多个著名开源项目（如 Hive、Storm）中广泛的使用。",-1),j={href:"https://github.com/Snailclimb/guide-rpc-framework",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Kryo serialization class, Kryo serialization efficiency is very high, but only compatible with Java language
 *
 * <span class="token keyword">@author</span> shuang.kou
 * <span class="token keyword">@createTime</span> 2020年05月13日 19:29:00
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KryoSerializer</span> <span class="token keyword">implements</span> <span class="token class-name">Serializer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * Because Kryo is not thread safe. So, use ThreadLocal to store Kryo objects
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Kryo</span><span class="token punctuation">&gt;</span></span> kryoThreadLocal <span class="token operator">=</span> <span class="token class-name">ThreadLocal</span><span class="token punctuation">.</span><span class="token function">withInitial</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token class-name">Kryo</span> kryo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Kryo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kryo<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">RpcResponse</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kryo<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">RpcRequest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> kryo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ByteArrayOutputStream</span> byteArrayOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token class-name">Output</span> output <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Output</span><span class="token punctuation">(</span>byteArrayOutputStream<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Kryo</span> kryo <span class="token operator">=</span> kryoThreadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// Object-&gt;byte:将对象序列化为byte数组</span>
            kryo<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>output<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            kryoThreadLocal<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> output<span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SerializeException</span><span class="token punctuation">(</span><span class="token string">&quot;Serialization failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ByteArrayInputStream</span> byteArrayInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token class-name">Input</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Input</span><span class="token punctuation">(</span>byteArrayInputStream<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Kryo</span> kryo <span class="token operator">=</span> kryoThreadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// byte-&gt;Object:从byte数组中反序列化出对象</span>
            <span class="token class-name">Object</span> o <span class="token operator">=</span> kryo<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
            kryoThreadLocal<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> clazz<span class="token punctuation">.</span><span class="token function">cast</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SerializeException</span><span class="token punctuation">(</span><span class="token string">&quot;Deserialization failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x={href:"https://github.com/EsotericSoftware/kryo",target:"_blank",rel:"noopener noreferrer"},z=t(`<h3 id="protobuf" tabindex="-1"><a class="header-anchor" href="#protobuf" aria-hidden="true">#</a> Protobuf</h3><p>Protobuf 出自于 Google，性能还比较优秀，也支持多种语言，同时还是跨平台的。就是在使用中过于繁琐，因为你需要自己定义 IDL 文件和生成对应的序列化代码。这样虽然不灵活，但是，另一方面导致 protobuf 没有序列化漏洞的风险。</p><blockquote><p>Protobuf 包含序列化格式的定义、各种语言的库以及一个 IDL 编译器。正常情况下你需要定义 proto 文件，然后使用 IDL 编译器编译成你需要的语言</p></blockquote><p>一个简单的 proto 文件如下：</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token comment">// protobuf的版本</span>
<span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// SearchRequest会被编译成不同的编程语言的相应对象，比如Java中的class、Go中的struct</span>
<span class="token keyword">message</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">//string类型字段</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token comment">// int 类型字段</span>
  <span class="token builtin">int32</span> age <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),D={href:"https://github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"},P=n("h3",{id:"protostuff",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#protostuff","aria-hidden":"true"},"#"),s(" ProtoStuff")],-1),T=n("p",null,"由于 Protobuf 的易用性，它的哥哥 Protostuff 诞生了。",-1),q=n("p",null,"protostuff 基于 Google protobuf，但是提供了更多的功能和更简易的用法。虽然更加易用，但是不代表 ProtoStuff 性能更差。",-1),V={href:"https://github.com/protostuff/protostuff",target:"_blank",rel:"noopener noreferrer"},K=t('<h3 id="hessian" tabindex="-1"><a class="header-anchor" href="#hessian" aria-hidden="true">#</a> Hessian</h3><p>Hessian 是一个轻量级的，自定义描述的二进制 RPC 协议。Hessian 是一个比较老的序列化实现了，并且同样也是跨语言的。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/8613ec4c-bde5-47bf-897e-99e0f90b9fa3.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>Dubbo2.x 默认启用的序列化方式是 Hessian2 ,但是，Dubbo 对 Hessian2 进行了修改，不过大体结构还是差不多。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>',5),J={href:"https://cn.dubbo.apache.org/zh-cn/docsv2.7/user/serialization/",target:"_blank",rel:"noopener noreferrer"},O=n("figure",null,[n("img",{src:"https://oss.javaguide.cn/github/javaguide/java/569e541a-22b2-4846-aa07-0ad479f07440-20230814090158124.png",alt:"",tabindex:"0"}),n("figcaption")],-1),C=n("p",null,"像 Protobuf、 ProtoStuff、hessian 这类都是跨语言的序列化方式，如果有跨语言需求的话可以考虑使用。",-1),U=n("p",null,"除了我上面介绍到的序列化方式的话，还有像 Thrift，Avro 这些。",-1),A=n("figure",null,[n("img",{src:"https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png",alt:"JavaGuide 官方公众号",tabindex:"0"}),n("figcaption",null,"JavaGuide 官方公众号")],-1);function L(E,G){const a=p("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[n("strong",null,[s("🐛 修正（参见："),n("a",u,[s("issue#2174"),e(a)]),s("）")]),s("："),d,s(" 修饰的变量是静态变量，位于方法区，本身是不会被序列化的。但是，"),k,s(" 的序列化做了特殊处理，在序列化时，会将 "),v,s(" 序列化到二进制字节流中；在反序列化时，也会解析它并做一致性判断。")]),m,n("ul",null,[b,h,n("li",null,[g,s("：序列化和反序列化本身并不存在问题。但当输入的反序列化的数据可被用户控制，那么攻击者即可通过构造恶意输入，让反序列化产生非预期的对象，在此过程中执行构造的任意代码。相关阅读："),n("a",f,[s("应用安全:JAVA 反序列化漏洞之殇 - Cryin"),e(a)]),s("、"),n("a",y,[s("Java 反序列化安全漏洞怎么回事? - Monica"),e(a)]),s("。")])]),_,w,I,n("p",null,[n("a",j,[s("guide-rpc-framework"),e(a)]),s(" 就是使用的 kryo 进行序列化，序列化和反序列化相关的代码如下：")]),S,n("p",null,[s("GitHub 地址："),n("a",x,[s("https://github.com/EsotericSoftware/kryo"),e(a)]),s(" 。")]),z,n("p",null,[s("GitHub 地址："),n("a",D,[s("https://github.com/protocolbuffers/protobuf"),e(a)]),s("。")]),P,T,q,n("p",null,[s("GitHub 地址："),n("a",V,[s("https://github.com/protostuff/protostuff"),e(a)]),s("。")]),K,n("p",null,[s("Kryo 是专门针对 Java 语言序列化方式并且性能非常好，如果你的应用是专门针对 Java 语言的话可以考虑使用，并且 Dubbo 官网的一篇文章中提到说推荐使用 Kryo 作为生产环境的序列化方式。(文章地址："),n("a",J,[s("https://cn.dubbo.apache.org/zh-cn/docsv2.7/user/serialization/"),e(a)]),s("）。")]),O,C,U,A])}const H=o(l,[["render",L],["__file","serialization.html.vue"]]);export{H as default};
