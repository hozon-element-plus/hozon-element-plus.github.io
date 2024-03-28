import{o as p,c as l,b as s,a as t,e,d as n,_ as o}from"./app.18624a7b.js";const i=e(`<h1 id="\u56FD\u9645\u5316" tabindex="-1">\u56FD\u9645\u5316 <a class="header-anchor vp-link" href="#\u56FD\u9645\u5316" aria-hidden="true">#</a></h1><p>Hozon Element Plus \u7EC4\u4EF6 <strong>\u9ED8\u8BA4</strong> \u4F7F\u7528\u82F1\u8BED\uFF0C\u5982\u679C\u4F60\u5E0C\u671B\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u65B9\u6848\u3002</p><h2 id="\u5168\u5C40\u914D\u7F6E" tabindex="-1">\u5168\u5C40\u914D\u7F6E <a class="header-anchor vp-link" href="#\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a></h2><p>Element Plus \u63D0\u4F9B\u4E86\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u7684\u914D\u7F6E\u3002</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> HozonElementPlus <span class="token keyword">from</span> <span class="token string">&#39;hozon-element-plus&#39;</span>
<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;hozon-element-plus/dist/locale/zh-cn.mjs&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  locale<span class="token operator">:</span> zhCn<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="configprovider" tabindex="-1">ConfigProvider <a class="header-anchor vp-link" href="#configprovider" aria-hidden="true">#</a></h2><p>Hozon Element Plus \u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A Vue \u7EC4\u4EF6 <a href="/en-US/component/config-provider.html" class="vp-link">ConfigProvider</a> \u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u7684\u8BBE\u7F6E\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hozon-element-plus&#39;</span>

  <span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;hozon-element-plus/dist/locale/zh-cn.mjs&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      ElConfigProvider<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> zhCn<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u65E5\u671F\u548C\u65F6\u95F4\u672C\u5730\u5316" tabindex="-1">\u65E5\u671F\u548C\u65F6\u95F4\u672C\u5730\u5316 <a class="header-anchor vp-link" href="#\u65E5\u671F\u548C\u65F6\u95F4\u672C\u5730\u5316" aria-hidden="true">#</a></h2>`,9),c=n("\u6211\u4EEC\u4F7F\u7528 "),u={href:"https://day.js.org/docs/en/i18n/i18n",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},r=n("Day.js"),k=n(" \u5E93\u6765\u7BA1\u7406\u7EC4\u4EF6\u7684\u65E5\u671F\u548C\u65F6\u95F4\uFF0C\u4F8B\u5982 "),d=s("code",null,"DatePicker",-1),_=n("\u3002 \u5FC5\u987B\u5728 Day.js \u4E2D\u8BBE\u7F6E\u4E00\u4E2A\u9002\u5F53\u7684\u533A\u57DF\uFF0C\u4EE5\u4FBF\u4F7F\u56FD\u9645\u5316\u5145\u5206\u53D1\u6325\u4F5C\u7528\u3002 \u60A8\u5FC5\u987B\u5206\u5F00\u5BFC\u5165Day.js\u7684\u533A\u57DF\u8BBE\u7F6E\u3002"),g=e(`<div class="language-"><pre><code>import &#39;dayjs/locale/zh-cn&#39;
</code></pre></div><h2 id="cdn-\u7528\u6CD5" tabindex="-1">CDN \u7528\u6CD5 <a class="header-anchor vp-link" href="#cdn-\u7528\u6CD5" aria-hidden="true">#</a></h2><p>\u5982\u679C\u901A\u8FC7 CDN \u4F7F\u7528 Element Plus \uFF0C\u90A3\u4E48\u4F60\u9700\u8981\u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801\uFF0C\u4EE5\u4E0B\u662F\u4F7F\u7528 unpkg \u7684\u793A\u4F8B</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/locale/zh-cn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">locale</span><span class="token operator">:</span> ElementPlusLocaleZhCn<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5B8C\u6574\u6587\u6863\u8BE6\u89C1\uFF1A <a href="/en-US/component/config-provider.html" class="vp-link">ConfigProvider</a></p>`,5),h={href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},m=n("\u652F\u6301\u7684\u8BED\u8A00\u5217\u8868"),v=e('<ul class="language-list"><li>\u7B80\u4F53\u4E2D\u6587\uFF08zh-cn\uFF09</li><li>\u7F8E\u56FD\u82F1\u8BED\uFF08en\uFF09</li><li>\u963F\u585E\u62DC\u7586\u8BED\uFF08az\uFF09</li><li>\u5FB7\u8BED\uFF08de\uFF09</li><li>\u8461\u8404\u7259\u8BED\uFF08pt\uFF09</li><li>\u897F\u73ED\u7259\u8BED\uFF08es\uFF09</li><li>\u4E39\u9EA6\u8BED\uFF08da\uFF09</li><li>\u6CD5\u8BED\uFF08fr\uFF09</li><li>\u632A\u5A01\u8BED\uFF08nb-NO\uFF09</li><li>\u7E41\u4F53\u4E2D\u6587\uFF08zh-tw\uFF09</li><li>\u610F\u5927\u5229\u8BED\uFF08it\uFF09</li><li>\u97E9\u8BED\uFF08ko\uFF09</li><li>\u65E5\u8BED\uFF08ja\uFF09</li><li>\u8377\u5170\u8BED\uFF08nl\uFF09</li><li>\u8D8A\u5357\u8BED\uFF08vi\uFF09</li><li>\u4FC4\u8BED\uFF08ru\uFF09</li><li>\u571F\u8033\u5176\u8BED\uFF08tr\uFF09</li><li>\u5DF4\u897F\u8461\u8404\u7259\u8BED\uFF08pt-br\uFF09</li><li>\u6CE2\u65AF\u8BED\uFF08fa\uFF09</li><li>\u6CF0\u8BED\uFF08th\uFF09</li><li>\u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED\uFF08id\uFF09</li><li>\u4FDD\u52A0\u5229\u4E9A\u8BED\uFF08bg\uFF09</li><li>\u666E\u4EC0\u56FE\u8BED\uFF08pa\uFF09</li><li>\u6CE2\u5170\u8BED\uFF08pl\uFF09</li><li>\u82AC\u5170\u8BED\uFF08fi\uFF09</li><li>\u745E\u5178\u8BED\uFF08sv\uFF09</li><li>\u5E0C\u814A\u8BED\uFF08el\uFF09</li><li>\u65AF\u6D1B\u4F10\u514B\u8BED\uFF08sk\uFF09</li><li>\u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED\uFF08ca\uFF09</li><li>\u6377\u514B\u8BED\uFF08cs\uFF09</li><li>\u4E4C\u514B\u5170\u8BED\uFF08uk\uFF09</li><li>\u571F\u5E93\u66FC\u8BED\uFF08tk\uFF09</li><li>\u6CF0\u7C73\u5C14\u8BED\uFF08ta\uFF09</li><li>\u62C9\u8131\u7EF4\u4E9A\u8BED\uFF08lv\uFF09</li><li>\u5357\u975E\u8377\u5170\u8BED\uFF08af\uFF09</li><li>\u7231\u6C99\u5C3C\u4E9A\u8BED\uFF08et\uFF09</li><li>\u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED\uFF08sl\uFF09</li><li>\u963F\u62C9\u4F2F\u8BED\uFF08ar\uFF09</li><li>\u5E0C\u4F2F\u6765\u8BED\uFF08he\uFF09</li><li>\u7ACB\u9676\u5B9B\u8BED\uFF08lt\uFF09</li><li>\u8499\u53E4\u8BED\uFF08mn\uFF09</li><li>\u54C8\u8428\u514B\u8BED\uFF08kk\uFF09</li><li>\u5308\u7259\u5229\u8BED\uFF08hu\uFF09</li><li>\u7F57\u9A6C\u5C3C\u4E9A\u8BED\uFF08ro\uFF09</li><li>\u5E93\u5C14\u5FB7\u8BED\uFF08ku\uFF09</li><li>\u5E93\u5C14\u5FB7\u8BED (ckb)</li><li>\u7EF4\u543E\u5C14\u8BED (ug-cn)</li><li>\u9AD8\u68C9\u8BED (km)</li><li>\u585E\u5C14\u7EF4\u4E9A\u8BED (sr)</li><li>\u5DF4\u65AF\u514B\u8BED (eu)</li><li>\u5409\u5C14\u5409\u65AF\u8BED (ky)</li><li>\u4E9A\u7F8E\u5C3C\u4E9A\u8BED (hy-am)</li><li>\u514B\u7F57\u5730\u4E9A\u8BED\uFF08hr\uFF09</li><li>\u4E16\u754C\u8BED (eo)</li><li>\u5B5F\u52A0\u62C9\u8BED (bn)</li></ul>',1),f=n("\u5982\u679C\u4F60\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u7684\u8BED\u8A00\uFF0C\u6B22\u8FCE\u8D21\u732E "),y={href:"https://github.com/element-plus/element-plus/pulls",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},C=n("PR"),P=n("\uFF0C\u53EA\u9700\u5728 "),z={href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},b=n("\u8FD9\u91CC"),T=n(" \u6DFB\u52A0\u4E00\u4E2A\u8BED\u8A00\u914D\u7F6E\u6587\u4EF6\u5373\u53EF\u3002"),x='{"title":"\u56FD\u9645\u5316","description":"","frontmatter":{"title":"\u56FD\u9645\u5316","lang":"zh-CN"},"headers":[{"level":2,"title":"\u5168\u5C40\u914D\u7F6E","slug":"\u5168\u5C40\u914D\u7F6E"},{"level":2,"title":"ConfigProvider","slug":"configprovider"},{"level":2,"title":"\u65E5\u671F\u548C\u65F6\u95F4\u672C\u5730\u5316","slug":"\u65E5\u671F\u548C\u65F6\u95F4\u672C\u5730\u5316"},{"level":2,"title":"CDN \u7528\u6CD5","slug":"cdn-\u7528\u6CD5"}],"relativePath":"zh-CN/guide/i18n.md","lastUpdated":null}',w={},D=Object.assign(w,{__name:"i18n",setup(E){return(N,S)=>{const a=o;return p(),l("div",null,[i,s("p",null,[c,s("a",u,[r,t(a,{class:"link-icon"})]),k,d,_]),g,s("p",null,[s("a",h,[m,t(a,{class:"link-icon"})])]),v,s("p",null,[f,s("a",y,[C,t(a,{class:"link-icon"})]),P,s("a",z,[b,t(a,{class:"link-icon"})]),T])])}}});export{x as __pageData,D as default};
