import{_ as e,c as a,o as i,a as r}from"./app.bec4a1f1.js";const _=JSON.parse('{"title":"alicebot.adapter.mirai.exceptions","description":"","frontmatter":{},"headers":[{"level":2,"title":"class MiraiException(self, /, args, *kwargs) {#MiraiException}","slug":"MiraiException"},{"level":2,"title":"class NetworkError(self, /, args, *kwargs) {#NetworkError}","slug":"NetworkError"},{"level":2,"title":"class ActionFailed(self, code, resp) {#ActionFailed}","slug":"ActionFailed"},{"level":2,"title":"class ApiTimeout(self, /, args, *kwargs) {#ApiTimeout}","slug":"ApiTimeout"}],"relativePath":"api/adapter/mirai/exceptions.md","lastUpdated":null}'),t={name:"api/adapter/mirai/exceptions.md"},o=r('<h1 id="alicebot-adapter-mirai-exceptions" tabindex="-1">alicebot.adapter.mirai.exceptions <a class="header-anchor" href="#alicebot-adapter-mirai-exceptions" aria-hidden="true">#</a></h1><p>Mirai \u9002\u914D\u5668\u5F02\u5E38\u3002</p><h2 id="MiraiException" tabindex="-1"><em>class</em> <code>MiraiException</code>(self, /, *args, **kwargs) <a class="header-anchor" href="#MiraiException" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.exceptions.AdapterException</code></p><p>Mirai \u5F02\u5E38\u57FA\u7C7B\u3002</p><h2 id="NetworkError" tabindex="-1"><em>class</em> <code>NetworkError</code>(self, /, *args, **kwargs) <a class="header-anchor" href="#NetworkError" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.mirai.exceptions.MiraiException</code></p><p>\u7F51\u7EDC\u5F02\u5E38\u3002</p><h2 id="ActionFailed" tabindex="-1"><em>class</em> <code>ActionFailed</code>(self, code, resp) <a class="header-anchor" href="#ActionFailed" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.mirai.exceptions.MiraiException</code></p><p>API \u8BF7\u6C42\u6210\u529F\u54CD\u5E94\uFF0C\u4F46\u54CD\u5E94\u8868\u793A API \u64CD\u4F5C\u5931\u8D25\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><p><strong>code</strong></p></li><li><p><strong>resp</strong></p></li></ul></li></ul><h2 id="ApiTimeout" tabindex="-1"><em>class</em> <code>ApiTimeout</code>(self, /, *args, **kwargs) <a class="header-anchor" href="#ApiTimeout" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.mirai.exceptions.MiraiException</code></p><p>API \u8BF7\u6C42\u54CD\u5E94\u8D85\u65F6\u3002</p>',15),s=[o];function c(p,d,l,n,h,m){return i(),a("div",null,s)}var u=e(t,[["render",c]]);export{_ as __pageData,u as default};
