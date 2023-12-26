import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as a,c as s,a as e,b as o,d as c,e as i}from"./app-qOq64fjQ.js";const l="/assets/trans_visible-HpI_WzLy.png",r="/assets/317e91e1-1ee1-42ad-9412-9098d5c6a9ad-_EM4ydM2.png",_="/assets/c52ff79f-10e6-46cb-b5d4-3c9cbcc1934a-UG37aFoQ.png",p="/assets/6a276e7a-b0da-4c7b-bdf7-c0c7b7b3b31c-J-draIaP.png",m="/assets/8778836b-34a8-480b-b8c7-654fe207a8c2-oBq_YRtq.png",u="/assets/6fb2b9a1-5f14-4dec-a797-e4cf388ed413-8AeejWso.png",g="/assets/a3fd1ec6-8f37-42fa-b090-7446d488fd04-4Oxfe1Pd.png",h="/assets/528559e9-dae8-4d14-b78d-a5b657c88391-sVLYFC8f.png",f="/assets/6f82703c-36a1-4458-90fe-d7f4edbac71a-OUzFRiIK.png",R="/assets/0e906b95-c916-4f30-beda-9cb3e49746bf-RPorAbKn.png",b="/assets/79ed6142-7664-4e0b-9023-cf546586aa39-3OQB9w1P.png",D="/assets/cbbedbc5-0e3c-4711-aafd-7f3d68a4ed4e-8Tk30fK1.png",v={},I=i('<h2 id="多版本并发控制-multi-version-concurrency-control" tabindex="-1"><a class="header-anchor" href="#多版本并发控制-multi-version-concurrency-control" aria-hidden="true">#</a> 多版本并发控制 (Multi-Version Concurrency Control)</h2><p>MVCC 是一种并发控制机制，用于在多个并发事务同时读写数据库时保持数据的一致性和隔离性。它是通过在每个数据行上维护多个版本的数据来实现的。当一个事务要对数据库中的数据进行修改时，MVCC 会为该事务创建一个数据快照，而不是直接修改实际的数据行。</p><p>1、读操作（SELECT）：</p><p>当一个事务执行读操作时，它会使用快照读取。快照读取是基于事务开始时数据库中的状态创建的，因此事务不会读取其他事务尚未提交的修改。具体工作情况如下：</p><ul><li>对于读取操作，事务会查找符合条件的数据行，并选择符合其事务开始时间的数据版本进行读取。</li><li>如果某个数据行有多个版本，事务会选择不晚于其开始时间的最新版本，确保事务只读取在它开始之前已经存在的数据。</li><li>事务读取的是快照数据，因此其他并发事务对数据行的修改不会影响当前事务的读取操作。</li></ul><p>2、写操作（INSERT、UPDATE、DELETE）：</p><p>当一个事务执行写操作时，它会生成一个新的数据版本，并将修改后的数据写入数据库。具体工作情况如下：</p><ul><li>对于写操作，事务会为要修改的数据行创建一个新的版本，并将修改后的数据写入新版本。</li><li>新版本的数据会带有当前事务的版本号，以便其他事务能够正确读取相应版本的数据。</li><li>原始版本的数据仍然存在，供其他事务使用快照读取，这保证了其他事务不受当前事务的写操作影响。</li></ul><p>3、事务提交和回滚：</p><ul><li>当一个事务提交时，它所做的修改将成为数据库的最新版本，并且对其他事务可见。</li><li>当一个事务回滚时，它所做的修改将被撤销，对其他事务不可见。</li></ul><p>4、版本的回收：</p><p>为了防止数据库中的版本无限增长，MVCC 会定期进行版本的回收。回收机制会删除已经不再需要的旧版本数据，从而释放空间。</p><p>MVCC 通过创建数据的多个版本和使用快照读取来实现并发控制。读操作使用旧版本数据的快照，写操作创建新版本，并确保原始版本仍然可用。这样，不同的事务可以在一定程度上并发执行，而不会相互干扰，从而提高了数据库的并发性能和数据一致性。</p><h2 id="一致性非锁定读和锁定读" tabindex="-1"><a class="header-anchor" href="#一致性非锁定读和锁定读" aria-hidden="true">#</a> 一致性非锁定读和锁定读</h2><h3 id="一致性非锁定读" tabindex="-1"><a class="header-anchor" href="#一致性非锁定读" aria-hidden="true">#</a> 一致性非锁定读</h3>',15),B={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-consistent-read.html",target:"_blank",rel:"noopener noreferrer"},C=e("strong",null,"一致性非锁定读（Consistent Nonlocking Reads）",-1),k=e("code",null,"InnoDB",-1),V={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-multi-versioning.html",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"DELETE",-1),x=e("code",null,"UPDATE",-1),T=e("code",null,"InnoDB",-1),E=i('<p>在 <code>Repeatable Read</code> 和 <code>Read Committed</code> 两个隔离级别下，如果是执行普通的 <code>select</code> 语句（不包括 <code>select ... lock in share mode</code> ,<code>select ... for update</code>）则会使用 <code>一致性非锁定读（MVCC）</code>。并且在 <code>Repeatable Read</code> 下 <code>MVCC</code> 实现了可重复读和防止部分幻读</p><h3 id="锁定读" tabindex="-1"><a class="header-anchor" href="#锁定读" aria-hidden="true">#</a> 锁定读</h3>',2),L={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-locking-reads.html",target:"_blank",rel:"noopener noreferrer"},M=e("strong",null,"锁定读（Locking Reads）",-1),X=i('<ul><li><code>select ... lock in share mode</code></li><li><code>select ... for update</code></li><li><code>insert</code>、<code>update</code>、<code>delete</code> 操作</li></ul><p>在锁定读下，读取的是数据的最新版本，这种读也被称为 <code>当前读（current read）</code>。锁定读会对读取到的记录加锁：</p><ul><li><p><code>select ... lock in share mode</code>：对记录加 <code>S</code> 锁，其它事务也可以加<code>S</code>锁，如果加 <code>x</code> 锁则会被阻塞</p></li><li><p><code>select ... for update</code>、<code>insert</code>、<code>update</code>、<code>delete</code>：对记录加 <code>X</code> 锁，且其它事务不能加任何锁</p></li></ul><p>在一致性非锁定读下，即使读取的记录已被其它事务加上 <code>X</code> 锁，这时记录也是可以被读取的，即读取的快照数据。上面说了，在 <code>Repeatable Read</code> 下 <code>MVCC</code> 防止了部分幻读，这边的 “部分” 是指在 <code>一致性非锁定读</code> 情况下，只能读取到第一次查询之前所插入的数据（根据 Read View 判断数据可见性，Read View 在第一次查询时生成）。但是！如果是 <code>当前读</code> ，每次读取的都是最新数据，这时如果两次查询中间有其它事务插入数据，就会产生幻读。所以， <strong><code>InnoDB</code> 在实现<code>Repeatable Read</code> 时，如果执行的是当前读，则会对读取的记录使用 <code>Next-key Lock</code> ，来防止其它事务在间隙间插入数据</strong></p><h2 id="innodb-对-mvcc-的实现" tabindex="-1"><a class="header-anchor" href="#innodb-对-mvcc-的实现" aria-hidden="true">#</a> InnoDB 对 MVCC 的实现</h2><p><code>MVCC</code> 的实现依赖于：<strong>隐藏字段、Read View、undo log</strong>。在内部实现中，<code>InnoDB</code> 通过数据行的 <code>DB_TRX_ID</code> 和 <code>Read View</code> 来判断数据的可见性，如不可见，则通过数据行的 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的历史版本。每个事务读到的数据版本可能是不一样的，在同一个事务中，用户只能看到该事务创建 <code>Read View</code> 之前已经提交的修改和该事务本身做的修改</p><h3 id="隐藏字段" tabindex="-1"><a class="header-anchor" href="#隐藏字段" aria-hidden="true">#</a> 隐藏字段</h3>',7),y=e("code",null,"InnoDB",-1),A={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-multi-versioning.html",target:"_blank",rel:"noopener noreferrer"},P=i(`<ul><li><code>DB_TRX_ID（6字节）</code>：表示最后一次插入或更新该行的事务 id。此外，<code>delete</code> 操作在内部被视为更新，只不过会在记录头 <code>Record header</code> 中的 <code>deleted_flag</code> 字段将其标记为已删除</li><li><code>DB_ROLL_PTR（7字节）</code> 回滚指针，指向该行的 <code>undo log</code> 。如果该行未被更新，则为空</li><li><code>DB_ROW_ID（6字节）</code>：如果没有设置主键且该表没有唯一非空索引时，<code>InnoDB</code> 会使用该 id 来生成聚簇索引</li></ul><h3 id="readview" tabindex="-1"><a class="header-anchor" href="#readview" aria-hidden="true">#</a> ReadView</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>class ReadView <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
private<span class="token operator">:</span>
  <span class="token class-name">trx_id_t</span> m_low_limit_id<span class="token punctuation">;</span>      <span class="token comment">/* 大于等于这个 ID 的事务均不可见 */</span>

  <span class="token class-name">trx_id_t</span> m_up_limit_id<span class="token punctuation">;</span>       <span class="token comment">/* 小于这个 ID 的事务均可见 */</span>

  <span class="token class-name">trx_id_t</span> m_creator_trx_id<span class="token punctuation">;</span>    <span class="token comment">/* 创建该 Read View 的事务ID */</span>

  <span class="token class-name">trx_id_t</span> m_low_limit_no<span class="token punctuation">;</span>      <span class="token comment">/* 事务 Number, 小于该 Number 的 Undo Logs 均可以被 Purge */</span>

  <span class="token class-name">ids_t</span> m_ids<span class="token punctuation">;</span>                  <span class="token comment">/* 创建 Read View 时的活跃事务列表 */</span>

  m_closed<span class="token punctuation">;</span>                     <span class="token comment">/* 标记 Read View 是否 close */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),q={href:"https://github.com/facebook/mysql-8.0/blob/8.0/storage/innobase/include/read0types.h#L298",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"Read View",-1),N=i("<p>主要有以下字段：</p><ul><li><code>m_low_limit_id</code>：目前出现过的最大的事务 ID+1，即下一个将被分配的事务 ID。大于等于这个 ID 的数据版本均不可见</li><li><code>m_up_limit_id</code>：活跃事务列表 <code>m_ids</code> 中最小的事务 ID，如果 <code>m_ids</code> 为空，则 <code>m_up_limit_id</code> 为 <code>m_low_limit_id</code>。小于这个 ID 的数据版本均可见</li><li><code>m_ids</code>：<code>Read View</code> 创建时其他未提交的活跃事务 ID 列表。创建 <code>Read View</code>时，将当前未提交事务 ID 记录下来，后续即使它们修改了记录行的值，对于当前事务也是不可见的。<code>m_ids</code> 不包括当前事务自己和已提交的事务（正在内存中）</li><li><code>m_creator_trx_id</code>：创建该 <code>Read View</code> 的事务 ID</li></ul>",2),S=e("strong",null,"事务可见性示意图",-1),U={href:"https://leviathan.vip/2019/03/20/InnoDB%E7%9A%84%E4%BA%8B%E5%8A%A1%E5%88%86%E6%9E%90-MVCC/#MVCC-1",target:"_blank",rel:"noopener noreferrer"},Q=i('<figure><img src="'+l+'" alt="trans_visible" tabindex="0"><figcaption>trans_visible</figcaption></figure><h3 id="undo-log" tabindex="-1"><a class="header-anchor" href="#undo-log" aria-hidden="true">#</a> undo-log</h3><p><code>undo log</code> 主要有两个作用：</p><ul><li>当事务回滚时用于将数据恢复到修改前的样子</li><li>另一个作用是 <code>MVCC</code> ，当读取记录时，若该记录被其他事务占用或当前版本对该事务不可见，则可以通过 <code>undo log</code> 读取之前的版本数据，以此实现非锁定读</li></ul><p><strong>在 <code>InnoDB</code> 存储引擎中 <code>undo log</code> 分为两种：<code>insert undo log</code> 和 <code>update undo log</code>：</strong></p><ol><li><strong><code>insert undo log</code></strong>：指在 <code>insert</code> 操作中产生的 <code>undo log</code>。因为 <code>insert</code> 操作的记录只对事务本身可见，对其他事务不可见，故该 <code>undo log</code> 可以在事务提交后直接删除。不需要进行 <code>purge</code> 操作</li></ol><p><strong><code>insert</code> 时的数据初始状态：</strong></p><figure><img src="'+r+'" alt="" tabindex="0"><figcaption></figcaption></figure><ol start="2"><li><strong><code>update undo log</code></strong>：<code>update</code> 或 <code>delete</code> 操作中产生的 <code>undo log</code>。该 <code>undo log</code>可能需要提供 <code>MVCC</code> 机制，因此不能在事务提交时就进行删除。提交时放入 <code>undo log</code> 链表，等待 <code>purge线程</code> 进行最后的删除</li></ol><p><strong>数据第一次被修改时：</strong></p><figure><img src="'+_+'" alt="" tabindex="0"><figcaption></figcaption></figure><p><strong>数据第二次被修改时：</strong></p><figure><img src="'+p+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>不同事务或者相同事务的对同一记录行的修改，会使该记录行的 <code>undo log</code> 成为一条链表，链首就是最新的记录，链尾就是最早的旧记录。</p><h3 id="数据可见性算法" tabindex="-1"><a class="header-anchor" href="#数据可见性算法" aria-hidden="true">#</a> 数据可见性算法</h3><p>在 <code>InnoDB</code> 存储引擎中，创建一个新事务后，执行每个 <code>select</code> 语句前，都会创建一个快照（Read View），<strong>快照中保存了当前数据库系统中正处于活跃（没有 commit）的事务的 ID 号</strong>。其实简单的说保存的是系统中当前不应该被本事务看到的其他事务 ID 列表（即 m_ids）。当用户在这个事务中要读取某个记录行的时候，<code>InnoDB</code> 会将该记录行的 <code>DB_TRX_ID</code> 与 <code>Read View</code> 中的一些变量及当前事务 ID 进行比较，判断是否满足可见性条件</p>',16),j={href:"https://github.com/facebook/mysql-8.0/blob/8.0/storage/innobase/include/read0types.h#L161",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leviathan.vip/2019/03/20/InnoDB%E7%9A%84%E4%BA%8B%E5%8A%A1%E5%88%86%E6%9E%90-MVCC/#MVCC-1",target:"_blank",rel:"noopener noreferrer"},F=i('<figure><img src="'+m+'" alt="" tabindex="0"><figcaption></figcaption></figure><ol><li><p>如果记录 DB_TRX_ID &lt; m_up_limit_id，那么表明最新修改该行的事务（DB_TRX_ID）在当前事务创建快照之前就提交了，所以该记录行的值对当前事务是可见的</p></li><li><p>如果 DB_TRX_ID &gt;= m_low_limit_id，那么表明最新修改该行的事务（DB_TRX_ID）在当前事务创建快照之后才修改该行，所以该记录行的值对当前事务不可见。跳到步骤 5</p></li><li><p>m_ids 为空，则表明在当前事务创建快照之前，修改该行的事务就已经提交了，所以该记录行的值对当前事务是可见的</p></li><li><p>如果 m_up_limit_id &lt;= DB_TRX_ID &lt; m_low_limit_id，表明最新修改该行的事务（DB_TRX_ID）在当前事务创建快照的时候可能处于“活动状态”或者“已提交状态”；所以就要对活跃事务列表 m_ids 进行查找（源码中是用的二分查找，因为是有序的）</p><ul><li><p>如果在活跃事务列表 m_ids 中能找到 DB_TRX_ID，表明：① 在当前事务创建快照前，该记录行的值被事务 ID 为 DB_TRX_ID 的事务修改了，但没有提交；或者 ② 在当前事务创建快照后，该记录行的值被事务 ID 为 DB_TRX_ID 的事务修改了。这些情况下，这个记录行的值对当前事务都是不可见的。跳到步骤 5</p></li><li><p>在活跃事务列表中找不到，则表明“id 为 trx_id 的事务”在修改“该记录行的值”后，在“当前事务”创建快照前就已经提交了，所以记录行对当前事务可见</p></li></ul></li><li><p>在该记录行的 DB_ROLL_PTR 指针所指向的 <code>undo log</code> 取出快照记录，用快照记录的 DB_TRX_ID 跳到步骤 1 重新开始判断，直到找到满足的快照版本或返回空</p></li></ol><h2 id="rc-和-rr-隔离级别下-mvcc-的差异" tabindex="-1"><a class="header-anchor" href="#rc-和-rr-隔离级别下-mvcc-的差异" aria-hidden="true">#</a> RC 和 RR 隔离级别下 MVCC 的差异</h2><p>在事务隔离级别 <code>RC</code> 和 <code>RR</code> （InnoDB 存储引擎的默认事务隔离级别）下，<code>InnoDB</code> 存储引擎使用 <code>MVCC</code>（非锁定一致性读），但它们生成 <code>Read View</code> 的时机却不同</p><ul><li>在 RC 隔离级别下的 <strong><code>每次select</code></strong> 查询前都生成一个<code>Read View</code> (m_ids 列表)</li><li>在 RR 隔离级别下只在事务开始后 <strong><code>第一次select</code></strong> 数据前生成一个<code>Read View</code>（m_ids 列表）</li></ul><h2 id="mvcc-解决不可重复读问题" tabindex="-1"><a class="header-anchor" href="#mvcc-解决不可重复读问题" aria-hidden="true">#</a> MVCC 解决不可重复读问题</h2><p>虽然 RC 和 RR 都通过 <code>MVCC</code> 来读取快照数据，但由于 <strong>生成 Read View 时机不同</strong>，从而在 RR 级别下实现可重复读</p><p>举个例子：</p><figure><img src="'+u+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="在-rc-下-readview-生成情况" tabindex="-1"><a class="header-anchor" href="#在-rc-下-readview-生成情况" aria-hidden="true">#</a> 在 RC 下 ReadView 生成情况</h3><p><strong>1. 假设时间线来到 T4 ，那么此时数据行 id = 1 的版本链为：</strong></p><figure><img src="'+g+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>由于 RC 级别下每次查询都会生成<code>Read View</code> ，并且事务 101、102 并未提交，此时 <code>103</code> 事务生成的 <code>Read View</code> 中活跃的事务 <strong><code>m_ids</code> 为：[101,102]</strong> ，<code>m_low_limit_id</code>为：104，<code>m_up_limit_id</code>为：101，<code>m_creator_trx_id</code> 为：103</p><ul><li>此时最新记录的 <code>DB_TRX_ID</code> 为 101，m_up_limit_id &lt;= 101 &lt; m_low_limit_id，所以要在 <code>m_ids</code> 列表中查找，发现 <code>DB_TRX_ID</code> 存在列表中，那么这个记录不可见</li><li>根据 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的上一版本记录，上一条记录的 <code>DB_TRX_ID</code> 还是 101，不可见</li><li>继续找上一条 <code>DB_TRX_ID</code>为 1，满足 1 &lt; m_up_limit_id，可见，所以事务 103 查询到数据为 <code>name = 菜花</code></li></ul><p><strong>2. 时间线来到 T6 ，数据的版本链为：</strong></p><figure><img src="'+h+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>因为在 RC 级别下，重新生成 <code>Read View</code>，这时事务 101 已经提交，102 并未提交，所以此时 <code>Read View</code> 中活跃的事务 <strong><code>m_ids</code>：[102]</strong> ，<code>m_low_limit_id</code>为：104，<code>m_up_limit_id</code>为：102，<code>m_creator_trx_id</code>为：103</p><ul><li><p>此时最新记录的 <code>DB_TRX_ID</code> 为 102，m_up_limit_id &lt;= 102 &lt; m_low_limit_id，所以要在 <code>m_ids</code> 列表中查找，发现 <code>DB_TRX_ID</code> 存在列表中，那么这个记录不可见</p></li><li><p>根据 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的上一版本记录，上一条记录的 <code>DB_TRX_ID</code> 为 101，满足 101 &lt; m_up_limit_id，记录可见，所以在 <code>T6</code> 时间点查询到数据为 <code>name = 李四</code>，与时间 T4 查询到的结果不一致，不可重复读！</p></li></ul><p><strong>3. 时间线来到 T9 ，数据的版本链为：</strong></p><figure><img src="'+f+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>重新生成 <code>Read View</code>， 这时事务 101 和 102 都已经提交，所以 <strong>m_ids</strong> 为空，则 m_up_limit_id = m_low_limit_id = 104，最新版本事务 ID 为 102，满足 102 &lt; m_low_limit_id，可见，查询结果为 <code>name = 赵六</code></p><blockquote><p><strong>总结：</strong> <strong>在 RC 隔离级别下，事务在每次查询开始时都会生成并设置新的 Read View，所以导致不可重复读</strong></p></blockquote><h3 id="在-rr-下-readview-生成情况" tabindex="-1"><a class="header-anchor" href="#在-rr-下-readview-生成情况" aria-hidden="true">#</a> 在 RR 下 ReadView 生成情况</h3><p>在可重复读级别下，只会在事务开始后第一次读取数据时生成一个 Read View（m_ids 列表）</p><p><strong>1. 在 T4 情况下的版本链为：</strong></p><figure><img src="'+R+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>在当前执行 <code>select</code> 语句时生成一个 <code>Read View</code>，此时 <strong><code>m_ids</code>：[101,102]</strong> ，<code>m_low_limit_id</code>为：104，<code>m_up_limit_id</code>为：101，<code>m_creator_trx_id</code> 为：103</p><p>此时和 RC 级别下一样：</p><ul><li>最新记录的 <code>DB_TRX_ID</code> 为 101，m_up_limit_id &lt;= 101 &lt; m_low_limit_id，所以要在 <code>m_ids</code> 列表中查找，发现 <code>DB_TRX_ID</code> 存在列表中，那么这个记录不可见</li><li>根据 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的上一版本记录，上一条记录的 <code>DB_TRX_ID</code> 还是 101，不可见</li><li>继续找上一条 <code>DB_TRX_ID</code>为 1，满足 1 &lt; m_up_limit_id，可见，所以事务 103 查询到数据为 <code>name = 菜花</code></li></ul><p><strong>2. 时间点 T6 情况下：</strong></p><figure><img src="'+b+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>在 RR 级别下只会生成一次<code>Read View</code>，所以此时依然沿用 <strong><code>m_ids</code>：[101,102]</strong> ，<code>m_low_limit_id</code>为：104，<code>m_up_limit_id</code>为：101，<code>m_creator_trx_id</code> 为：103</p><ul><li><p>最新记录的 <code>DB_TRX_ID</code> 为 102，m_up_limit_id &lt;= 102 &lt; m_low_limit_id，所以要在 <code>m_ids</code> 列表中查找，发现 <code>DB_TRX_ID</code> 存在列表中，那么这个记录不可见</p></li><li><p>根据 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的上一版本记录，上一条记录的 <code>DB_TRX_ID</code> 为 101，不可见</p></li><li><p>继续根据 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的上一版本记录，上一条记录的 <code>DB_TRX_ID</code> 还是 101，不可见</p></li><li><p>继续找上一条 <code>DB_TRX_ID</code>为 1，满足 1 &lt; m_up_limit_id，可见，所以事务 103 查询到数据为 <code>name = 菜花</code></p></li></ul><p><strong>3. 时间点 T9 情况下：</strong></p><figure><img src="'+D+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>此时情况跟 T6 完全一样，由于已经生成了 <code>Read View</code>，此时依然沿用 <strong><code>m_ids</code>：[101,102]</strong> ，所以查询结果依然是 <code>name = 菜花</code></p><h2 id="mvcc➕next-key-lock-防止幻读" tabindex="-1"><a class="header-anchor" href="#mvcc➕next-key-lock-防止幻读" aria-hidden="true">#</a> MVCC➕Next-key-Lock 防止幻读</h2><p><code>InnoDB</code>存储引擎在 RR 级别下通过 <code>MVCC</code>和 <code>Next-key Lock</code> 来解决幻读问题：</p><p><strong>1、执行普通 <code>select</code>，此时会以 <code>MVCC</code> 快照读的方式读取数据</strong></p><p>在快照读的情况下，RR 隔离级别只会在事务开启后的第一次查询生成 <code>Read View</code> ，并使用至事务提交。所以在生成 <code>Read View</code> 之后其它事务所做的更新、插入记录版本对当前事务并不可见，实现了可重复读和防止快照读下的 “幻读”</p><p><strong>2、执行 select...for update/lock in share mode、insert、update、delete 等当前读</strong></p>',41),G=e("code",null,"InnoDB",-1),J={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-locking.html#innodb-next-key-locks",target:"_blank",rel:"noopener noreferrer"},K=e("h2",{id:"参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),o(" 参考")],-1),W=e("li",null,[e("strong",null,"《MySQL 技术内幕 InnoDB 存储引擎第 2 版》")],-1),Y={href:"https://tech.meituan.com/2014/08/20/innodb-lock.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://blog.csdn.net/qq_35190492/article/details/109044141",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leviathan.vip/2019/03/20/InnoDB%E7%9A%84%E4%BA%8B%E5%8A%A1%E5%88%86%E6%9E%90-MVCC/",target:"_blank",rel:"noopener noreferrer"},$=e("figure",null,[e("img",{src:"https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png",alt:"JavaGuide 官方公众号",tabindex:"0"}),e("figcaption",null,"JavaGuide 官方公众号")],-1);function ee(oe,de){const d=t("ExternalLinkIcon");return a(),s("div",null,[I,e("p",null,[o("对于 "),e("a",B,[C,c(d)]),o("的实现，通常做法是加一个版本号或者时间戳字段，在更新数据的同时版本号 + 1 或者更新时间戳。查询时，将当前可见的版本号与对应记录的版本号进行比对，如果记录的版本小于可见版本，则表示该记录可见")]),e("p",null,[o("在 "),k,o(" 存储引擎中，"),e("a",V,[o("多版本控制 (multi versioning)"),c(d)]),o(" 就是对非锁定读的实现。如果读取的行正在执行 "),w,o(" 或 "),x,o(" 操作，这时读取操作不会去等待行上锁的释放。相反地，"),T,o(" 存储引擎会去读取行的一个快照数据，对于这种读取历史数据的方式，我们叫它快照读 (snapshot read)")]),E,e("p",null,[o("如果执行的是下列语句，就是 "),e("a",L,[M,c(d)])]),X,e("p",null,[o("在内部，"),y,o(" 存储引擎为每行数据添加了三个 "),e("a",A,[o("隐藏字段"),c(d)]),o("：")]),P,e("p",null,[e("a",q,[O,c(d)]),o(" 主要是用来做可见性判断，里面保存了 “当前对本事务不可见的其他活跃事务”")]),N,e("p",null,[S,o("（"),e("a",U,[o("图源"),c(d)]),o("）：")]),Q,e("p",null,[e("a",j,[o("具体的比较算法"),c(d)]),o("如下("),e("a",z,[o("图源"),c(d)]),o(")：")]),F,e("p",null,[o("在当前读下，读取的都是最新的数据，如果其它事务有插入新的记录，并且刚好在当前事务查询范围内，就会产生幻读！"),G,o(" 使用 "),e("a",J,[o("Next-key Lock"),c(d)]),o(" 来防止这种情况。当执行当前读时，会锁定读取到的记录的同时，锁定它们的间隙，防止其它事务在查询范围内插入数据。只要我不让你插入，就不会发生幻读")]),K,e("ul",null,[W,e("li",null,[e("a",Y,[o("Innodb 中的事务隔离级别和锁的关系"),c(d)])]),e("li",null,[e("a",H,[o("MySQL 事务与 MVCC 如何实现的隔离级别"),c(d)])]),e("li",null,[e("a",Z,[o("InnoDB 事务分析-MVCC"),c(d)])])]),$])}const ne=n(v,[["render",ee],["__file","innodb-implementation-of-mvcc.html.vue"]]);export{ne as default};
