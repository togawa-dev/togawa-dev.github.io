---
title: 概述
slug: /
sidebar_position: 1
---

`Sakiko` 是一个简单、跨平台、可拓展的异步 TypeScript 聊天机器人框架，以开发者的体验优先，最小仅需单个 `index.ts` 即可启动。

The Sakiko Project 现由以下项目组成：

| 项目    | 简介                                       | 仓库                                            |
| ------- | ------------------------------------------ | ----------------------------------------------- |
| Sakiko  | 可灵活拓展的异步聊天机器人开发框架         | [Github](https://github.com/togawa-dev/sakiko)  |
| Umiri   | 基于类型信息和优先级机制的本地异步事件总线 | [Github](https://github.com/togawa-dev/umiri)   |
| Uika    | Sakiko 的可选零副作用高级功能拓展          | [Github](https://github.com/togawa-dev/uika)    |
| Mutsumi | 基于模式匹配的高级命令匹配 / 解析库        | [Github](https://github.com/togawa-dev/mutsumi) |
| Nyamu   | 基于 satori 的高级 Html5 图片模板渲染器    | [Github](https://github.com/togawa-dev/nyamu)   |
| ......  | 更多的社区项目                             | [Github](https://github.com/togawa-dev)         |

## 🚀 快速开始

### 我是编程萌新怎么办？

如果你对 TypeScript 并没有特别熟悉，但是你有像 JavaScript、Python、Java 之类的现代编程语言的开发经验，你可以查看 [渐进式指南](/docs/progressive/) 来快速的掌握 TypeScript 并学习如何逐步用 Sakiko 搭建起一个可用的聊天机器人。

### 我是 TypeScript 领域大神，放我进来

如果你已经对 TypeScript 有充分的了解并有充足的开发经验，直接查看 Sakiko 的文档可以帮助你立刻开始开发。

### 我完全不会编程？

[Koishi](https://koishi.chat/) 拥有极为丰富的插件生态和强大的 Web GUI 管理，不需要敲任何代码就能快速上线你的聊天机器人。

## ❓ 我为什么要选择 Sakiko

如今在开发者社区中可选的聊天机器人框架项目非常多，每个框架都有各自的优点和缺点，Sakiko 也不例外。

Sakiko 是以 **开发过程可控** 为目标设计的，这意味着：

- Sakiko 不做除了分发处理消息之外的事情
- Sakiko（及周边生态项目） 默认只引入有限的依赖
- Sakiko 推崇用更显式的方法来表达聊天机器人的整个生命周期

这样做的好处在于，每一个模块的功能边界都是明晰的，你可以通过依赖树理解项目中已经发生了什么、正在发生什么、将要发生什么，同时开发者将享有对聊天机器人的整个生命周期的控制权。

相应的，Sakiko 不会且**总是不会**提供如 **脚手架** 和 **WebUI** 这样的高级功能，这样的设计对于 Sakiko 而言太过笨重，也会引入太多的外部依赖，Sakiko 总是会在条件允许的情况下，尽量不使用更多外部的依赖解决问题，除非这会让代码变得过于臃肿且低效。

当然，这样的设计难免会导致框架本身的功能过于简陋，为了解决这种问题，Sakiko 提供一个支持 `tree-shaking` 的可选高级功能模块 `Uika`，通过预先实现的常用功能组件和可选外部依赖的配合，由开发者自行决定要引入什么来改善自己的开发体验。

想必你能感觉到，相对于社区中已有的聊天机器人框架方案来讲，Sakiko 是一个非常 **Nerd** 风味的项目，毕竟它不提供项目脚手架和 GUI 管理，而是选择全权信任开发者的代码，这也意味着**它其实不怎么适合单纯只是想要一个能跑起来的机器人的用户**。

## 🤔 也许你还可以试试

如果你发现你并不怎么适合使用 Sakiko 的话，你也可以试试这些聊天机器人框架，Sakiko 的一些设计灵感就来自这些项目：

- [Nonebot2](https://nonebot.dev/docs/) | 现代、跨平台、可扩展的 Python 聊天机器人框架
- [Koishi](https://koishi.chat/) | 跨平台、可扩展、高性能的机器人
- [ZeroBot](https://github.com/wdvxdr1123/ZeroBot) | 基于 onebot 协议的机器人 Go 开发框架
- [Shiro](https://github.com/MisakaTAT/Shiro) | 基于 OneBot 协议的 QQ 机器人快速开发框架
