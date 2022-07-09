import{_ as e,c as t,o as s,a as n}from"./app.bec4a1f1.js";const v=JSON.parse(`{"title":"alicebot.adapter.cqhttp.event","description":"","frontmatter":{},"headers":[{"level":2,"title":"class Sender(_pydanticself__, **data) {#Sender}","slug":"Sender"},{"level":2,"title":"class Anonymous(_pydanticself__, **data) {#Anonymous}","slug":"Anonymous"},{"level":2,"title":"class File(_pydanticself__, **data) {#File}","slug":"File"},{"level":2,"title":"class Status(_pydanticself__, **data) {#Status}","slug":"Status"},{"level":3,"title":"class Config(self, /, args, *kwargs) {#Status.Config}","slug":"Status.Config"},{"level":2,"title":"class CQHTTPEvent(self, **data) {#CQHTTPEvent}","slug":"CQHTTPEvent"},{"level":3,"title":"readonly property to_me {#CQHTTPEvent.to_me}","slug":"CQHTTPEvent.to_me"},{"level":2,"title":"class MessageEvent(self, **data) {#MessageEvent}","slug":"MessageEvent"},{"level":3,"title":"method get_plain_text(self) {#MessageEvent.getplaintext}","slug":"MessageEvent.get_plain_text"},{"level":3,"title":"async method reply(self, msg) {#MessageEvent.reply}","slug":"MessageEvent.reply"},{"level":2,"title":"class PrivateMessageEvent(self, **data) {#PrivateMessageEvent}","slug":"PrivateMessageEvent"},{"level":3,"title":"async method reply(self, msg) {#PrivateMessageEvent.reply}","slug":"PrivateMessageEvent.reply"},{"level":2,"title":"class GroupMessageEvent(self, **data) {#GroupMessageEvent}","slug":"GroupMessageEvent"},{"level":3,"title":"async method reply(self, msg) {#GroupMessageEvent.reply}","slug":"GroupMessageEvent.reply"},{"level":2,"title":"class NoticeEvent(self, **data) {#NoticeEvent}","slug":"NoticeEvent"},{"level":2,"title":"class GroupUploadNoticeEvent(self, **data) {#GroupUploadNoticeEvent}","slug":"GroupUploadNoticeEvent"},{"level":2,"title":"class GroupAdminNoticeEvent(self, **data) {#GroupAdminNoticeEvent}","slug":"GroupAdminNoticeEvent"},{"level":2,"title":"class GroupDecreaseNoticeEvent(self, **data) {#GroupDecreaseNoticeEvent}","slug":"GroupDecreaseNoticeEvent"},{"level":2,"title":"class GroupIncreaseNoticeEvent(self, **data) {#GroupIncreaseNoticeEvent}","slug":"GroupIncreaseNoticeEvent"},{"level":2,"title":"class GroupBanNoticeEvent(self, **data) {#GroupBanNoticeEvent}","slug":"GroupBanNoticeEvent"},{"level":2,"title":"class FriendAddNoticeEvent(self, **data) {#FriendAddNoticeEvent}","slug":"FriendAddNoticeEvent"},{"level":2,"title":"class GroupRecallNoticeEvent(self, **data) {#GroupRecallNoticeEvent}","slug":"GroupRecallNoticeEvent"},{"level":2,"title":"class FriendRecallNoticeEvent(self, **data) {#FriendRecallNoticeEvent}","slug":"FriendRecallNoticeEvent"},{"level":2,"title":"class NotifyEvent(self, **data) {#NotifyEvent}","slug":"NotifyEvent"},{"level":2,"title":"class PokeNotifyEvent(self, **data) {#PokeNotifyEvent}","slug":"PokeNotifyEvent"},{"level":2,"title":"class GroupLuckyKingNotifyEvent(self, **data) {#GroupLuckyKingNotifyEvent}","slug":"GroupLuckyKingNotifyEvent"},{"level":2,"title":"class GroupHonorNotifyEvent(self, **data) {#GroupHonorNotifyEvent}","slug":"GroupHonorNotifyEvent"},{"level":2,"title":"class RequestEvent(self, **data) {#RequestEvent}","slug":"RequestEvent"},{"level":3,"title":"async method approve(self) {#RequestEvent.approve}","slug":"RequestEvent.approve"},{"level":3,"title":"async method refuse(self) {#RequestEvent.refuse}","slug":"RequestEvent.refuse"},{"level":2,"title":"class FriendRequestEvent(self, **data) {#FriendRequestEvent}","slug":"FriendRequestEvent"},{"level":3,"title":"async method approve(self, remark = '') {#FriendRequestEvent.approve}","slug":"FriendRequestEvent.approve"},{"level":3,"title":"async method refuse(self) {#FriendRequestEvent.refuse}","slug":"FriendRequestEvent.refuse"},{"level":2,"title":"class GroupRequestEvent(self, **data) {#GroupRequestEvent}","slug":"GroupRequestEvent"},{"level":3,"title":"async method approve(self) {#GroupRequestEvent.approve}","slug":"GroupRequestEvent.approve"},{"level":3,"title":"async method refuse(self, reason = '') {#GroupRequestEvent.refuse}","slug":"GroupRequestEvent.refuse"},{"level":2,"title":"class MetaEvent(self, **data) {#MetaEvent}","slug":"MetaEvent"},{"level":2,"title":"class LifecycleMetaEvent(self, **data) {#LifecycleMetaEvent}","slug":"LifecycleMetaEvent"},{"level":2,"title":"class HeartbeatMetaEvent(self, **data) {#HeartbeatMetaEvent}","slug":"HeartbeatMetaEvent"},{"level":2,"title":"function get_event_class(post_type, event_type, sub_type = None)","slug":"get_event_class"}],"relativePath":"api/adapter/cqhttp/event.md","lastUpdated":null}`),l={name:"api/adapter/cqhttp/event.md"},r=n('<h1 id="alicebot-adapter-cqhttp-event" tabindex="-1">alicebot.adapter.cqhttp.event <a class="header-anchor" href="#alicebot-adapter-cqhttp-event" aria-hidden="true">#</a></h1><p>CQHTTP \u9002\u914D\u5668\u4E8B\u4EF6\u3002</p><h2 id="Sender" tabindex="-1"><em>class</em> <code>Sender</code>(<strong>pydantic_self</strong>, **data) <a class="header-anchor" href="#Sender" aria-hidden="true">#</a></h2><p>Bases: <code>pydantic.main.BaseModel</code></p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>user_id</strong> (<em>Union[int, NoneType]</em>)</p></li><li><p><strong>nickname</strong> (<em>Union[str, NoneType]</em>)</p></li><li><p><strong>card</strong> (<em>Union[str, NoneType]</em>)</p></li><li><p><strong>sex</strong> (<em>Union[Literal[&#39;male&#39;, &#39;female&#39;, &#39;unknown&#39;], NoneType]</em>)</p></li><li><p><strong>age</strong> (<em>Union[int, NoneType]</em>)</p></li><li><p><strong>area</strong> (<em>Union[str, NoneType]</em>)</p></li><li><p><strong>level</strong> (<em>Union[str, NoneType]</em>)</p></li><li><p><strong>role</strong> (<em>Union[str, NoneType]</em>)</p></li><li><p><strong>title</strong> (<em>Union[str, NoneType]</em>)</p></li></ul></li></ul><h2 id="Anonymous" tabindex="-1"><em>class</em> <code>Anonymous</code>(<strong>pydantic_self</strong>, **data) <a class="header-anchor" href="#Anonymous" aria-hidden="true">#</a></h2><p>Bases: <code>pydantic.main.BaseModel</code></p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>id</strong> (<em>int</em>)</p></li><li><p><strong>name</strong> (<em>str</em>)</p></li><li><p><strong>flag</strong> (<em>str</em>)</p></li></ul></li></ul><h2 id="File" tabindex="-1"><em>class</em> <code>File</code>(<strong>pydantic_self</strong>, **data) <a class="header-anchor" href="#File" aria-hidden="true">#</a></h2><p>Bases: <code>pydantic.main.BaseModel</code></p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>id</strong> (<em>str</em>)</p></li><li><p><strong>name</strong> (<em>str</em>)</p></li><li><p><strong>size</strong> (<em>int</em>)</p></li><li><p><strong>busid</strong> (<em>int</em>)</p></li></ul></li></ul><h2 id="Status" tabindex="-1"><em>class</em> <code>Status</code>(<strong>pydantic_self</strong>, **data) <a class="header-anchor" href="#Status" aria-hidden="true">#</a></h2><p>Bases: <code>pydantic.main.BaseModel</code></p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>online</strong> (<em>bool</em>)</p></li><li><p><strong>good</strong> (<em>bool</em>)</p></li></ul></li></ul><h3 id="Status.Config" tabindex="-1"><em>class</em> <code>Config</code>(self, /, *args, **kwargs) <a class="header-anchor" href="#Status.Config" aria-hidden="true">#</a></h3><p>Bases: <code>object</code></p><h2 id="CQHTTPEvent" tabindex="-1"><em>class</em> <code>CQHTTPEvent</code>(self, **data) <a class="header-anchor" href="#CQHTTPEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.event.Event</code></p><p>CQHTTP \u4E8B\u4EF6\u57FA\u7C7B</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>type</strong> (<em>Union[str, NoneType]</em>)</p></li><li><p><strong>time</strong> (<em>int</em>)</p></li><li><p><strong>self_id</strong> (<em>int</em>)</p></li><li><p><strong>post_type</strong> (<em>Literal[&#39;message&#39;, &#39;notice&#39;, &#39;request&#39;, &#39;meta_event&#39;]</em>)</p></li></ul></li></ul><h3 id="CQHTTPEvent.to_me" tabindex="-1"><em>readonly property</em> <code>to_me</code> <a class="header-anchor" href="#CQHTTPEvent.to_me" aria-hidden="true">#</a></h3><p>Type: <em>bool</em></p><p>\u5F53\u524D\u4E8B\u4EF6\u7684 user_id \u662F\u5426\u7B49\u4E8E self_id\u3002</p><h2 id="MessageEvent" tabindex="-1"><em>class</em> <code>MessageEvent</code>(self, **data) <a class="header-anchor" href="#MessageEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.CQHTTPEvent</code></p><p>\u6D88\u606F\u4E8B\u4EF6</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>post_type</strong> (<em>Literal[&#39;message&#39;]</em>)</p></li><li><p><strong>message_type</strong> (<em>Literal[&#39;private&#39;, &#39;group&#39;]</em>)</p></li><li><p><strong>sub_type</strong> (<em>str</em>)</p></li><li><p><strong>message_id</strong> (<em>int</em>)</p></li><li><p><strong>user_id</strong> (<em>int</em>)</p></li><li><p><strong>message</strong> (<em>alicebot.adapter.cqhttp.message.CQHTTPMessage</em>)</p></li><li><p><strong>raw_message</strong> (<em>str</em>)</p></li><li><p><strong>font</strong> (<em>int</em>)</p></li><li><p><strong>sender</strong> (<em>alicebot.adapter.cqhttp.event.Sender</em>)</p></li></ul></li></ul><h3 id="MessageEvent.get_plain_text" tabindex="-1"><em>method</em> <code>get_plain_text(self)</code> <a class="header-anchor" href="#MessageEvent.get_plain_text" aria-hidden="true">#</a></h3><p>\u83B7\u53D6\u6D88\u606F\u7684\u7EAF\u6587\u672C\u5185\u5BB9\u3002</p><ul><li><p><strong>Returns</strong></p><p>Type: <em>str</em></p><p>\u6D88\u606F\u7684\u7EAF\u6587\u672C\u5185\u5BB9\u3002</p></li></ul><h3 id="MessageEvent.reply" tabindex="-1"><em>async method</em> <code>reply(self, msg)</code> <a class="header-anchor" href="#MessageEvent.reply" aria-hidden="true">#</a></h3><p>\u56DE\u590D\u6D88\u606F\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>msg</strong> (<em>T_CQMSG</em>) - \u56DE\u590D\u6D88\u606F\u7684\u5185\u5BB9\uFF0C\u540C <code>call_api()</code> \u65B9\u6CD5\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h2 id="PrivateMessageEvent" tabindex="-1"><em>class</em> <code>PrivateMessageEvent</code>(self, **data) <a class="header-anchor" href="#PrivateMessageEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.MessageEvent</code></p><p>\u79C1\u804A\u6D88\u606F</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>message_type</strong> (<em>Literal[&#39;private&#39;]</em>)</p></li><li><p><strong>sub_type</strong> (<em>Literal[&#39;friend&#39;, &#39;group&#39;, &#39;other&#39;]</em>)</p></li></ul></li></ul><h3 id="PrivateMessageEvent.reply" tabindex="-1"><em>async method</em> <code>reply(self, msg)</code> <a class="header-anchor" href="#PrivateMessageEvent.reply" aria-hidden="true">#</a></h3><p>\u56DE\u590D\u6D88\u606F\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>msg</strong> (<em>T_CQMSG</em>) - \u56DE\u590D\u6D88\u606F\u7684\u5185\u5BB9\uFF0C\u540C <code>call_api()</code> \u65B9\u6CD5\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h2 id="GroupMessageEvent" tabindex="-1"><em>class</em> <code>GroupMessageEvent</code>(self, **data) <a class="header-anchor" href="#GroupMessageEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.MessageEvent</code></p><p>\u7FA4\u6D88\u606F</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>message_type</strong> (<em>Literal[&#39;group&#39;]</em>)</p></li><li><p><strong>sub_type</strong> (<em>Literal[&#39;normal&#39;, &#39;anonymous&#39;, &#39;notice&#39;]</em>)</p></li><li><p><strong>group_id</strong> (<em>int</em>)</p></li><li><p><strong>anonymous</strong> (<em>Union[alicebot.adapter.cqhttp.event.Anonymous, NoneType]</em>)</p></li></ul></li></ul><h3 id="GroupMessageEvent.reply" tabindex="-1"><em>async method</em> <code>reply(self, msg)</code> <a class="header-anchor" href="#GroupMessageEvent.reply" aria-hidden="true">#</a></h3><p>\u56DE\u590D\u6D88\u606F\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>msg</strong> (<em>T_CQMSG</em>) - \u56DE\u590D\u6D88\u606F\u7684\u5185\u5BB9\uFF0C\u540C <code>call_api()</code> \u65B9\u6CD5\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h2 id="NoticeEvent" tabindex="-1"><em>class</em> <code>NoticeEvent</code>(self, **data) <a class="header-anchor" href="#NoticeEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.CQHTTPEvent</code></p><p>\u901A\u77E5\u4E8B\u4EF6</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>post_type</strong> (<em>Literal[&#39;notice&#39;]</em>)</p></li><li><p><strong>notice_type</strong> (<em>str</em>)</p></li></ul></li></ul><h2 id="GroupUploadNoticeEvent" tabindex="-1"><em>class</em> <code>GroupUploadNoticeEvent</code>(self, **data) <a class="header-anchor" href="#GroupUploadNoticeEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.NoticeEvent</code></p><p>\u7FA4\u6587\u4EF6\u4E0A\u4F20</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>notice_type</strong> (<em>Literal[&#39;group_upload&#39;]</em>)</p></li><li><p><strong>user_id</strong> (<em>int</em>)</p></li><li><p><strong>group_id</strong> (<em>int</em>)</p></li><li><p><strong>file</strong> (<em>alicebot.adapter.cqhttp.event.File</em>)</p></li></ul></li></ul><h2 id="GroupAdminNoticeEvent" tabindex="-1"><em>class</em> <code>GroupAdminNoticeEvent</code>(self, **data) <a class="header-anchor" href="#GroupAdminNoticeEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.NoticeEvent</code></p><p>\u7FA4\u7BA1\u7406\u5458\u53D8\u52A8</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>notice_type</strong> (<em>Literal[&#39;group_admin&#39;]</em>)</p></li><li><p><strong>sub_type</strong> (<em>Literal[&#39;set&#39;, &#39;unset&#39;]</em>)</p></li><li><p><strong>user_id</strong> (<em>int</em>)</p></li><li><p><strong>group_id</strong> (<em>int</em>)</p></li></ul></li></ul><h2 id="GroupDecreaseNoticeEvent" tabindex="-1"><em>class</em> <code>GroupDecreaseNoticeEvent</code>(self, **data) <a class="header-anchor" href="#GroupDecreaseNoticeEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.NoticeEvent</code></p><p>\u7FA4\u6210\u5458\u51CF\u5C11</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>notice_type</strong> (<em>Literal[&#39;group_decrease&#39;]</em>)</p></li><li><p><strong>sub_type</strong> (<em>Literal[&#39;leave&#39;, &#39;kick&#39;, &#39;kick_me&#39;]</em>)</p></li><li><p><strong>group_id</strong> (<em>int</em>)</p></li><li><p><strong>operator_id</strong> (<em>int</em>)</p></li><li><p><strong>user_id</strong> (<em>int</em>)</p></li></ul></li></ul><h2 id="GroupIncreaseNoticeEvent" tabindex="-1"><em>class</em> <code>GroupIncreaseNoticeEvent</code>(self, **data) <a class="header-anchor" href="#GroupIncreaseNoticeEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.NoticeEvent</code></p><p>\u7FA4\u6210\u5458\u589E\u52A0</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>notice_type</strong> (<em>Literal[&#39;group_increase&#39;]</em>)</p></li><li><p><strong>sub_type</strong> (<em>Literal[&#39;approve&#39;, &#39;invite&#39;]</em>)</p></li><li><p><strong>group_id</strong> (<em>int</em>)</p></li><li><p><strong>operator_id</strong> (<em>int</em>)</p></li><li><p><strong>user_id</strong> (<em>int</em>)</p></li></ul></li></ul><h2 id="GroupBanNoticeEvent" tabindex="-1"><em>class</em> <code>GroupBanNoticeEvent</code>(self, **data) <a class="header-anchor" href="#GroupBanNoticeEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.NoticeEvent</code></p><p>\u7FA4\u7981\u8A00</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>notice_type</strong> (<em>Literal[&#39;group_ban&#39;]</em>)</p></li><li><p><strong>sub_type</strong> (<em>Literal[&#39;ban&#39;, &#39;lift_ban&#39;]</em>)</p></li><li><p><strong>group_id</strong> (<em>int</em>)</p></li><li><p><strong>operator_id</strong> (<em>int</em>)</p></li><li><p><strong>user_id</strong> (<em>int</em>)</p></li><li><p><strong>duration</strong> (<em>int</em>)</p></li></ul></li></ul><h2 id="FriendAddNoticeEvent" tabindex="-1"><em>class</em> <code>FriendAddNoticeEvent</code>(self, **data) <a class="header-anchor" href="#FriendAddNoticeEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.NoticeEvent</code></p><p>\u597D\u53CB\u6DFB\u52A0</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>notice_type</strong> (<em>Literal[&#39;friend_add&#39;]</em>)</p></li><li><p><strong>user_id</strong> (<em>int</em>)</p></li></ul></li></ul><h2 id="GroupRecallNoticeEvent" tabindex="-1"><em>class</em> <code>GroupRecallNoticeEvent</code>(self, **data) <a class="header-anchor" href="#GroupRecallNoticeEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.NoticeEvent</code></p><p>\u7FA4\u6D88\u606F\u64A4\u56DE</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>notice_type</strong> (<em>Literal[&#39;group_recall&#39;]</em>)</p></li><li><p><strong>group_id</strong> (<em>int</em>)</p></li><li><p><strong>operator_id</strong> (<em>int</em>)</p></li><li><p><strong>user_id</strong> (<em>int</em>)</p></li><li><p><strong>message_id</strong> (<em>int</em>)</p></li></ul></li></ul><h2 id="FriendRecallNoticeEvent" tabindex="-1"><em>class</em> <code>FriendRecallNoticeEvent</code>(self, **data) <a class="header-anchor" href="#FriendRecallNoticeEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.NoticeEvent</code></p><p>\u597D\u53CB\u6D88\u606F\u64A4\u56DE</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>notice_type</strong> (<em>Literal[&#39;friend_recall&#39;]</em>)</p></li><li><p><strong>user_id</strong> (<em>int</em>)</p></li><li><p><strong>message_id</strong> (<em>int</em>)</p></li></ul></li></ul><h2 id="NotifyEvent" tabindex="-1"><em>class</em> <code>NotifyEvent</code>(self, **data) <a class="header-anchor" href="#NotifyEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.NoticeEvent</code></p><p>\u63D0\u9192\u4E8B\u4EF6</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>notice_type</strong> (<em>Literal[&#39;notify&#39;]</em>)</p></li><li><p><strong>sub_type</strong> (<em>str</em>)</p></li><li><p><strong>group_id</strong> (<em>int</em>)</p></li><li><p><strong>user_id</strong> (<em>int</em>)</p></li></ul></li></ul><h2 id="PokeNotifyEvent" tabindex="-1"><em>class</em> <code>PokeNotifyEvent</code>(self, **data) <a class="header-anchor" href="#PokeNotifyEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.NotifyEvent</code></p><p>\u6233\u4E00\u6233</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>sub_type</strong> (<em>Literal[&#39;poke&#39;]</em>)</p></li><li><p><strong>target_id</strong> (<em>int</em>)</p></li><li><p><strong>group_id</strong> (<em>Union[int, NoneType]</em>)</p></li></ul></li></ul><h2 id="GroupLuckyKingNotifyEvent" tabindex="-1"><em>class</em> <code>GroupLuckyKingNotifyEvent</code>(self, **data) <a class="header-anchor" href="#GroupLuckyKingNotifyEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.NotifyEvent</code></p><p>\u7FA4\u7EA2\u5305\u8FD0\u6C14\u738B</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>sub_type</strong> (<em>Literal[&#39;lucky_king&#39;]</em>)</p></li><li><p><strong>target_id</strong> (<em>int</em>)</p></li></ul></li></ul><h2 id="GroupHonorNotifyEvent" tabindex="-1"><em>class</em> <code>GroupHonorNotifyEvent</code>(self, **data) <a class="header-anchor" href="#GroupHonorNotifyEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.NotifyEvent</code></p><p>\u7FA4\u6210\u5458\u8363\u8A89\u53D8\u66F4</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>sub_type</strong> (<em>Literal[&#39;honor&#39;]</em>)</p></li><li><p><strong>honor_type</strong> (<em>Literal[&#39;talkative&#39;, &#39;performer&#39;, &#39;emotion&#39;]</em>)</p></li></ul></li></ul><h2 id="RequestEvent" tabindex="-1"><em>class</em> <code>RequestEvent</code>(self, **data) <a class="header-anchor" href="#RequestEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.CQHTTPEvent</code></p><p>\u8BF7\u6C42\u4E8B\u4EF6</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>post_type</strong> (<em>Literal[&#39;request&#39;]</em>)</p></li><li><p><strong>request_type</strong> (<em>str</em>)</p></li></ul></li></ul><h3 id="RequestEvent.approve" tabindex="-1"><em>async method</em> <code>approve(self)</code> <a class="header-anchor" href="#RequestEvent.approve" aria-hidden="true">#</a></h3><p>\u540C\u610F\u8BF7\u6C42\u3002</p><ul><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h3 id="RequestEvent.refuse" tabindex="-1"><em>async method</em> <code>refuse(self)</code> <a class="header-anchor" href="#RequestEvent.refuse" aria-hidden="true">#</a></h3><p>\u62D2\u7EDD\u8BF7\u6C42\u3002</p><ul><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h2 id="FriendRequestEvent" tabindex="-1"><em>class</em> <code>FriendRequestEvent</code>(self, **data) <a class="header-anchor" href="#FriendRequestEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.RequestEvent</code></p><p>\u52A0\u597D\u53CB\u8BF7\u6C42</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>request_type</strong> (<em>Literal[&#39;friend&#39;]</em>)</p></li><li><p><strong>user_id</strong> (<em>int</em>)</p></li><li><p><strong>comment</strong> (<em>str</em>)</p></li><li><p><strong>flag</strong> (<em>str</em>)</p></li></ul></li></ul><h3 id="FriendRequestEvent.approve" tabindex="-1"><em>async method</em> <code>approve(self, remark = &#39;&#39;)</code> <a class="header-anchor" href="#FriendRequestEvent.approve" aria-hidden="true">#</a></h3><p>\u540C\u610F\u8BF7\u6C42\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>remark</strong> (<em>str</em>) - \u597D\u53CB\u5907\u6CE8\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h3 id="FriendRequestEvent.refuse" tabindex="-1"><em>async method</em> <code>refuse(self)</code> <a class="header-anchor" href="#FriendRequestEvent.refuse" aria-hidden="true">#</a></h3><p>\u62D2\u7EDD\u8BF7\u6C42\u3002</p><ul><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h2 id="GroupRequestEvent" tabindex="-1"><em>class</em> <code>GroupRequestEvent</code>(self, **data) <a class="header-anchor" href="#GroupRequestEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.RequestEvent</code></p><p>\u52A0\u7FA4\u8BF7\u6C42\uFF0F\u9080\u8BF7</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>request_type</strong> (<em>Literal[&#39;group&#39;]</em>)</p></li><li><p><strong>sub_type</strong> (<em>Literal[&#39;add&#39;, &#39;invite&#39;]</em>)</p></li><li><p><strong>group_id</strong> (<em>int</em>)</p></li><li><p><strong>user_id</strong> (<em>int</em>)</p></li><li><p><strong>comment</strong> (<em>str</em>)</p></li><li><p><strong>flag</strong> (<em>str</em>)</p></li></ul></li></ul><h3 id="GroupRequestEvent.approve" tabindex="-1"><em>async method</em> <code>approve(self)</code> <a class="header-anchor" href="#GroupRequestEvent.approve" aria-hidden="true">#</a></h3><p>\u540C\u610F\u8BF7\u6C42\u3002</p><ul><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h3 id="GroupRequestEvent.refuse" tabindex="-1"><em>async method</em> <code>refuse(self, reason = &#39;&#39;)</code> <a class="header-anchor" href="#GroupRequestEvent.refuse" aria-hidden="true">#</a></h3><p>\u62D2\u7EDD\u8BF7\u6C42\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><strong>reason</strong> (<em>str</em>) - \u62D2\u7EDD\u539F\u56E0\u3002</li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Dict[str, Any]</em></p><p>API \u8BF7\u6C42\u54CD\u5E94\u3002</p></li></ul><h2 id="MetaEvent" tabindex="-1"><em>class</em> <code>MetaEvent</code>(self, **data) <a class="header-anchor" href="#MetaEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.CQHTTPEvent</code></p><p>\u5143\u4E8B\u4EF6</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>post_type</strong> (<em>Literal[&#39;meta_event&#39;]</em>)</p></li><li><p><strong>meta_event_type</strong> (<em>str</em>)</p></li></ul></li></ul><h2 id="LifecycleMetaEvent" tabindex="-1"><em>class</em> <code>LifecycleMetaEvent</code>(self, **data) <a class="header-anchor" href="#LifecycleMetaEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.MetaEvent</code></p><p>\u751F\u547D\u5468\u671F</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>meta_event_type</strong> (<em>Literal[&#39;lifecycle&#39;]</em>)</p></li><li><p><strong>sub_type</strong> (<em>Literal[&#39;enable&#39;, &#39;disable&#39;, &#39;connect&#39;]</em>)</p></li></ul></li></ul><h2 id="HeartbeatMetaEvent" tabindex="-1"><em>class</em> <code>HeartbeatMetaEvent</code>(self, **data) <a class="header-anchor" href="#HeartbeatMetaEvent" aria-hidden="true">#</a></h2><p>Bases: <code>alicebot.adapter.cqhttp.event.MetaEvent</code></p><p>\u5FC3\u8DF3</p><ul><li><p><strong>Attributes</strong></p><ul><li><p><strong>meta_event_type</strong> (<em>Literal[&#39;heartbeat&#39;]</em>)</p></li><li><p><strong>status</strong> (<em>alicebot.adapter.cqhttp.event.Status</em>)</p></li><li><p><strong>interval</strong> (<em>int</em>)</p></li></ul></li></ul><h2 id="get_event_class" tabindex="-1"><em>function</em> <code>get_event_class(post_type, event_type, sub_type = None)</code> <a class="header-anchor" href="#get_event_class" aria-hidden="true">#</a></h2><p>\u6839\u636E\u63A5\u6536\u5230\u7684\u6D88\u606F\u7C7B\u578B\u8FD4\u56DE\u5BF9\u5E94\u7684\u4E8B\u4EF6\u7C7B\u3002</p><ul><li><p><strong>Arguments</strong></p><ul><li><p><strong>post_type</strong> (<em>str</em>) - \u8BF7\u6C42\u7C7B\u578B\u3002</p></li><li><p><strong>event_type</strong> (<em>str</em>) - \u4E8B\u4EF6\u7C7B\u578B\u3002</p></li><li><p><strong>sub_type</strong> (<em>Union[str, NoneType]</em>) - \u5B50\u7C7B\u578B\u3002</p></li></ul></li><li><p><strong>Returns</strong></p><p>Type: <em>Type[~T_CQHTTPEvent]</em></p><p>\u5BF9\u5E94\u7684\u4E8B\u4EF6\u7C7B\u3002</p></li></ul>',144),a=[r];function i(o,p,d,c,u,g){return s(),t("div",null,a)}var h=e(l,[["render",i]]);export{v as __pageData,h as default};
