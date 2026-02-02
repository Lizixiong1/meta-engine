# 介绍

欢迎使用 Meta Engine！

Meta Engine 是一个 **基于元数据（Meta）驱动的复杂组件管理引擎**，专为构建企业级中后台系统而设计，提供 **表单、表格、CRUD、搜索、页面编排等能力**。

## 什么是 Meta Engine？

Meta Engine 是一个框架无关的引擎，它通过元数据描述 UI 组件、行为、布局和交互逻辑，实现了 UI 与业务逻辑的解耦。

### 核心价值

- **框架无关**：不绑定任何前端框架，可在 React、Vue、Angular 等不同技术栈上运行
- **组件库适配**：通过适配器机制，可桥接任意 UI 组件库（Ant Design、Arco、MUI 等）
- **元数据驱动**：使用 JSON 格式的元数据描述 UI，实现配置化开发
- **企业级能力**：内置权限控制、联动逻辑、状态管理等企业级特性
- **可扩展性**：核心引擎可扩展，支持自定义能力和组件

## 设计理念

### 1. Schema ≠ Meta

- **Schema**：描述数据结构与校验规则（静态）
- **Meta**：描述组件、行为、布局、权限、联动（运行时）

Meta Engine 以 **Meta 为核心驱动层**，并可选配 Schema 作为类型与校验基础。

### 2. 适配器架构

通过适配器机制，Meta Engine 实现了与具体 UI 组件库的解耦：

- 一个 `Input` 对应哪个真实组件
- props / events 如何映射
- 生命周期如何对齐

### 3. 分层设计

- **内核层**：提供生命周期、状态管理、事件处理等核心能力
- **协议层**：定义 Meta 协议，描述 UI 组件和行为
- **适配层**：桥接具体框架和组件库
- **能力层**：提供 Form、Table、CRUD 等具体能力

## 核心特性

### 🧠 Meta-driven
使用元数据描述 UI、行为、权限、布局与联动逻辑，实现配置化开发。

### 🧩 Framework Agnostic
与 React / Vue / Angular 等框架解耦，可在不同技术栈上运行。

### 🔌 UI Adapter 架构
通过适配器桥接任意组件库，实现 UI 组件的灵活替换。

### 🧱 可扩展引擎内核
Form / Table / CRUD 只是内置能力之一，可扩展自定义能力。

### 📐 Schema + Meta 分层
Schema 管结构，Meta 管运行时，实现数据与 UI 的分离。

### 🏗 企业级能力优先
内置权限、联动、状态管理、一致性等企业级特性。

## 适用场景

### 企业级中后台系统
需要统一表单、表格、CRUD 能力的大型企业应用。

### 多项目 / 多 UI 体系统一
在多个项目中使用不同 UI 组件库时，通过 Meta Engine 实现能力统一。

### 低代码 / 半低代码平台
作为低代码平台的底层引擎，提供组件编排和运行时能力。

### 可配置化运营后台
通过元数据配置实现运营后台的快速搭建和动态调整。

## 快速开始

### 1. 安装核心包

```bash
pnpm add @meta-engine/core
```

### 2. 安装框架适配器

```bash
# React 适配器
pnpm add @meta-engine/adapter-react

# Vue 适配器
pnpm add @meta-engine/adapter-vue
```

### 3. 定义元数据

```javascript
const formMeta = {
  type: 'form',
  fields: [
    {
      name: 'username',
      label: '用户名',
      component: 'Input',
      required: true
    },
    {
      name: 'email',
      label: '邮箱',
      component: 'Input',
      type: 'email',
      required: true
    }
  ]
};
```

### 4. 渲染组件

```javascript
import { MetaEngine } from '@meta-engine/core';
import { render } from '@meta-engine/adapter-react';

const engine = new MetaEngine();

function App() {
  return render(formMeta, engine);
}
```

## 后续学习

- **概念**：了解 Meta 与 Schema 的区别，以及适配器架构
- **API**：学习如何使用 Meta Engine 的核心 API
- **示例**：查看不同框架和组件库的使用示例
- **高级特性**：探索权限控制、联动逻辑等高级特性

Meta Engine 旨在简化复杂 UI 系统的开发，提高代码复用性和可维护性，为企业级应用提供统一的组件管理方案。