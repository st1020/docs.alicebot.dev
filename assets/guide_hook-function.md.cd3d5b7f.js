import{_ as s,c as a,o as n,a as l}from"./app.bec4a1f1.js";const d=JSON.parse('{"title":"\u94A9\u5B50\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"Bot \u76F8\u5173\u94A9\u5B50","slug":"bot-\u76F8\u5173\u94A9\u5B50"},{"level":3,"title":"Bot \u542F\u52A8","slug":"bot-\u542F\u52A8"},{"level":3,"title":"Bot \u9000\u51FA","slug":"bot-\u9000\u51FA"},{"level":2,"title":"\u9002\u914D\u5668\u76F8\u5173\u94A9\u5B50","slug":"\u9002\u914D\u5668\u76F8\u5173\u94A9\u5B50"},{"level":3,"title":"\u9002\u914D\u5668\u521D\u59CB\u5316","slug":"\u9002\u914D\u5668\u521D\u59CB\u5316"},{"level":3,"title":"\u9002\u914D\u5668\u8FD0\u884C","slug":"\u9002\u914D\u5668\u8FD0\u884C"},{"level":3,"title":"\u9002\u914D\u5668\u5173\u95ED","slug":"\u9002\u914D\u5668\u5173\u95ED"},{"level":2,"title":"\u4E8B\u4EF6\u5904\u7406\u76F8\u5173\u94A9\u5B50","slug":"\u4E8B\u4EF6\u5904\u7406\u76F8\u5173\u94A9\u5B50"},{"level":3,"title":"\u4E8B\u4EF6\u9884\u5904\u7406","slug":"\u4E8B\u4EF6\u9884\u5904\u7406"},{"level":3,"title":"\u4E8B\u4EF6\u540E\u5904\u7406","slug":"\u4E8B\u4EF6\u540E\u5904\u7406"}],"relativePath":"guide/hook-function.md","lastUpdated":1657366185000}'),p={name:"guide/hook-function.md"},o=l(`<h1 id="\u94A9\u5B50\u51FD\u6570" tabindex="-1">\u94A9\u5B50\u51FD\u6570 <a class="header-anchor" href="#\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a></h1><p>AliceBot \u63D0\u4F9B\u4E86\u4E00\u4E9B\u94A9\u5B50\u51FD\u6570\uFF0C\u53EF\u4EE5\u4EE5\u88C5\u9970\u5668\u7684\u5F62\u5F0F\u4F7F\u7528\uFF0C\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> alicebot </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Bot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">bot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Bot</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bot_run_hook</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hook_func</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_bot</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Bot</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u5982\u679C\u4F60\u4E0D\u786E\u5B9A\u81EA\u5DF1\u5728\u5E72\u4EC0\u4E48\uFF0C\u8BF7\u4E0D\u8981\u6DFB\u52A0\u94A9\u5B50\u51FD\u6570\u3002</p></div><h2 id="bot-\u76F8\u5173\u94A9\u5B50" tabindex="-1">Bot \u76F8\u5173\u94A9\u5B50 <a class="header-anchor" href="#bot-\u76F8\u5173\u94A9\u5B50" aria-hidden="true">#</a></h2><h3 id="bot-\u542F\u52A8" tabindex="-1">Bot \u542F\u52A8 <a class="header-anchor" href="#bot-\u542F\u52A8" aria-hidden="true">#</a></h3><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bot_run_hook</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hook_func</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_bot</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Bot</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"></span></code></pre></div><h3 id="bot-\u9000\u51FA" tabindex="-1">Bot \u9000\u51FA <a class="header-anchor" href="#bot-\u9000\u51FA" aria-hidden="true">#</a></h3><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bot_exit_hook</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hook_func</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_bot</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Bot</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u53EA\u6709\u8FD9\u4E2A\u94A9\u5B50\u51FD\u6570\u975E\u534F\u7A0B\uFF01</p></div><h2 id="\u9002\u914D\u5668\u76F8\u5173\u94A9\u5B50" tabindex="-1">\u9002\u914D\u5668\u76F8\u5173\u94A9\u5B50 <a class="header-anchor" href="#\u9002\u914D\u5668\u76F8\u5173\u94A9\u5B50" aria-hidden="true">#</a></h2><h3 id="\u9002\u914D\u5668\u521D\u59CB\u5316" tabindex="-1">\u9002\u914D\u5668\u521D\u59CB\u5316 <a class="header-anchor" href="#\u9002\u914D\u5668\u521D\u59CB\u5316" aria-hidden="true">#</a></h3><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">adapter_startup_hook</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hook_func</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_adapter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">T_Adapter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"></span></code></pre></div><h3 id="\u9002\u914D\u5668\u8FD0\u884C" tabindex="-1">\u9002\u914D\u5668\u8FD0\u884C <a class="header-anchor" href="#\u9002\u914D\u5668\u8FD0\u884C" aria-hidden="true">#</a></h3><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">adapter_run_hook</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hook_func</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_adapter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">T_Adapter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"></span></code></pre></div><h3 id="\u9002\u914D\u5668\u5173\u95ED" tabindex="-1">\u9002\u914D\u5668\u5173\u95ED <a class="header-anchor" href="#\u9002\u914D\u5668\u5173\u95ED" aria-hidden="true">#</a></h3><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">adapter_shutdown_hook</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hook_func</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_adapter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">T_Adapter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8B\u4EF6\u5904\u7406\u76F8\u5173\u94A9\u5B50" tabindex="-1">\u4E8B\u4EF6\u5904\u7406\u76F8\u5173\u94A9\u5B50 <a class="header-anchor" href="#\u4E8B\u4EF6\u5904\u7406\u76F8\u5173\u94A9\u5B50" aria-hidden="true">#</a></h2><h3 id="\u4E8B\u4EF6\u9884\u5904\u7406" tabindex="-1">\u4E8B\u4EF6\u9884\u5904\u7406 <a class="header-anchor" href="#\u4E8B\u4EF6\u9884\u5904\u7406" aria-hidden="true">#</a></h3><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">event_preprocessor_hook</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hook_func</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">T_Event</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4E8B\u4EF6\u540E\u5904\u7406" tabindex="-1">\u4E8B\u4EF6\u540E\u5904\u7406 <a class="header-anchor" href="#\u4E8B\u4EF6\u540E\u5904\u7406" aria-hidden="true">#</a></h3><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">event_postprocessor_hook</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hook_func</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">T_Event</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"></span></code></pre></div>`,22),e=[o];function t(c,r,y,D,F,i){return n(),a("div",null,e)}var C=s(p,[["render",t]]);export{d as __pageData,C as default};
