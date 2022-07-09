import{_ as e,c as s,o as a,a as t}from"./app.bec4a1f1.js";const h=JSON.parse('{"title":"alicebot.adapter.mirai.event.message","description":"","frontmatter":{},"headers":[{"level":2,"title":"class MessageEvent(self, **data) {#MessageEvent}","slug":"MessageEvent"},{"level":3,"title":"method get_plain_text(self) {#MessageEvent.getplaintext}","slug":"MessageEvent.get_plain_text"},{"level":3,"title":"readonly property message {#MessageEvent.message}","slug":"MessageEvent.message"},{"level":3,"title":"async method reply(self, msg, quote = False) {#MessageEvent.reply}","slug":"MessageEvent.reply"},{"level":2,"title":"class FriendMessage(self, **data) {#FriendMessage}","slug":"FriendMessage"},{"level":3,"title":"async method reply(self, msg, quote = False) {#FriendMessage.reply}","slug":"FriendMessage.reply"},{"level":2,"title":"class GroupMessage(self, **data) {#GroupMessage}","slug":"GroupMessage"},{"level":3,"title":"async method reply(self, msg, quote = False) {#GroupMessage.reply}","slug":"GroupMessage.reply"},{"level":2,"title":"class TempMessage(self, **data) {#TempMessage}","slug":"TempMessage"},{"level":3,"title":"async method reply(self, msg, quote = False) {#TempMessage.reply}","slug":"TempMessage.reply"},{"level":2,"title":"class StrangerMessage(self, **data) {#StrangerMessage}","slug":"StrangerMessage"},{"level":3,"title":"async method reply(self, msg, quote = False) {#StrangerMessage.reply}","slug":"StrangerMessage.reply"},{"level":2,"title":"class OtherClientMessage(self, **data) {#OtherClientMessage}","slug":"OtherClientMessage"},{"level":3,"title":"async method reply(self, msg, quote = False) {#OtherClientMessage.reply}","slug":"OtherClientMessage.reply"}],"relativePath":"api/adapter/mirai/event/message.md","lastUpdated":null}'),l={name:"api/adapter/mirai/event/message.md"},r=t('<h1 id="alicebot-adapter-mirai-event-message" tabindex="-1">alicebot.adapter.mirai.event.message <a class="header-anchor" href="#alicebot-adapter-mirai-event-message" aria-hidden="true">#</a></h1><h2 id="MessageEvent" tabindex="-1"><em>class</em> <code>MessageEvent</code>(self, **data) <a class="header-anchor" href="#MessageEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.mirai.event.base.MiraiEvent</code></p><p>\u6D88\u606F\u4E8B\u4EF6</p><ul><li><p><strong>Attributes</strong></p><ul><li><strong>messageChain</strong> (<em>alicebot.adapter.mirai.message.MiraiMessage</em>)</li></ul></li></ul><h3 id="MessageEvent.get_plain_text" tabindex="-1"><em>method</em> <code>get_plain_text(self)</code> <a class="header-anchor" href="#MessageEvent.get_plain_text" aria-hidden="true">#</a></h3><ul><li><p><strong>Returns</strong></p><p>Type: <em>str</em></p></li></ul><h3 id="MessageEvent.message" tabindex="-1"><em>readonly property</em> <code>message</code> <a class="header-anchor" href="#MessageEvent.message" aria-hidden="true">#</a></h3><h3 id="MessageEvent.reply" tabindex="-1"><em>async method</em> <code>reply(self, msg, quote = False)</code> <a class="header-anchor" href="#MessageEvent.reply" aria-hidden="true">#</a></h3><p>\u56DE\u590D\u6D88\u606F\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><p><strong>msg</strong> (<em>T_MiraiMSG</em>) - \u56DE\u590D\u6D88\u606F\u7684\u5185\u5BB9\uFF0C\u540C <code>call_api()</code> \u65B9\u6CD5\u3002</p></li><li><p><strong>quote</strong> (<em>bool</em>) - \u5F15\u7528\u6D88\u606F\uFF0C\u9ED8\u8BA4\u4E3A <code>False</code>\u3002</p></li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h2 id="FriendMessage" tabindex="-1"><em>class</em> <code>FriendMessage</code>(self, **data) <a class="header-anchor" href="#FriendMessage" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.mirai.event.message.MessageEvent</code></p><p>\u597D\u53CB\u6D88\u606F</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>type</strong> (<em>Literal[&#39;FriendMessage&#39;]</em>)</p></li><li><p><strong>sender</strong> (<em>alicebot.adapter.mirai.event.base.FriendInfo</em>)</p></li></ul></li></ul><h3 id="FriendMessage.reply" tabindex="-1"><em>async method</em> <code>reply(self, msg, quote = False)</code> <a class="header-anchor" href="#FriendMessage.reply" aria-hidden="true">#</a></h3><p>\u56DE\u590D\u6D88\u606F\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><p><strong>msg</strong> (<em>T_MiraiMSG</em>) - \u56DE\u590D\u6D88\u606F\u7684\u5185\u5BB9\uFF0C\u540C <code>call_api()</code> \u65B9\u6CD5\u3002</p></li><li><p><strong>quote</strong> (<em>bool</em>) - \u5F15\u7528\u6D88\u606F\uFF0C\u9ED8\u8BA4\u4E3A <code>False</code>\u3002</p></li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h2 id="GroupMessage" tabindex="-1"><em>class</em> <code>GroupMessage</code>(self, **data) <a class="header-anchor" href="#GroupMessage" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.mirai.event.message.MessageEvent</code></p><p>\u7FA4\u6D88\u606F</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>type</strong> (<em>Literal[&#39;GroupMessage&#39;]</em>)</p></li><li><p><strong>sender</strong> (<em>alicebot.adapter.mirai.event.base.GroupMemberInfo</em>)</p></li></ul></li></ul><h3 id="GroupMessage.reply" tabindex="-1"><em>async method</em> <code>reply(self, msg, quote = False)</code> <a class="header-anchor" href="#GroupMessage.reply" aria-hidden="true">#</a></h3><p>\u56DE\u590D\u6D88\u606F\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><p><strong>msg</strong> (<em>T_MiraiMSG</em>) - \u56DE\u590D\u6D88\u606F\u7684\u5185\u5BB9\uFF0C\u540C <code>call_api()</code> \u65B9\u6CD5\u3002</p></li><li><p><strong>quote</strong> (<em>bool</em>) - \u5F15\u7528\u6D88\u606F\uFF0C\u9ED8\u8BA4\u4E3A <code>False</code>\u3002</p></li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h2 id="TempMessage" tabindex="-1"><em>class</em> <code>TempMessage</code>(self, **data) <a class="header-anchor" href="#TempMessage" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.mirai.event.message.MessageEvent</code></p><p>\u7FA4\u4E34\u65F6\u6D88\u606F</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>type</strong> (<em>Literal[&#39;TempMessage&#39;]</em>)</p></li><li><p><strong>sender</strong> (<em>alicebot.adapter.mirai.event.base.GroupMemberInfo</em>)</p></li></ul></li></ul><h3 id="TempMessage.reply" tabindex="-1"><em>async method</em> <code>reply(self, msg, quote = False)</code> <a class="header-anchor" href="#TempMessage.reply" aria-hidden="true">#</a></h3><p>\u56DE\u590D\u6D88\u606F\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><p><strong>msg</strong> (<em>T_MiraiMSG</em>) - \u56DE\u590D\u6D88\u606F\u7684\u5185\u5BB9\uFF0C\u540C <code>call_api()</code> \u65B9\u6CD5\u3002</p></li><li><p><strong>quote</strong> (<em>bool</em>) - \u5F15\u7528\u6D88\u606F\uFF0C\u9ED8\u8BA4\u4E3A <code>False</code>\u3002</p></li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h2 id="StrangerMessage" tabindex="-1"><em>class</em> <code>StrangerMessage</code>(self, **data) <a class="header-anchor" href="#StrangerMessage" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.mirai.event.message.MessageEvent</code></p><p>\u964C\u751F\u4EBA\u6D88\u606F</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>type</strong> (<em>Literal[&#39;StrangerMessage&#39;]</em>)</p></li><li><p><strong>sender</strong> (<em>alicebot.adapter.mirai.event.base.FriendInfo</em>)</p></li></ul></li></ul><h3 id="StrangerMessage.reply" tabindex="-1"><em>async method</em> <code>reply(self, msg, quote = False)</code> <a class="header-anchor" href="#StrangerMessage.reply" aria-hidden="true">#</a></h3><p>\u56DE\u590D\u6D88\u606F\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><p><strong>msg</strong> (<em>T_MiraiMSG</em>) - \u56DE\u590D\u6D88\u606F\u7684\u5185\u5BB9\uFF0C\u540C <code>call_api()</code> \u65B9\u6CD5\u3002</p></li><li><p><strong>quote</strong> (<em>bool</em>) - \u5F15\u7528\u6D88\u606F\uFF0C\u9ED8\u8BA4\u4E3A <code>False</code>\u3002</p></li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h2 id="OtherClientMessage" tabindex="-1"><em>class</em> <code>OtherClientMessage</code>(self, **data) <a class="header-anchor" href="#OtherClientMessage" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.mirai.event.message.MessageEvent</code></p><p>\u5176\u4ED6\u5BA2\u6237\u7AEF\u6D88\u606F</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>type</strong> (<em>Literal[&#39;OtherClientMessage&#39;]</em>)</p></li><li><p><strong>sender</strong> (<em>alicebot.adapter.mirai.event.base.OtherClientSender</em>)</p></li></ul></li></ul><h3 id="OtherClientMessage.reply" tabindex="-1"><em>async method</em> <code>reply(self, msg, quote = False)</code> <a class="header-anchor" href="#OtherClientMessage.reply" aria-hidden="true">#</a></h3><p>\u56DE\u590D\u6D88\u606F\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><p><strong>msg</strong> (<em>T_MiraiMSG</em>) - \u56DE\u590D\u6D88\u606F\u7684\u5185\u5BB9\uFF0C\u540C <code>call_api()</code> \u65B9\u6CD5\u3002</p></li><li><p><strong>quote</strong> (<em>bool</em>) - \u5F15\u7528\u6D88\u606F\uFF0C\u9ED8\u8BA4\u4E3A <code>False</code>\u3002</p></li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul>',46),i=[r];function n(o,p,g,d,m,c){return a(),s("div",null,i)}var M=e(l,[["render",n]]);export{h as __pageData,M as default};
