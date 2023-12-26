import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as a,c,a as e,b as t,d as o,e as n}from"./app-qOq64fjQ.js";const i={},h=n('<h2 id="贪心算法" tabindex="-1"><a class="header-anchor" href="#贪心算法" aria-hidden="true">#</a> 贪心算法</h2><h3 id="算法思想" tabindex="-1"><a class="header-anchor" href="#算法思想" aria-hidden="true">#</a> 算法思想</h3><p>贪心的本质是选择每一阶段的局部最优，从而达到全局最优。</p><h3 id="一般解题步骤" tabindex="-1"><a class="header-anchor" href="#一般解题步骤" aria-hidden="true">#</a> 一般解题步骤</h3><ul><li>将问题分解为若干个子问题</li><li>找出适合的贪心策略</li><li>求解每一个子问题的最优解</li><li>将局部最优解堆叠成全局最优解</li></ul><h3 id="leetcode" tabindex="-1"><a class="header-anchor" href="#leetcode" aria-hidden="true">#</a> LeetCode</h3>',6),d={href:"https://leetcode.cn/problems/assign-cookies/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://leetcode.cn/problems/jump-game/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://leetcode.cn/problems/jump-game-ii/",target:"_blank",rel:"noopener noreferrer"},u=n('<h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h2><h3 id="算法思想-1" tabindex="-1"><a class="header-anchor" href="#算法思想-1" aria-hidden="true">#</a> 算法思想</h3><p>动态规划中每一个状态一定是由上一个状态推导出来的，这一点就区分于贪心，贪心没有状态推导，而是从局部直接选最优的。</p><p>经典题目：01 背包、完全背包</p><h3 id="一般解题步骤-1" tabindex="-1"><a class="header-anchor" href="#一般解题步骤-1" aria-hidden="true">#</a> 一般解题步骤</h3><ul><li>确定 dp 数组（dp table）以及下标的含义</li><li>确定递推公式</li><li>dp 数组如何初始化</li><li>确定遍历顺序</li><li>举例推导 dp 数组</li></ul><h3 id="leetcode-1" tabindex="-1"><a class="header-anchor" href="#leetcode-1" aria-hidden="true">#</a> LeetCode</h3>',7),f={href:"https://leetcode.cn/problems/fibonacci-number/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://leetcode.cn/problems/min-cost-climbing-stairs/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://leetcode.cn/problems/partition-equal-subset-sum/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://leetcode.cn/problems/coin-change-ii/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.cn/problems/palindromic-substrings/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://leetcode.cn/problems/longest-palindromic-subsequence/",target:"_blank",rel:"noopener noreferrer"},q=n('<h2 id="回溯算法" tabindex="-1"><a class="header-anchor" href="#回溯算法" aria-hidden="true">#</a> 回溯算法</h2><h3 id="算法思想-2" tabindex="-1"><a class="header-anchor" href="#算法思想-2" aria-hidden="true">#</a> 算法思想</h3><p>回溯算法实际上一个类似枚举的搜索尝试过程，主要是在搜索尝试过程中寻找问题的解，当发现已不满足求解条</p><p>件时，就“回溯”返回，尝试别的路径。其本质就是穷举。</p><p>经典题目：8 皇后</p><h3 id="一般解题步骤-2" tabindex="-1"><a class="header-anchor" href="#一般解题步骤-2" aria-hidden="true">#</a> 一般解题步骤</h3><ul><li>针对所给问题，定义问题的解空间，它至少包含问题的一个（最优）解。</li><li>确定易于搜索的解空间结构,使得能用回溯法方便地搜索整个解空间 。</li><li>以深度优先的方式搜索解空间，并且在搜索过程中用剪枝函数避免无效搜索。</li></ul><h3 id="leetcode-2" tabindex="-1"><a class="header-anchor" href="#leetcode-2" aria-hidden="true">#</a> leetcode</h3>',8),N={href:"https://leetcode.cn/problems/combinations/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://leetcode.cn/problems/combination-sum/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.cn/problems/combination-sum-ii/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.cn/problems/subsets/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.cn/problems/subsets-ii/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.cn/problems/n-queens/",target:"_blank",rel:"noopener noreferrer"},B=n('<h2 id="分治算法" tabindex="-1"><a class="header-anchor" href="#分治算法" aria-hidden="true">#</a> 分治算法</h2><h3 id="算法思想-3" tabindex="-1"><a class="header-anchor" href="#算法思想-3" aria-hidden="true">#</a> 算法思想</h3><p>将一个规模为 N 的问题分解为 K 个规模较小的子问题，这些子问题相互独立且与原问题性质相同。求出子问题的解，就可得到原问题的解。</p><p>经典题目：二分查找、汉诺塔问题</p><h3 id="一般解题步骤-3" tabindex="-1"><a class="header-anchor" href="#一般解题步骤-3" aria-hidden="true">#</a> 一般解题步骤</h3><ul><li>将原问题分解为若干个规模较小，相互独立，与原问题形式相同的子问题；</li><li>若子问题规模较小而容易被解决则直接解，否则递归地解各个子问题</li><li>将各个子问题的解合并为原问题的解。</li></ul><h3 id="leetcode-3" tabindex="-1"><a class="header-anchor" href="#leetcode-3" aria-hidden="true">#</a> LeetCode</h3>',7),E={href:"https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.cn/problems/sort-list/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.cn/problems/merge-k-sorted-lists/",target:"_blank",rel:"noopener noreferrer"};function P(R,S){const r=s("ExternalLinkIcon");return a(),c("div",null,[h,e("p",null,[t("455.分发饼干："),e("a",d,[t("https://leetcode.cn/problems/assign-cookies/"),o(r)])]),e("p",null,[t("121.买卖股票的最佳时机："),e("a",p,[t("https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/"),o(r)])]),e("p",null,[t("122.买卖股票的最佳时机 II："),e("a",b,[t("https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/"),o(r)])]),e("p",null,[t("55.跳跃游戏："),e("a",m,[t("https://leetcode.cn/problems/jump-game/"),o(r)])]),e("p",null,[t("45.跳跃游戏 II："),e("a",_,[t("https://leetcode.cn/problems/jump-game-ii/"),o(r)])]),u,e("p",null,[t("509.斐波那契数："),e("a",f,[t("https://leetcode.cn/problems/fibonacci-number/"),o(r)])]),e("p",null,[t("746.使用最小花费爬楼梯："),e("a",g,[t("https://leetcode.cn/problems/min-cost-climbing-stairs/"),o(r)])]),e("p",null,[t("416.分割等和子集："),e("a",k,[t("https://leetcode.cn/problems/partition-equal-subset-sum/"),o(r)])]),e("p",null,[t("518.零钱兑换："),e("a",x,[t("https://leetcode.cn/problems/coin-change-ii/"),o(r)])]),e("p",null,[t("647.回文子串："),e("a",I,[t("https://leetcode.cn/problems/palindromic-substrings/"),o(r)])]),e("p",null,[t("516.最长回文子序列："),e("a",y,[t("https://leetcode.cn/problems/longest-palindromic-subsequence/"),o(r)])]),q,e("p",null,[t("77.组合："),e("a",N,[t("https://leetcode.cn/problems/combinations/"),o(r)])]),e("p",null,[t("39.组合总和："),e("a",v,[t("https://leetcode.cn/problems/combination-sum/"),o(r)])]),e("p",null,[t("40.组合总和 II："),e("a",L,[t("https://leetcode.cn/problems/combination-sum-ii/"),o(r)])]),e("p",null,[t("78.子集："),e("a",j,[t("https://leetcode.cn/problems/subsets/"),o(r)])]),e("p",null,[t("90.子集 II："),e("a",C,[t("https://leetcode.cn/problems/subsets-ii/"),o(r)])]),e("p",null,[t("51.N 皇后："),e("a",V,[t("https://leetcode.cn/problems/n-queens/"),o(r)])]),B,e("p",null,[t("108.将有序数组转换成二叉搜索数："),e("a",E,[t("https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/"),o(r)])]),e("p",null,[t("148.排序列表："),e("a",A,[t("https://leetcode.cn/problems/sort-list/"),o(r)])]),e("p",null,[t("23.合并 k 个升序链表："),e("a",K,[t("https://leetcode.cn/problems/merge-k-sorted-lists/"),o(r)])])])}const z=l(i,[["render",P],["__file","classical-algorithm-problems-recommendations.html.vue"]]);export{z as default};
