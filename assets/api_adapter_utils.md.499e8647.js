import{_ as e,c as t,o as r,a as s}from"./app.bec4a1f1.js";const b=JSON.parse('{"title":"alicebot.adapter.utils","description":"","frontmatter":{},"headers":[{"level":2,"title":"abstract class PollingAdapter(self, bot) {#PollingAdapter}","slug":"PollingAdapter"},{"level":3,"title":"async method on_tick(self) {#PollingAdapter.on_tick}","slug":"PollingAdapter.on_tick"},{"level":3,"title":"async method run(self) {#PollingAdapter.run}","slug":"PollingAdapter.run"},{"level":2,"title":"abstract class HttpClientAdapter(self, bot) {#HttpClientAdapter}","slug":"HttpClientAdapter"},{"level":3,"title":"async method on_tick(self) {#HttpClientAdapter.on_tick}","slug":"HttpClientAdapter.on_tick"},{"level":3,"title":"async method shutdown(self) {#HttpClientAdapter.shutdown}","slug":"HttpClientAdapter.shutdown"},{"level":3,"title":"async method startup(self) {#HttpClientAdapter.startup}","slug":"HttpClientAdapter.startup"},{"level":2,"title":"abstract class WebSocketClientAdapter(self, bot) {#WebSocketClientAdapter}","slug":"WebSocketClientAdapter"},{"level":3,"title":"method handle_response(self, msg) {#WebSocketClientAdapter.handle_response}","slug":"WebSocketClientAdapter.handle_response"},{"level":3,"title":"async method run(self) {#WebSocketClientAdapter.run}","slug":"WebSocketClientAdapter.run"},{"level":2,"title":"abstract class HttpServerAdapter(self, bot) {#HttpServerAdapter}","slug":"HttpServerAdapter"},{"level":3,"title":"async method handle_response(self, request) {#HttpServerAdapter.handle_response}","slug":"HttpServerAdapter.handle_response"},{"level":3,"title":"async method run(self) {#HttpServerAdapter.run}","slug":"HttpServerAdapter.run"},{"level":3,"title":"async method shutdown(self) {#HttpServerAdapter.shutdown}","slug":"HttpServerAdapter.shutdown"},{"level":3,"title":"async method startup(self) {#HttpServerAdapter.startup}","slug":"HttpServerAdapter.startup"},{"level":2,"title":"abstract class WebSocketServerAdapter(self, bot) {#WebSocketServerAdapter}","slug":"WebSocketServerAdapter"},{"level":3,"title":"async method handle_response(self, request) {#WebSocketServerAdapter.handle_response}","slug":"WebSocketServerAdapter.handle_response"},{"level":3,"title":"async method handle_ws_response(self, msg) {#WebSocketServerAdapter.handlewsresponse}","slug":"WebSocketServerAdapter.handle_ws_response"},{"level":3,"title":"async method run(self) {#WebSocketServerAdapter.run}","slug":"WebSocketServerAdapter.run"},{"level":3,"title":"async method shutdown(self) {#WebSocketServerAdapter.shutdown}","slug":"WebSocketServerAdapter.shutdown"},{"level":3,"title":"async method startup(self) {#WebSocketServerAdapter.startup}","slug":"WebSocketServerAdapter.startup"},{"level":2,"title":"abstract class WebSocketAdapter(self, bot) {#WebSocketAdapter}","slug":"WebSocketAdapter"},{"level":3,"title":"async method handle_reverse_ws_response(self, request) {#WebSocketAdapter.handlereversews_response}","slug":"WebSocketAdapter.handle_reverse_ws_response"},{"level":3,"title":"async method handle_websocket(self) {#WebSocketAdapter.handle_websocket}","slug":"WebSocketAdapter.handle_websocket"},{"level":3,"title":"async method handle_websocket_msg(self, msg) {#WebSocketAdapter.handlewebsocketmsg}","slug":"WebSocketAdapter.handle_websocket_msg"},{"level":3,"title":"async method reverse_ws_connection_hook(self) {#WebSocketAdapter.reversewsconnection_hook}","slug":"WebSocketAdapter.reverse_ws_connection_hook"},{"level":3,"title":"async method run(self) {#WebSocketAdapter.run}","slug":"WebSocketAdapter.run"},{"level":3,"title":"async method shutdown(self) {#WebSocketAdapter.shutdown}","slug":"WebSocketAdapter.shutdown"},{"level":3,"title":"async method startup(self) {#WebSocketAdapter.startup}","slug":"WebSocketAdapter.startup"},{"level":3,"title":"async method websocket_connect(self) {#WebSocketAdapter.websocket_connect}","slug":"WebSocketAdapter.websocket_connect"}],"relativePath":"api/adapter/utils.md","lastUpdated":null}'),a={name:"api/adapter/utils.md"},o=s('<h1 id="alicebot-adapter-utils" tabindex="-1">alicebot.adapter.utils <a class="header-anchor" href="#alicebot-adapter-utils" aria-hidden="true">#</a></h1><p>\u9002\u914D\u5668\u5B9E\u7528\u5DE5\u5177\u3002</p><p>\u8FD9\u91CC\u5B9A\u4E49\u4E86\u4E00\u4E9B\u5728\u7F16\u5199\u9002\u914D\u5668\u65F6\u5E38\u7528\u7684\u57FA\u7C7B\uFF0C\u9002\u914D\u5668\u5F00\u53D1\u8005\u53EF\u4EE5\u76F4\u63A5\u7EE7\u627F\u81EA\u8FD9\u91CC\u7684\u7C7B\u6216\u8005\u7528\u4F5C\u53C2\u8003\u3002</p><h2 id="PollingAdapter" tabindex="-1"><em>abstract class</em> <code>PollingAdapter</code>(self, bot) <a class="header-anchor" href="#PollingAdapter" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.Adapter</code></p><p>\u8F6E\u8BE2\u5F0F\u9002\u914D\u5668\u793A\u4F8B\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>bot</strong> (<em>Bot</em>)</li></ul></li><li><p><strong>Attributes</strong></p><ul><li><p><strong>delay</strong> (<em>Union[int, float]</em>)</p></li><li><p><strong>create_task</strong> (<em>bool</em>)</p></li></ul></li></ul><h3 id="PollingAdapter.on_tick" tabindex="-1"><em>async method</em> <code>on_tick(self)</code> <a class="header-anchor" href="#PollingAdapter.on_tick" aria-hidden="true">#</a></h3><h3 id="PollingAdapter.run" tabindex="-1"><em>async method</em> <code>run(self)</code> <a class="header-anchor" href="#PollingAdapter.run" aria-hidden="true">#</a></h3><p>\u9002\u914D\u5668\u8FD0\u884C\u65B9\u6CD5\uFF0C\u9002\u914D\u5668\u5F00\u53D1\u8005\u5FC5\u987B\u5B9E\u73B0\u8BE5\u65B9\u6CD5\u3002</p><p>\u9002\u914D\u5668\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4FDD\u6301\u4FDD\u6301\u8FD0\u884C\uFF0C\u5F53\u6B64\u65B9\u6CD5\u7ED3\u675F\u540E\uFF0CAliceBot \u4E0D\u4F1A\u81EA\u52A8\u91CD\u65B0\u542F\u52A8\u9002\u914D\u5668\u3002</p><h2 id="HttpClientAdapter" tabindex="-1"><em>abstract class</em> <code>HttpClientAdapter</code>(self, bot) <a class="header-anchor" href="#HttpClientAdapter" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.utils.PollingAdapter</code></p><p>HTTP \u5BA2\u6237\u7AEF\u9002\u914D\u5668\u793A\u4F8B\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>bot</strong> (<em>Bot</em>)</li></ul></li><li><p><strong>Attributes</strong></p><ul><li><strong>session</strong> (<em>aiohttp.client.ClientSession</em>)</li></ul></li></ul><h3 id="HttpClientAdapter.on_tick" tabindex="-1"><em>async method</em> <code>on_tick(self)</code> <a class="header-anchor" href="#HttpClientAdapter.on_tick" aria-hidden="true">#</a></h3><h3 id="HttpClientAdapter.shutdown" tabindex="-1"><em>async method</em> <code>shutdown(self)</code> <a class="header-anchor" href="#HttpClientAdapter.shutdown" aria-hidden="true">#</a></h3><p>\u5728\u9002\u914D\u5668\u7ED3\u675F\u8FD0\u884C\u65F6\u8FD0\u884C\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5B89\u5168\u5730\u5173\u95ED\u9002\u914D\u5668\u3002</p><p>AliceBot \u5728\u63A5\u6536\u5230\u7CFB\u7EDF\u7684\u7ED3\u675F\u4FE1\u53F7\u540E\u4F9D\u6B21\u8FD0\u884C\u5E76\u7B49\u5F85\u6240\u6709\u9002\u914D\u5668\u7684 <code>shutdown()</code> \u65B9\u6CD5\u3002 \u5F53\u5F3A\u5236\u9000\u51FA\u65F6\u6B64\u65B9\u6CD5\u53EF\u80FD\u672A\u88AB\u6267\u884C\u3002</p><h3 id="HttpClientAdapter.startup" tabindex="-1"><em>async method</em> <code>startup(self)</code> <a class="header-anchor" href="#HttpClientAdapter.startup" aria-hidden="true">#</a></h3><p>\u5728\u9002\u914D\u5668\u5F00\u59CB\u8FD0\u884C\u524D\u8FD0\u884C\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u521D\u59CB\u5316\u9002\u914D\u5668\u3002</p><p>AliceBot \u4F9D\u6B21\u8FD0\u884C\u5E76\u7B49\u5F85\u6240\u6709\u9002\u914D\u5668\u7684 <code>startup()</code> \u65B9\u6CD5\uFF0C\u5F85\u8FD0\u884C\u5B8C\u6BD5\u540E\u518D\u521B\u5EFA <code>run()</code> \u4EFB\u52A1\u3002</p><h2 id="WebSocketClientAdapter" tabindex="-1"><em>abstract class</em> <code>WebSocketClientAdapter</code>(self, bot) <a class="header-anchor" href="#WebSocketClientAdapter" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.Adapter</code></p><p>WebSocket \u5BA2\u6237\u7AEF\u9002\u914D\u5668\u793A\u4F8B\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>bot</strong> (<em>Bot</em>)</li></ul></li><li><p><strong>Attributes</strong></p><ul><li><strong>url</strong> (<em>str</em>)</li></ul></li></ul><h3 id="WebSocketClientAdapter.handle_response" tabindex="-1"><em>method</em> <code>handle_response(self, msg)</code> <a class="header-anchor" href="#WebSocketClientAdapter.handle_response" aria-hidden="true">#</a></h3><ul><li><p><strong>Arguments</strong></p><ul><li><strong>msg</strong> (<em>aiohttp.http_websocket.WSMessage</em>)</li></ul></li></ul><h3 id="WebSocketClientAdapter.run" tabindex="-1"><em>async method</em> <code>run(self)</code> <a class="header-anchor" href="#WebSocketClientAdapter.run" aria-hidden="true">#</a></h3><p>\u9002\u914D\u5668\u8FD0\u884C\u65B9\u6CD5\uFF0C\u9002\u914D\u5668\u5F00\u53D1\u8005\u5FC5\u987B\u5B9E\u73B0\u8BE5\u65B9\u6CD5\u3002</p><p>\u9002\u914D\u5668\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4FDD\u6301\u4FDD\u6301\u8FD0\u884C\uFF0C\u5F53\u6B64\u65B9\u6CD5\u7ED3\u675F\u540E\uFF0CAliceBot \u4E0D\u4F1A\u81EA\u52A8\u91CD\u65B0\u542F\u52A8\u9002\u914D\u5668\u3002</p><h2 id="HttpServerAdapter" tabindex="-1"><em>abstract class</em> <code>HttpServerAdapter</code>(self, bot) <a class="header-anchor" href="#HttpServerAdapter" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.Adapter</code></p><p>HTTP \u670D\u52A1\u7AEF\u9002\u914D\u5668\u793A\u4F8B\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>bot</strong> (<em>Bot</em>)</li></ul></li><li><p><strong>Attributes</strong></p><ul><li><p><strong>app</strong> (<em>aiohttp.web_app.Application</em>)</p></li><li><p><strong>runner</strong> (<em>aiohttp.web_runner.AppRunner</em>)</p></li><li><p><strong>site</strong> (<em>aiohttp.web_runner.TCPSite</em>)</p></li><li><p><strong>host</strong> (<em>str</em>)</p></li><li><p><strong>port</strong> (<em>int</em>)</p></li><li><p><strong>get_url</strong> (<em>str</em>)</p></li><li><p><strong>post_url</strong> (<em>str</em>)</p></li></ul></li></ul><h3 id="HttpServerAdapter.handle_response" tabindex="-1"><em>async method</em> <code>handle_response(self, request)</code> <a class="header-anchor" href="#HttpServerAdapter.handle_response" aria-hidden="true">#</a></h3><ul><li><p><strong>Arguments</strong></p><ul><li><strong>request</strong> (<em>aiohttp.web_request.Request</em>)</li></ul></li></ul><h3 id="HttpServerAdapter.run" tabindex="-1"><em>async method</em> <code>run(self)</code> <a class="header-anchor" href="#HttpServerAdapter.run" aria-hidden="true">#</a></h3><p>\u9002\u914D\u5668\u8FD0\u884C\u65B9\u6CD5\uFF0C\u9002\u914D\u5668\u5F00\u53D1\u8005\u5FC5\u987B\u5B9E\u73B0\u8BE5\u65B9\u6CD5\u3002</p><p>\u9002\u914D\u5668\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4FDD\u6301\u4FDD\u6301\u8FD0\u884C\uFF0C\u5F53\u6B64\u65B9\u6CD5\u7ED3\u675F\u540E\uFF0CAliceBot \u4E0D\u4F1A\u81EA\u52A8\u91CD\u65B0\u542F\u52A8\u9002\u914D\u5668\u3002</p><h3 id="HttpServerAdapter.shutdown" tabindex="-1"><em>async method</em> <code>shutdown(self)</code> <a class="header-anchor" href="#HttpServerAdapter.shutdown" aria-hidden="true">#</a></h3><p>\u5728\u9002\u914D\u5668\u7ED3\u675F\u8FD0\u884C\u65F6\u8FD0\u884C\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5B89\u5168\u5730\u5173\u95ED\u9002\u914D\u5668\u3002</p><p>AliceBot \u5728\u63A5\u6536\u5230\u7CFB\u7EDF\u7684\u7ED3\u675F\u4FE1\u53F7\u540E\u4F9D\u6B21\u8FD0\u884C\u5E76\u7B49\u5F85\u6240\u6709\u9002\u914D\u5668\u7684 <code>shutdown()</code> \u65B9\u6CD5\u3002 \u5F53\u5F3A\u5236\u9000\u51FA\u65F6\u6B64\u65B9\u6CD5\u53EF\u80FD\u672A\u88AB\u6267\u884C\u3002</p><h3 id="HttpServerAdapter.startup" tabindex="-1"><em>async method</em> <code>startup(self)</code> <a class="header-anchor" href="#HttpServerAdapter.startup" aria-hidden="true">#</a></h3><p>\u5728\u9002\u914D\u5668\u5F00\u59CB\u8FD0\u884C\u524D\u8FD0\u884C\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u521D\u59CB\u5316\u9002\u914D\u5668\u3002</p><p>AliceBot \u4F9D\u6B21\u8FD0\u884C\u5E76\u7B49\u5F85\u6240\u6709\u9002\u914D\u5668\u7684 <code>startup()</code> \u65B9\u6CD5\uFF0C\u5F85\u8FD0\u884C\u5B8C\u6BD5\u540E\u518D\u521B\u5EFA <code>run()</code> \u4EFB\u52A1\u3002</p><h2 id="WebSocketServerAdapter" tabindex="-1"><em>abstract class</em> <code>WebSocketServerAdapter</code>(self, bot) <a class="header-anchor" href="#WebSocketServerAdapter" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.Adapter</code></p><p>WebSocket \u670D\u52A1\u7AEF\u9002\u914D\u5668\u793A\u4F8B\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>bot</strong> (<em>Bot</em>)</li></ul></li><li><p><strong>Attributes</strong></p><ul><li><p><strong>app</strong> (<em>aiohttp.web_app.Application</em>)</p></li><li><p><strong>runner</strong> (<em>aiohttp.web_runner.AppRunner</em>)</p></li><li><p><strong>site</strong> (<em>aiohttp.web_runner.TCPSite</em>)</p></li><li><p><strong>websocket</strong> (<em>aiohttp.web_ws.WebSocketResponse</em>)</p></li><li><p><strong>host</strong> (<em>str</em>)</p></li><li><p><strong>port</strong> (<em>int</em>)</p></li><li><p><strong>url</strong> (<em>str</em>)</p></li></ul></li></ul><h3 id="WebSocketServerAdapter.handle_response" tabindex="-1"><em>async method</em> <code>handle_response(self, request)</code> <a class="header-anchor" href="#WebSocketServerAdapter.handle_response" aria-hidden="true">#</a></h3><ul><li><p><strong>Arguments</strong></p><ul><li><strong>request</strong> (<em>aiohttp.web_request.Request</em>)</li></ul></li></ul><h3 id="WebSocketServerAdapter.handle_ws_response" tabindex="-1"><em>async method</em> <code>handle_ws_response(self, msg)</code> <a class="header-anchor" href="#WebSocketServerAdapter.handle_ws_response" aria-hidden="true">#</a></h3><ul><li><p><strong>Arguments</strong></p><ul><li><strong>msg</strong> (<em>aiohttp.http_websocket.WSMessage</em>)</li></ul></li></ul><h3 id="WebSocketServerAdapter.run" tabindex="-1"><em>async method</em> <code>run(self)</code> <a class="header-anchor" href="#WebSocketServerAdapter.run" aria-hidden="true">#</a></h3><p>\u9002\u914D\u5668\u8FD0\u884C\u65B9\u6CD5\uFF0C\u9002\u914D\u5668\u5F00\u53D1\u8005\u5FC5\u987B\u5B9E\u73B0\u8BE5\u65B9\u6CD5\u3002</p><p>\u9002\u914D\u5668\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4FDD\u6301\u4FDD\u6301\u8FD0\u884C\uFF0C\u5F53\u6B64\u65B9\u6CD5\u7ED3\u675F\u540E\uFF0CAliceBot \u4E0D\u4F1A\u81EA\u52A8\u91CD\u65B0\u542F\u52A8\u9002\u914D\u5668\u3002</p><h3 id="WebSocketServerAdapter.shutdown" tabindex="-1"><em>async method</em> <code>shutdown(self)</code> <a class="header-anchor" href="#WebSocketServerAdapter.shutdown" aria-hidden="true">#</a></h3><p>\u5728\u9002\u914D\u5668\u7ED3\u675F\u8FD0\u884C\u65F6\u8FD0\u884C\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5B89\u5168\u5730\u5173\u95ED\u9002\u914D\u5668\u3002</p><p>AliceBot \u5728\u63A5\u6536\u5230\u7CFB\u7EDF\u7684\u7ED3\u675F\u4FE1\u53F7\u540E\u4F9D\u6B21\u8FD0\u884C\u5E76\u7B49\u5F85\u6240\u6709\u9002\u914D\u5668\u7684 <code>shutdown()</code> \u65B9\u6CD5\u3002 \u5F53\u5F3A\u5236\u9000\u51FA\u65F6\u6B64\u65B9\u6CD5\u53EF\u80FD\u672A\u88AB\u6267\u884C\u3002</p><h3 id="WebSocketServerAdapter.startup" tabindex="-1"><em>async method</em> <code>startup(self)</code> <a class="header-anchor" href="#WebSocketServerAdapter.startup" aria-hidden="true">#</a></h3><p>\u5728\u9002\u914D\u5668\u5F00\u59CB\u8FD0\u884C\u524D\u8FD0\u884C\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u521D\u59CB\u5316\u9002\u914D\u5668\u3002</p><p>AliceBot \u4F9D\u6B21\u8FD0\u884C\u5E76\u7B49\u5F85\u6240\u6709\u9002\u914D\u5668\u7684 <code>startup()</code> \u65B9\u6CD5\uFF0C\u5F85\u8FD0\u884C\u5B8C\u6BD5\u540E\u518D\u521B\u5EFA <code>run()</code> \u4EFB\u52A1\u3002</p><h2 id="WebSocketAdapter" tabindex="-1"><em>abstract class</em> <code>WebSocketAdapter</code>(self, bot) <a class="header-anchor" href="#WebSocketAdapter" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.Adapter</code></p><p>WebSocket \u9002\u914D\u5668\u793A\u4F8B\u3002</p><p>\u540C\u65F6\u652F\u6301 WebSocket \u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>bot</strong> (<em>Bot</em>)</li></ul></li><li><p><strong>Attributes</strong></p><ul><li><p><strong>websocket</strong> (<em>Union[aiohttp.web_ws.WebSocketResponse, aiohttp.client_ws.ClientWebSocketResponse]</em>)</p></li><li><p><strong>session</strong> (<em>aiohttp.client.ClientSession</em>)</p></li><li><p><strong>app</strong> (<em>aiohttp.web_app.Application</em>)</p></li><li><p><strong>runner</strong> (<em>aiohttp.web_runner.AppRunner</em>)</p></li><li><p><strong>site</strong> (<em>aiohttp.web_runner.TCPSite</em>)</p></li><li><p><strong>adapter_type</strong> (<em>Literal[&#39;ws&#39;, &#39;reverse-ws&#39;]</em>)</p></li><li><p><strong>host</strong> (<em>str</em>)</p></li><li><p><strong>port</strong> (<em>int</em>)</p></li><li><p><strong>url</strong> (<em>str</em>)</p></li><li><p><strong>reconnect_interval</strong> (<em>int</em>)</p></li></ul></li></ul><h3 id="WebSocketAdapter.handle_reverse_ws_response" tabindex="-1"><em>async method</em> <code>handle_reverse_ws_response(self, request)</code> <a class="header-anchor" href="#WebSocketAdapter.handle_reverse_ws_response" aria-hidden="true">#</a></h3><p>\u5904\u7406 aiohttp WebSocket \u670D\u52A1\u5668\u7684\u63A5\u6536\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>request</strong> (<em>aiohttp.web_request.Request</em>)</li></ul></li></ul><h3 id="WebSocketAdapter.handle_websocket" tabindex="-1"><em>async method</em> <code>handle_websocket(self)</code> <a class="header-anchor" href="#WebSocketAdapter.handle_websocket" aria-hidden="true">#</a></h3><p>\u5904\u7406 WebSocket\u3002</p><h3 id="WebSocketAdapter.handle_websocket_msg" tabindex="-1"><em>async method</em> <code>handle_websocket_msg(self, msg)</code> <a class="header-anchor" href="#WebSocketAdapter.handle_websocket_msg" aria-hidden="true">#</a></h3><p>\u5904\u7406 WebSocket \u6D88\u606F\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>msg</strong> (<em>aiohttp.http_websocket.WSMessage</em>)</li></ul></li></ul><h3 id="WebSocketAdapter.reverse_ws_connection_hook" tabindex="-1"><em>async method</em> <code>reverse_ws_connection_hook(self)</code> <a class="header-anchor" href="#WebSocketAdapter.reverse_ws_connection_hook" aria-hidden="true">#</a></h3><p>\u53CD\u5411 WebSocket \u8FDE\u63A5\u5EFA\u7ACB\u65F6\u7684\u94A9\u5B50\u51FD\u6570\u3002</p><h3 id="WebSocketAdapter.run" tabindex="-1"><em>async method</em> <code>run(self)</code> <a class="header-anchor" href="#WebSocketAdapter.run" aria-hidden="true">#</a></h3><p>\u8FD0\u884C\u9002\u914D\u5668\u3002</p><h3 id="WebSocketAdapter.shutdown" tabindex="-1"><em>async method</em> <code>shutdown(self)</code> <a class="header-anchor" href="#WebSocketAdapter.shutdown" aria-hidden="true">#</a></h3><p>\u5173\u95ED\u5E76\u6E05\u7406\u8FDE\u63A5\u3002</p><h3 id="WebSocketAdapter.startup" tabindex="-1"><em>async method</em> <code>startup(self)</code> <a class="header-anchor" href="#WebSocketAdapter.startup" aria-hidden="true">#</a></h3><p>\u521D\u59CB\u5316\u9002\u914D\u5668\u3002</p><h3 id="WebSocketAdapter.websocket_connect" tabindex="-1"><em>async method</em> <code>websocket_connect(self)</code> <a class="header-anchor" href="#WebSocketAdapter.websocket_connect" aria-hidden="true">#</a></h3><p>\u521B\u5EFA\u6B63\u5411 WebSocket \u8FDE\u63A5\u3002</p>',86),l=[o];function n(d,p,i,c,h,u){return r(),t("div",null,l)}var g=e(a,[["render",n]]);export{b as __pageData,g as default};
