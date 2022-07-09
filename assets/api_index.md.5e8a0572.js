import{_ as e,c as o,o as t,a as l}from"./app.bec4a1f1.js";const h=JSON.parse(`{"title":"alicebot","description":"","frontmatter":{},"headers":[{"level":2,"title":"class Bot(self, configfile = 'config.json', configdict = None) {#Bot}","slug":"Bot"},{"level":3,"title":"method adapter_run_hook(self, func) {#Bot.adapterrunhook}","slug":"Bot.adapter_run_hook"},{"level":3,"title":"method adapter_shutdown_hook(self, func) {#Bot.adaptershutdownhook}","slug":"Bot.adapter_shutdown_hook"},{"level":3,"title":"method adapter_startup_hook(self, func) {#Bot.adapterstartuphook}","slug":"Bot.adapter_startup_hook"},{"level":3,"title":"method bot_exit_hook(self, func) {#Bot.botexithook}","slug":"Bot.bot_exit_hook"},{"level":3,"title":"method bot_run_hook(self, func) {#Bot.botrunhook}","slug":"Bot.bot_run_hook"},{"level":3,"title":"method event_postprocessor_hook(self, func) {#Bot.eventpostprocessorhook}","slug":"Bot.event_postprocessor_hook"},{"level":3,"title":"method event_preprocessor_hook(self, func) {#Bot.eventpreprocessorhook}","slug":"Bot.event_preprocessor_hook"},{"level":3,"title":"async method get(self, func = None, *, max_try_times = None, timeout = None) {#Bot.get}","slug":"Bot.get"},{"level":3,"title":"method get_loaded_adapter_by_name(self, name) {#Bot.getloadedadapterbyname}","slug":"Bot.get_loaded_adapter_by_name"},{"level":3,"title":"async method handle_event(self, current_event, *, handle_get = True, show_log = True) {#Bot.handle_event}","slug":"Bot.handle_event"},{"level":3,"title":"method load_adapter(self, name) {#Bot.load_adapter}","slug":"Bot.load_adapter"},{"level":3,"title":"method load_plugin(self, name) {#Bot.load_plugin}","slug":"Bot.load_plugin"},{"level":3,"title":"method load_plugin_from_class(self, plugin_class, config_class = None) {#Bot.loadpluginfrom_class}","slug":"Bot.load_plugin_from_class"},{"level":3,"title":"method load_plugins_from_dir(self, path) {#Bot.loadpluginsfrom_dir}","slug":"Bot.load_plugins_from_dir"},{"level":3,"title":"readonly property plugins {#Bot.plugins}","slug":"Bot.plugins"},{"level":3,"title":"method run(self) {#Bot.run}","slug":"Bot.run"}],"relativePath":"api/index.md","lastUpdated":null}`),n={name:"api/index.md"},r=l('<h1 id="alicebot" tabindex="-1">alicebot <a class="header-anchor" href="#alicebot" aria-hidden="true">#</a></h1><h2 id="Bot" tabindex="-1"><em>class</em> <code>Bot</code>(self, config_file = &#39;config.json&#39;, config_dict = None) <a class="header-anchor" href="#Bot" aria-hidden="true">#</a></h2><p>Bases: <code>object</code></p><p>AliceBot \u673A\u5668\u4EBA\u5BF9\u8C61\uFF0C\u5B9A\u4E49\u4E86\u673A\u5668\u4EBA\u7684\u57FA\u672C\u65B9\u6CD5\u3002</p><p>\u8BFB\u53D6\u5E76\u50A8\u5B58\u914D\u7F6E <code>Config</code>\uFF0C\u52A0\u8F7D\u9002\u914D\u5668 <code>Adapter</code> \u548C\u63D2\u4EF6 <code>Plugin</code>\uFF0C\u5E76\u8FDB\u884C\u4E8B\u4EF6\u5206\u53D1\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><p><strong>config_file</strong> (<em>Union[str, NoneType]</em>) - \u914D\u7F6E\u6587\u4EF6\uFF0C\u5982\u4E0D\u6307\u5B9A\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684 <code>config.json</code>\u3002 \u82E5\u6307\u5B9A\u4E3A None\uFF0C\u5219\u4E0D\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\u3002</p></li><li><p><strong>config_dict</strong> (<em>Union[Dict, NoneType]</em>) - \u914D\u7F6E\u5B57\u5178\uFF0C\u9ED8\u8BA4\u4E3A None\u3002 \u82E5\u6307\u5B9A\u5B57\u5178\uFF0C\u5219\u4F1A\u5FFD\u7565 config_file \u914D\u7F6E\uFF0C\u4E0D\u518D\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u3002</p></li></ul></li><li><p><strong>Attributes</strong></p><ul><li><p><strong>config</strong> (<em>alicebot.config.MainConfig</em>) - \u673A\u5668\u4EBA\u914D\u7F6E\u3002</p></li><li><p><strong>config_dict</strong> (<em>Dict[str, Any]</em>) - \u673A\u5668\u4EBA\u914D\u7F6E\u5B57\u5178\u3002</p></li><li><p><strong>should_exit</strong> (<em>asyncio.locks.Event</em>) - \u673A\u5668\u4EBA\u662F\u5426\u5E94\u8BE5\u8FDB\u5165\u51C6\u5907\u9000\u51FA\u72B6\u6001\u3002</p></li><li><p><strong>adapters</strong> (<em>List[alicebot.adapter.Adapter]</em>) - \u9002\u914D\u5668\u5217\u8868\u3002</p></li><li><p><strong>plugins_priority_dict</strong> (<em>Dict[int, List[Type[alicebot.plugin.Plugin]]]</em>) - \u63D2\u4EF6\u4F18\u5148\u7EA7\u5B57\u5178\u3002</p></li><li><p><strong>plugin_state</strong> (<em>Dict[Type[alicebot.plugin.Plugin], Any]</em>) - \u63D2\u4EF6\u72B6\u6001\u3002</p></li><li><p><strong>global_state</strong> (<em>Dict[Any, Any]</em>) - \u5168\u5C40\u72B6\u6001\u3002</p></li></ul></li></ul><h3 id="Bot.adapter_run_hook" tabindex="-1"><em>method</em> <code>adapter_run_hook(self, func)</code> <a class="header-anchor" href="#Bot.adapter_run_hook" aria-hidden="true">#</a></h3><p>\u6CE8\u518C\u4E00\u4E2A\u9002\u914D\u5668\u8FD0\u884C\u65F6\u7684\u51FD\u6570\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>func</strong> (<em>Callable[[~T_Adapter], Awaitable[NoReturn]]</em>) - \u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Callable[[~T_Adapter], Awaitable[NoReturn]]</em></p><p>\u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</p></li></ul><h3 id="Bot.adapter_shutdown_hook" tabindex="-1"><em>method</em> <code>adapter_shutdown_hook(self, func)</code> <a class="header-anchor" href="#Bot.adapter_shutdown_hook" aria-hidden="true">#</a></h3><p>\u6CE8\u518C\u4E00\u4E2A\u9002\u914D\u5668\u5173\u95ED\u65F6\u7684\u51FD\u6570\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>func</strong> (<em>Callable[[~T_Adapter], Awaitable[NoReturn]]</em>) - \u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Callable[[~T_Adapter], Awaitable[NoReturn]]</em></p><p>\u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</p></li></ul><h3 id="Bot.adapter_startup_hook" tabindex="-1"><em>method</em> <code>adapter_startup_hook(self, func)</code> <a class="header-anchor" href="#Bot.adapter_startup_hook" aria-hidden="true">#</a></h3><p>\u6CE8\u518C\u4E00\u4E2A\u9002\u914D\u5668\u521D\u59CB\u5316\u65F6\u7684\u51FD\u6570\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>func</strong> (<em>Callable[[~T_Adapter], Awaitable[NoReturn]]</em>) - \u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Callable[[~T_Adapter], Awaitable[NoReturn]]</em></p><p>\u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</p></li></ul><h3 id="Bot.bot_exit_hook" tabindex="-1"><em>method</em> <code>bot_exit_hook(self, func)</code> <a class="header-anchor" href="#Bot.bot_exit_hook" aria-hidden="true">#</a></h3><p>\u6CE8\u518C\u4E00\u4E2A Bot \u9000\u51FA\u65F6\u7684\u51FD\u6570\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>func</strong> (<em>Callable[[Bot], NoReturn]</em>) - \u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Callable[[Bot], NoReturn]</em></p><p>\u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</p></li></ul><h3 id="Bot.bot_run_hook" tabindex="-1"><em>method</em> <code>bot_run_hook(self, func)</code> <a class="header-anchor" href="#Bot.bot_run_hook" aria-hidden="true">#</a></h3><p>\u6CE8\u518C\u4E00\u4E2A Bot \u542F\u52A8\u65F6\u7684\u51FD\u6570\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>func</strong> (<em>Callable[[Bot], Awaitable[NoReturn]]</em>) - \u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Callable[[Bot], Awaitable[NoReturn]]</em></p><p>\u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</p></li></ul><h3 id="Bot.event_postprocessor_hook" tabindex="-1"><em>method</em> <code>event_postprocessor_hook(self, func)</code> <a class="header-anchor" href="#Bot.event_postprocessor_hook" aria-hidden="true">#</a></h3><p>\u6CE8\u518C\u4E00\u4E2A\u4E8B\u4EF6\u540E\u5904\u7406\u51FD\u6570\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>func</strong> (<em>Callable[[~T_Event], Awaitable[NoReturn]]</em>) - \u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Callable[[~T_Event], Awaitable[NoReturn]]</em></p><p>\u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</p></li></ul><h3 id="Bot.event_preprocessor_hook" tabindex="-1"><em>method</em> <code>event_preprocessor_hook(self, func)</code> <a class="header-anchor" href="#Bot.event_preprocessor_hook" aria-hidden="true">#</a></h3><p>\u6CE8\u518C\u4E00\u4E2A\u4E8B\u4EF6\u9884\u5904\u7406\u51FD\u6570\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>func</strong> (<em>Callable[[~T_Event], Awaitable[NoReturn]]</em>) - \u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Callable[[~T_Event], Awaitable[NoReturn]]</em></p><p>\u88AB\u6CE8\u518C\u7684\u51FD\u6570\u3002</p></li></ul><h3 id="Bot.get" tabindex="-1"><em>async method</em> <code>get(self, func = None, *, max_try_times = None, timeout = None)</code> <a class="header-anchor" href="#Bot.get" aria-hidden="true">#</a></h3><p>\u83B7\u53D6\u6EE1\u8DB3\u6307\u5B9A\u6761\u4EF6\u7684\u7684\u4E8B\u4EF6\uFF0C\u534F\u7A0B\u4F1A\u7B49\u5F85\u76F4\u5230\u9002\u914D\u5668\u63A5\u6536\u5230\u6EE1\u8DB3\u6761\u4EF6\u7684\u4E8B\u4EF6\u3001\u8D85\u8FC7\u6700\u5927\u4E8B\u4EF6\u6570\u6216\u8D85\u65F6\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><p><strong>func</strong> (<em>Union[Callable[[~T_Event], Union[bool, Awaitable[bool]]], NoneType]</em>) - \u534F\u7A0B\u6216\u8005\u51FD\u6570\uFF0C\u51FD\u6570\u4F1A\u88AB\u81EA\u52A8\u5305\u88C5\u4E3A\u534F\u7A0B\u6267\u884C\u3002 \u8981\u6C42\u63A5\u53D7\u4E00\u4E2A\u4E8B\u4EF6\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u5E03\u5C14\u503C\u3002\u5F53\u534F\u7A0B\u8FD4\u56DE <code>True</code> \u65F6\u8FD4\u56DE\u5F53\u524D\u4E8B\u4EF6\u3002 \u5F53\u4E3A <code>None</code> \u65F6\u76F8\u5F53\u4E8E\u8F93\u5165\u5BF9\u4E8E\u4EFB\u4F55\u4E8B\u4EF6\u5747\u8FD4\u56DE\u771F\u7684\u534F\u7A0B\uFF0C\u5373\u8FD4\u56DE\u9002\u914D\u5668\u63A5\u6536\u5230\u7684\u4E0B\u4E00\u4E2A\u4E8B\u4EF6\u3002</p></li><li><p><strong>max_try_times</strong> (<em>Union[int, NoneType]</em>) - \u6700\u5927\u4E8B\u4EF6\u6570\u3002</p></li><li><p><strong>timeout</strong> (<em>Union[int, float, NoneType]</em>) - \u8D85\u65F6\u65F6\u95F4\u3002</p></li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>~T_Event</em></p><p>\u8FD4\u56DE\u6EE1\u8DB3 func \u6761\u4EF6\u7684\u4E8B\u4EF6\u3002</p></li><li><p><strong>Raises</strong></p><ul><li><strong>GetEventTimeout</strong> - \u8D85\u8FC7\u6700\u5927\u4E8B\u4EF6\u6570\u6216\u8D85\u65F6\u3002</li></ul></li></ul><h3 id="Bot.get_loaded_adapter_by_name" tabindex="-1"><em>method</em> <code>get_loaded_adapter_by_name(self, name)</code> <a class="header-anchor" href="#Bot.get_loaded_adapter_by_name" aria-hidden="true">#</a></h3><p>\u6309\u7167\u540D\u79F0\u83B7\u53D6\u5DF2\u7ECF\u52A0\u8F7D\u7684\u9002\u914D\u5668\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>name</strong> (<em>str</em>) - \u9002\u914D\u5668\u540D\u79F0\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>alicebot.adapter.Adapter</em></p><p>\u83B7\u53D6\u5230\u7684\u9002\u914D\u5668\u5BF9\u8C61\u3002</p></li><li><p><strong>Raises</strong></p><ul><li><strong>LookupError</strong> - \u627E\u4E0D\u5230\u6B64\u540D\u79F0\u7684\u9002\u914D\u5668\u5BF9\u8C61\u3002</li></ul></li></ul><h3 id="Bot.handle_event" tabindex="-1"><em>async method</em> <code>handle_event(self, current_event, *, handle_get = True, show_log = True)</code> <a class="header-anchor" href="#Bot.handle_event" aria-hidden="true">#</a></h3><p>\u88AB\u9002\u914D\u5668\u5BF9\u8C61\u8C03\u7528\uFF0C\u6839\u636E\u4F18\u5148\u7EA7\u5206\u53D1\u4E8B\u4EF6\u7ED9\u6240\u6709\u63D2\u4EF6\uFF0C\u5E76\u5904\u7406\u63D2\u4EF6\u7684 <code>stop</code> \u3001 <code>skip</code> \u7B49\u4FE1\u53F7\u3002</p><p>\u6B64\u65B9\u6CD5\u4E0D\u5E94\u8BE5\u88AB\u7528\u6237\u624B\u52A8\u8C03\u7528\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><p><strong>current_event</strong> (<em>~T_Event</em>) - \u5F53\u524D\u5F85\u5904\u7406\u7684 <code>Event</code>\u3002</p></li><li><p><strong>handle_get</strong> (<em>bool</em>) - \u5F53\u524D\u4E8B\u4EF6\u662F\u5426\u53EF\u4EE5\u88AB get \u65B9\u6CD5\u6355\u83B7\uFF0C\u9ED8\u8BA4\u4E3A True\u3002</p></li><li><p><strong>show_log</strong> (<em>bool</em>) - \u662F\u5426\u5728\u65E5\u5FD7\u4E2D\u663E\u793A\uFF0C\u9ED8\u8BA4\u4E3A True\u3002</p></li></ul></li></ul><h3 id="Bot.load_adapter" tabindex="-1"><em>method</em> <code>load_adapter(self, name)</code> <a class="header-anchor" href="#Bot.load_adapter" aria-hidden="true">#</a></h3><p>\u52A0\u8F7D\u5355\u4E2A\u9002\u914D\u5668\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>name</strong> (<em>str</em>) - \u9002\u914D\u5668\u540D\u79F0\uFF0C\u683C\u5F0F\u548C Python <code>import</code> \u8BED\u53E5\u76F8\u540C\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Union[alicebot.adapter.Adapter, NoneType]</em></p><p>\u88AB\u52A0\u8F7D\u7684\u9002\u914D\u5668\u5BF9\u8C61\u3002</p></li></ul><h3 id="Bot.load_plugin" tabindex="-1"><em>method</em> <code>load_plugin(self, name)</code> <a class="header-anchor" href="#Bot.load_plugin" aria-hidden="true">#</a></h3><p>\u52A0\u8F7D\u5355\u4E2A\u63D2\u4EF6\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>name</strong> (<em>str</em>) - \u63D2\u4EF6\u540D\u79F0\uFF0C\u683C\u5F0F\u548C Python <code>import</code> \u8BED\u53E5\u76F8\u540C\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Union[Type[alicebot.plugin.Plugin], NoneType]</em></p><p>\u88AB\u52A0\u8F7D\u7684\u63D2\u4EF6\u7C7B\u3002</p></li></ul><h3 id="Bot.load_plugin_from_class" tabindex="-1"><em>method</em> <code>load_plugin_from_class(self, plugin_class, config_class = None)</code> <a class="header-anchor" href="#Bot.load_plugin_from_class" aria-hidden="true">#</a></h3><p>\u4ECE\u63D2\u4EF6\u7C7B\u4E2D\u624B\u52A8\u52A0\u8F7D\u63D2\u4EF6\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><p><strong>plugin_class</strong> (<em>Type[alicebot.plugin.Plugin]</em>) - \u63D2\u4EF6\u7C7B\u3002</p></li><li><p><strong>config_class</strong> (<em>Type[pydantic.main.BaseModel]</em>) - \u914D\u7F6E\u7C7B\u3002</p></li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>None</em></p></li></ul><h3 id="Bot.load_plugins_from_dir" tabindex="-1"><em>method</em> <code>load_plugins_from_dir(self, path)</code> <a class="header-anchor" href="#Bot.load_plugins_from_dir" aria-hidden="true">#</a></h3><p>\u4ECE\u6307\u5B9A\u8DEF\u5F84\u5217\u8868\u4E2D\u52A0\u8F7D\u63D2\u4EF6\uFF0C\u4EE5 <code>_</code> \u5F00\u5934\u7684\u63D2\u4EF6\u4E0D\u4F1A\u88AB\u5BFC\u5165\u3002\u8DEF\u5F84\u53EF\u4EE5\u662F\u76F8\u5BF9\u8DEF\u5F84\u6216\u7EDD\u5BF9\u8DEF\u5F84\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>path</strong> (<em>Iterable[str]</em>) - \u7531\u50A8\u5B58\u63D2\u4EF6\u7684\u8DEF\u5F84\u6587\u672C\u7EC4\u6210\u7684\u5217\u8868\u3002 \u4F8B\u5982\uFF1A <code>[&#39;path/of/plugins/&#39;, &#39;/home/xxx/alicebot/plugins&#39;]</code> \u3002</li></ul></li></ul><h3 id="Bot.plugins" tabindex="-1"><em>readonly property</em> <code>plugins</code> <a class="header-anchor" href="#Bot.plugins" aria-hidden="true">#</a></h3><p>Type: <em>List[Type[alicebot.plugin.Plugin]]</em></p><p>\u5F53\u524D\u5DF2\u7ECF\u52A0\u8F7D\u7684\u63D2\u4EF6\u7684\u5217\u8868\u3002</p><h3 id="Bot.run" tabindex="-1"><em>method</em> <code>run(self)</code> <a class="header-anchor" href="#Bot.run" aria-hidden="true">#</a></h3><p>\u8FD0\u884C AliceBot\uFF0C\u76D1\u542C\u5E76\u62E6\u622A\u7CFB\u7EDF\u9000\u51FA\u4FE1\u53F7\uFF0C\u66F4\u65B0\u673A\u5668\u4EBA\u914D\u7F6E\u3002</p>',54),a=[r];function s(i,p,d,u,g,c){return t(),o("div",null,a)}var m=e(n,[["render",s]]);export{h as __pageData,m as default};
