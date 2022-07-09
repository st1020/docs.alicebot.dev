import{_ as e,c as t,o as a,a as n}from"./app.bec4a1f1.js";const u=JSON.parse('{"title":"alicebot.adapter.dingtalk","description":"","frontmatter":{},"headers":[{"level":2,"title":"class DingTalkAdapter(self, bot) {#DingTalkAdapter}","slug":"DingTalkAdapter"},{"level":3,"title":"readonly property config {#DingTalkAdapter.config}","slug":"DingTalkAdapter.config"},{"level":3,"title":"method get_sign(self, timestamp) {#DingTalkAdapter.get_sign}","slug":"DingTalkAdapter.get_sign"},{"level":3,"title":"async method handler(self, request) {#DingTalkAdapter.handler}","slug":"DingTalkAdapter.handler"},{"level":3,"title":"async method run(self) {#DingTalkAdapter.run}","slug":"DingTalkAdapter.run"},{"level":3,"title":"async method send(self, webhook, conversation_type, msg, at = None) {#DingTalkAdapter.send}","slug":"DingTalkAdapter.send"},{"level":3,"title":"async method shutdown(self) {#DingTalkAdapter.shutdown}","slug":"DingTalkAdapter.shutdown"},{"level":3,"title":"async method startup(self) {#DingTalkAdapter.startup}","slug":"DingTalkAdapter.startup"}],"relativePath":"api/adapter/dingtalk/index.md","lastUpdated":null}'),r={name:"api/adapter/dingtalk/index.md"},i=n('<h1 id="alicebot-adapter-dingtalk" tabindex="-1">alicebot.adapter.dingtalk <a class="header-anchor" href="#alicebot-adapter-dingtalk" aria-hidden="true">#</a></h1><p>DingTalk \u534F\u8BAE\u9002\u914D\u5668\u3002</p><p>\u672C\u9002\u914D\u5668\u9002\u914D\u4E86\u9489\u9489\u4F01\u4E1A\u81EA\u5EFA\u673A\u5668\u4EBA\u534F\u8BAE\u3002 \u534F\u8BAE\u8BE6\u60C5\u8BF7\u53C2\u8003: <a href="https://developers.dingtalk.com/document/robots/robot-overview" target="_blank" rel="noopener noreferrer">\u9489\u9489\u5F00\u653E\u5E73\u53F0</a> \u3002</p><h2 id="DingTalkAdapter" tabindex="-1"><em>class</em> <code>DingTalkAdapter</code>(self, bot) <a class="header-anchor" href="#DingTalkAdapter" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.Adapter</code></p><p>\u9489\u9489\u534F\u8BAE\u9002\u914D\u5668\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>bot</strong> (<em>Bot</em>)</li></ul></li><li><p><strong>Attributes</strong></p><ul><li><p><strong>name</strong> (<em>str</em>)</p></li><li><p><strong>app</strong> (<em>aiohttp.web_app.Application</em>)</p></li><li><p><strong>runner</strong> (<em>aiohttp.web_runner.AppRunner</em>)</p></li><li><p><strong>site</strong> (<em>aiohttp.web_runner.TCPSite</em>)</p></li><li><p><strong>session</strong> (<em>aiohttp.client.ClientSession</em>)</p></li></ul></li></ul><h3 id="DingTalkAdapter.config" tabindex="-1"><em>readonly property</em> <code>config</code> <a class="header-anchor" href="#DingTalkAdapter.config" aria-hidden="true">#</a></h3><p>\u672C\u9002\u914D\u5668\u7684\u914D\u7F6E\u3002</p><h3 id="DingTalkAdapter.get_sign" tabindex="-1"><em>method</em> <code>get_sign(self, timestamp)</code> <a class="header-anchor" href="#DingTalkAdapter.get_sign" aria-hidden="true">#</a></h3><p>\u8BA1\u7B97\u7B7E\u540D\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>timestamp</strong> (<em>str</em>) - \u65F6\u95F4\u6233\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>str</em></p><p>\u7B7E\u540D\u3002</p></li></ul><h3 id="DingTalkAdapter.handler" tabindex="-1"><em>async method</em> <code>handler(self, request)</code> <a class="header-anchor" href="#DingTalkAdapter.handler" aria-hidden="true">#</a></h3><p>\u5904\u7406 aiohttp \u670D\u52A1\u5668\u7684\u63A5\u6536\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>request</strong> (<em>aiohttp.web_request.Request</em>) - aiohttp \u670D\u52A1\u5668\u7684 Request \u5BF9\u8C61\u3002</li></ul></li></ul><h3 id="DingTalkAdapter.run" tabindex="-1"><em>async method</em> <code>run(self)</code> <a class="header-anchor" href="#DingTalkAdapter.run" aria-hidden="true">#</a></h3><p>\u8FD0\u884C aiohttp \u670D\u52A1\u5668\u3002</p><h3 id="DingTalkAdapter.send" tabindex="-1"><em>async method</em> <code>send(self, webhook, conversation_type, msg, at = None)</code> <a class="header-anchor" href="#DingTalkAdapter.send" aria-hidden="true">#</a></h3><p>\u53D1\u9001\u6D88\u606F\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><p><strong>webhook</strong> (<em>str</em>) - Webhook \u7F51\u5740\u3002</p></li><li><p><strong>conversation_type</strong> (<em>Literal[&#39;1&#39;, &#39;2&#39;]</em>) - \u804A\u5929\u7C7B\u578B\uFF0C&#39;1&#39; \u8868\u793A\u5355\u804A\uFF0C&#39;2&#39; \u8868\u793A\u7FA4\u804A\u3002</p></li><li><p><strong>msg</strong> (<em>Union[str, Dict, alicebot.adapter.dingtalk.message.DingTalkMessage]</em>) - \u6D88\u606F\u3002</p></li><li><p><strong>at</strong> (<em>Union[NoneType, Dict, alicebot.adapter.dingtalk.message.DingTalkMessage]</em>) - At \u5BF9\u8C61\uFF0C\u4EC5\u5728\u7FA4\u804A\u65F6\u751F\u6548\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u3002</p></li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>\u9489\u9489\u670D\u52A1\u5668\u7684\u54CD\u5E94\u3002</p></li><li><p><strong>Raises</strong></p><ul><li><p><strong>TypeError</strong> - \u4F20\u5165\u53C2\u6570\u7C7B\u578B\u9519\u8BEF\u3002</p></li><li><p><strong>ValueError</strong> - \u4F20\u5165\u53C2\u6570\u503C\u9519\u8BEF\u3002</p></li><li><p><strong>NetworkError</strong> - \u8C03\u7528 Webhook \u5730\u5740\u65F6\u7F51\u7EDC\u9519\u8BEF\u3002</p></li></ul></li></ul><h3 id="DingTalkAdapter.shutdown" tabindex="-1"><em>async method</em> <code>shutdown(self)</code> <a class="header-anchor" href="#DingTalkAdapter.shutdown" aria-hidden="true">#</a></h3><p>\u6E05\u7406 aiohttp AppRunner\u3002</p><h3 id="DingTalkAdapter.startup" tabindex="-1"><em>async method</em> <code>startup(self)</code> <a class="header-anchor" href="#DingTalkAdapter.startup" aria-hidden="true">#</a></h3><p>\u521B\u5EFA aiohttp Application\u3002</p>',24),l=[i];function s(o,p,d,g,h,c){return a(),t("div",null,l)}var k=e(r,[["render",s]]);export{u as __pageData,k as default};
