# 插件介绍

[ChatHub](https://github.com/ChatHubLab/chathub) 是一款基于 [LangChain](https://github.com/hwchase17/langchainjs) 的语言模型聊天服务插件，可以运行在 [Koishi](https://koishi.chat/zh-CN/) 框架上。

它可以对接目前流行的语言模型或平台，如 OpenAI（API）、New Bing、ChatGLM 等，让用户与这些模型进行有趣的聊天互动。项目底层和语言模型交互基于 LangChain，第三方 Koishi 插件开发者也可以使用此项目提供的 [LangChain Model](https://js.langchain.com/docs/modules/models/chat/) 和语言模型进行交互。

## 特性

- 高扩展性：利用 LangChain 和 Koishi 提供的扩展 API，第三方插件开发者可以轻松地扩展或调用此项目的服务，如添加新的语言模型、自定义模型参数等。
- 预设系统：支持设置会话预设，调整模型的行为和风格。
- 黑名单系统：支持全局冷却时间和模型并发请求限制，以及按小时的模型调用额度限制，方便管理模型的调用限额等。
- 多媒体回复：支持语音/文字/图片/图文混合回复，也支持解析生成的 markdown，实现自然地分割成多条消息来发送。
- 上下文对话：支持长期记忆功能（需要适配器支持）。
- 三种聊天模式：`chat`、`browsing`、`plugin`，后两种模式可以让模型调用外部提供的某些工具，使得模型能够获取到外部信息。
- 内容安全过滤：基于 Koishi 的 [censor](https://censor.koishi.chat/) 服务，防止模型返回不良内容。

## 下一步

- 快速开始：请参考 [快速开始](/guide/getting-started) 来安装和使用此插件。
- 指令列表：请参考 [指令列表](/guide/useful-commands) 来了解可用指令或某个指令的用法。
- 配置模型平台：请参考 [配置模型平台](/guide/configure-model-platform) 来了解如何配置某个语言模型平台。
- 开发指南：如果您是第三方插件开发者，请参考 [开发指南](/development/introduction) 来了解如何接入或使用 ChatHub 提供的相关 API。
- 帮助和贡献：如果您想要帮助我们完善或翻译文档，请在 Github 上 fork 后提交 PR。[项目地址](https://github.com/ChatHubLab/doc)