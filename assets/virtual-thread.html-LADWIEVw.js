import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c,a as n,b as s,d as t,e as l}from"./app-qOq64fjQ.js";const i={},u={href:"https://github.com/Lorin-github",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/Snailclimb/JavaGuide/pull/2190",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"虚拟线程在 Java 21 正式发布，这是一项重量级的更新。",-1),k=n("h2",{id:"什么是虚拟线程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是虚拟线程","aria-hidden":"true"},"#"),s(" 什么是虚拟线程？")],-1),v=n("p",null,"虚拟线程（Virtual Thread）是 JDK 而不是 OS 实现的轻量级线程(Lightweight Process，LWP），由 JVM 调度。许多虚拟线程共享同一个操作系统线程，虚拟线程的数量可以远大于操作系统线程的数量。",-1),m=n("h2",{id:"虚拟线程和平台线程有什么关系",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#虚拟线程和平台线程有什么关系","aria-hidden":"true"},"#"),s(" 虚拟线程和平台线程有什么关系？")],-1),h=n("p",null,[s("在引入虚拟线程之前，"),n("code",null,"java.lang.Thread"),s(" 包已经支持所谓的平台线程（Platform Thread），也就是没有虚拟线程之前，我们一直使用的线程。JVM 调度程序通过平台线程（载体线程）来管理虚拟线程，一个平台线程可以在不同的时间执行不同的虚拟线程（多个虚拟线程挂载在一个平台线程上），当虚拟线程被阻塞或等待时，平台线程可以切换到执行另一个虚拟线程。")],-1),b={href:"https://medium.com/javarevisited/how-to-use-java-19-virtual-threads-c16a32bad5f7",target:"_blank",rel:"noopener noreferrer"},f=n("figure",null,[n("img",{src:"https://oss.javaguide.cn/github/javaguide/java/new-features/virtual-threads-platform-threads-kernel-threads-relationship.png",alt:"虚拟线程、平台线程和系统内核线程的关系",tabindex:"0"}),n("figcaption",null,"虚拟线程、平台线程和系统内核线程的关系")],-1),g={href:"https://www.zhihu.com/question/23096638/answer/29617153",target:"_blank",rel:"noopener noreferrer"},T=l(`<h2 id="虚拟线程有什么优点和缺点" tabindex="-1"><a class="header-anchor" href="#虚拟线程有什么优点和缺点" aria-hidden="true">#</a> 虚拟线程有什么优点和缺点？</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>非常轻量级：可以在单个线程中创建成百上千个虚拟线程而不会导致过多的线程创建和上下文切换。</li><li>简化异步编程： 虚拟线程可以简化异步编程，使代码更易于理解和维护。它可以将异步代码编写得更像同步代码，避免了回调地狱（Callback Hell）。</li><li>减少资源开销： 相比于操作系统线程，虚拟线程的资源开销更小。本质上是提高了线程的执行效率，从而减少线程资源的创建和上下文切换。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>不适用于计算密集型任务： 虚拟线程适用于 I/O 密集型任务，但不适用于计算密集型任务，因为密集型计算始终需要 CPU 资源作为支持。</li><li>依赖于语言或库的支持： 协程需要编程语言或库提供支持。不是所有编程语言都原生支持协程。比如 Java 实现的虚拟线程。</li></ul><h2 id="四种创建虚拟线程的方法" tabindex="-1"><a class="header-anchor" href="#四种创建虚拟线程的方法" aria-hidden="true">#</a> 四种创建虚拟线程的方法</h2><p>Java 21 已经正式支持虚拟线程，大家可以在官网下载使用，在使用上官方为了降低使用门槛，尽量复用原有的 <code>Thread</code> 类，让大家可以更加平滑的使用。</p><p>官方提供了以下四种方式创建虚拟线程：</p><ol><li>使用 <code>Thread.startVirtualThread()</code> 创建</li><li>使用 <code>Thread.ofVirtual()</code> 创建</li><li>使用 <code>ThreadFactory</code> 创建</li></ol><h4 id="使用-thread-startvirtualthread-创建" tabindex="-1"><a class="header-anchor" href="#使用-thread-startvirtualthread-创建" aria-hidden="true">#</a> 使用 Thread.startVirtualThread()创建</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VirtualThreadTest</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">CustomThread</span> customThread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CustomThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">startVirtualThread</span><span class="token punctuation">(</span>customThread<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">CustomThread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;CustomThread run&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-thread-ofvirtual-创建" tabindex="-1"><a class="header-anchor" href="#使用-thread-ofvirtual-创建" aria-hidden="true">#</a> 使用 Thread.ofVirtual()创建</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VirtualThreadTest</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">CustomThread</span> customThread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CustomThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建不启动</span>
    <span class="token class-name">Thread</span> unStarted <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">ofVirtual</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unstarted</span><span class="token punctuation">(</span>customThread<span class="token punctuation">)</span><span class="token punctuation">;</span>
    unStarted<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建直接启动</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">ofVirtual</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>customThread<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">CustomThread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;CustomThread run&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-threadfactory-创建" tabindex="-1"><a class="header-anchor" href="#使用-threadfactory-创建" aria-hidden="true">#</a> 使用 ThreadFactory 创建</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VirtualThreadTest</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">CustomThread</span> customThread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CustomThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ThreadFactory</span> factory <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">ofVirtual</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Thread</span> thread <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newThread</span><span class="token punctuation">(</span>customThread<span class="token punctuation">)</span><span class="token punctuation">;</span>
    thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">CustomThread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;CustomThread run&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-executors-newvirtualthreadpertaskexecutor-创建" tabindex="-1"><a class="header-anchor" href="#使用-executors-newvirtualthreadpertaskexecutor-创建" aria-hidden="true">#</a> 使用 Executors.newVirtualThreadPerTaskExecutor()创建</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VirtualThreadTest</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">CustomThread</span> customThread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CustomThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ExecutorService</span> executor <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newVirtualThreadPerTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    executor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>customThread<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">CustomThread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;CustomThread run&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="虚拟线程和平台线程性能对比" tabindex="-1"><a class="header-anchor" href="#虚拟线程和平台线程性能对比" aria-hidden="true">#</a> 虚拟线程和平台线程性能对比</h2><p>通过多线程和虚拟线程的方式处理相同的任务，对比创建的系统线程数和处理耗时。</p><p><strong>说明</strong>：统计创建的系统线程中部分为后台线程（比如 GC 线程），两种场景下都一样，所以并不影响对比。</p><p><strong>测试代码</strong>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VirtualThreadTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 开启线程 统计平台线程数</span>
        <span class="token class-name">ScheduledExecutorService</span> scheduledExecutorService <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newScheduledThreadPool</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduledExecutorService<span class="token punctuation">.</span><span class="token function">scheduleAtFixedRate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">ThreadMXBean</span> threadBean <span class="token operator">=</span> <span class="token class-name">ManagementFactory</span><span class="token punctuation">.</span><span class="token function">getThreadMXBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">ThreadInfo</span><span class="token punctuation">[</span><span class="token punctuation">]</span> threadInfo <span class="token operator">=</span> threadBean<span class="token punctuation">.</span><span class="token function">dumpAllThreads</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">updateMaxThreadNum</span><span class="token punctuation">(</span>threadInfo<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 虚拟线程</span>
        <span class="token class-name">ExecutorService</span> executor <span class="token operator">=</span>  <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newVirtualThreadPerTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 使用平台线程</span>
        <span class="token comment">// ExecutorService executor =  Executors.newFixedThreadPool(200);</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            executor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 线程睡眠 0.5 s，模拟业务处理</span>
                    <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> ignored<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        executor<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;max：&quot;</span> <span class="token operator">+</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; platform thread/os thread&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;totalMillis：%dms\\n&quot;</span><span class="token punctuation">,</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
    <span class="token comment">// 更新创建的平台最大线程数</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">updateMaxThreadNum</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">Integer</span> integer <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> integer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>请求数 10000 单请求耗时 1s</strong>：</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>// Virtual Thread
max：22 platform thread/os thread
totalMillis：1806ms

// Platform Thread  线程数200
max：209 platform thread/os thread
totalMillis：50578ms

// Platform Thread  线程数500
max：509 platform thread/os thread
totalMillis：20254ms

// Platform Thread  线程数1000
max：1009 platform thread/os thread
totalMillis：10214ms

// Platform Thread  线程数2000
max：2009 platform thread/os thread
totalMillis：5358ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>请求数 10000 单请求耗时 0.5s</strong>：</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>// Virtual Thread
max：22 platform thread/os thread
totalMillis：1316ms

// Platform Thread  线程数200
max：209 platform thread/os thread
totalMillis：25619ms

// Platform Thread  线程数500
max：509 platform thread/os thread
totalMillis：10277ms

// Platform Thread  线程数1000
max：1009 platform thread/os thread
totalMillis：5197ms

// Platform Thread  线程数2000
max：2009 platform thread/os thread
totalMillis：2865ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以看到在密集 IO 的场景下，需要创建大量的平台线程异步处理才能达到虚拟线程的处理速度。</li><li>因此，在密集 IO 的场景，虚拟线程可以大幅提高线程的执行效率，减少线程资源的创建以及上下文切换。</li><li>吐槽：虽然虚拟线程我很想用，但是我 Java8 有机会升级到 Java21 吗？呜呜</li></ul><p><strong>注意</strong>：有段时间 JDK 一直致力于 Reactor 响应式编程来提高 Java 性能，但响应式编程难以理解、调试、使用，最终又回到了同步编程，最终虚拟线程诞生。</p>`,28);function w(y,x){const a=p("ExternalLinkIcon");return o(),c("div",null,[n("blockquote",null,[n("p",null,[s("本文部分内容来自 "),n("a",u,[s("Lorin"),t(a)]),s(" 的"),n("a",r,[s("PR"),t(a)]),s("。")])]),d,k,v,m,h,n("p",null,[s("虚拟线程、平台线程和系统内核线程的关系图如下所示（图源："),n("a",b,[s("How to Use Java 19 Virtual Threads"),t(a)]),s("）：")]),f,n("p",null,[s("关于平台线程和系统内核线程的对应关系多提一点：在 Windows 和 Linux 等主流操作系统中，Java 线程采用的是一对一的线程模型，也就是一个平台线程对应一个系统内核线程。Solaris 系统是一个特例，HotSpot VM 在 Solaris 上支持多对多和一对一。具体可以参考 R 大的回答: "),n("a",g,[s("JVM 中的线程模型是用户级的么？"),t(a)]),s("。")]),T])}const V=e(i,[["render",w],["__file","virtual-thread.html.vue"]]);export{V as default};
