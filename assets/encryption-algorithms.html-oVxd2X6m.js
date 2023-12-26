const e=JSON.parse('{"key":"v-44236fe4","path":"/system-design/security/encryption-algorithms.html","title":"常见加密算法总结","lang":"zh-CN","frontmatter":{"title":"常见加密算法总结","category":"系统设计","tag":["安全"],"description":"加密算法是一种用数学方法对数据进行变换的技术，目的是保护数据的安全，防止被未经授权的人读取或修改。加密算法可以分为三大类：对称加密算法、非对称加密算法和哈希算法（也叫摘要算法）。 日常开发中常见的需要用到的加密算法的场景： 保存在数据库中的密码需要加盐之后使用哈希算法（比如 BCrypt）进行加密。 保存在数据库中的银行卡号、身份号这类敏感数据需要使用对称加密算法（比如 AES）保存。 网络传输的敏感数据比如银行卡号、身份号需要用 HTTPS + 非对称加密算法（如 RSA）来保证传输数据的安全性。 ……","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/system-design/security/encryption-algorithms.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"常见加密算法总结"}],["meta",{"property":"og:description","content":"加密算法是一种用数学方法对数据进行变换的技术，目的是保护数据的安全，防止被未经授权的人读取或修改。加密算法可以分为三大类：对称加密算法、非对称加密算法和哈希算法（也叫摘要算法）。 日常开发中常见的需要用到的加密算法的场景： 保存在数据库中的密码需要加盐之后使用哈希算法（比如 BCrypt）进行加密。 保存在数据库中的银行卡号、身份号这类敏感数据需要使用对称加密算法（比如 AES）保存。 网络传输的敏感数据比如银行卡号、身份号需要用 HTTPS + 非对称加密算法（如 RSA）来保证传输数据的安全性。 ……"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-26T22:44:02.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"安全"}],["meta",{"property":"article:modified_time","content":"2023-10-26T22:44:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见加密算法总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-26T22:44:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"哈希算法","slug":"哈希算法","link":"#哈希算法","children":[{"level":3,"title":"MD","slug":"md","link":"#md","children":[]},{"level":3,"title":"SHA","slug":"sha","link":"#sha","children":[]},{"level":3,"title":"Bcrypt","slug":"bcrypt","link":"#bcrypt","children":[]}]},{"level":2,"title":"对称加密","slug":"对称加密","link":"#对称加密","children":[{"level":3,"title":"DES 和 3DES","slug":"des-和-3des","link":"#des-和-3des","children":[]},{"level":3,"title":"AES","slug":"aes","link":"#aes","children":[]}]},{"level":2,"title":"非对称加密","slug":"非对称加密","link":"#非对称加密","children":[{"level":3,"title":"RSA","slug":"rsa","link":"#rsa","children":[]},{"level":3,"title":"DSA","slug":"dsa","link":"#dsa","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1687867539000,"updatedTime":1698360242000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":15.5,"words":4649},"filePathRelative":"system-design/security/encryption-algorithms.md","localizedDate":"2023年6月27日","excerpt":"<p>加密算法是一种用数学方法对数据进行变换的技术，目的是保护数据的安全，防止被未经授权的人读取或修改。加密算法可以分为三大类：对称加密算法、非对称加密算法和哈希算法（也叫摘要算法）。</p>\\n<p>日常开发中常见的需要用到的加密算法的场景：</p>\\n<ol>\\n<li>保存在数据库中的密码需要加盐之后使用哈希算法（比如 BCrypt）进行加密。</li>\\n<li>保存在数据库中的银行卡号、身份号这类敏感数据需要使用对称加密算法（比如 AES）保存。</li>\\n<li>网络传输的敏感数据比如银行卡号、身份号需要用 HTTPS + 非对称加密算法（如 RSA）来保证传输数据的安全性。</li>\\n<li>……</li>\\n</ol>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
