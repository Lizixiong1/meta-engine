# meta-engine

> **A framework-agnostic meta-driven engine for enterprise-grade complex UI systems**

`meta-engine` 是一个 **基于元数据（Meta）驱动的复杂组件管理引擎**，用于构建企业级中后台系统中的 **表单、表格、CRUD、搜索、页面编排等能力**。

它不绑定任何具体前端框架或 UI 组件库，可通过 **Adapter / Bridge** 的方式桥接 **任意组件体系**（Ant Design、Arco、MUI、自研组件等），并可运行在 **React / Vue / Angular / Web Components** 等不同技术栈之上。

---

## ✨ 核心特性

* 🧠 **Meta-driven**：使用元数据描述 UI、行为、权限、布局与联动逻辑
* 🧩 **Framework Agnostic**：与 React / Vue / Angular 等框架解耦
* 🔌 **UI Adapter 架构**：通过适配器桥接任意组件库
* 🧱 **可扩展引擎内核**：Form / Table / CRUD 只是内置能力之一
* 📐 **Schema + Meta 分层**：Schema 管结构，Meta 管运行时
* 🏗 **企业级能力优先**：权限、联动、状态管理、一致性

---

## 🧭 设计理念

### 1. Schema ≠ Meta

* **Schema**：描述数据结构与校验规则（静态）
* **Meta**：描述组件、行为、布局、权限、联动（运行时）

`meta-engine` 以 **Meta 为核心驱动层**，并可选配 Schema 作为类型与校验基础。

---

## 🏛️ 架构总览

```text
meta-engine
├── core            # 引擎核心：生命周期、状态、事件、上下文
├── schema          # Schema 定义与校验（可选）
├── adapters        # UI / Framework 适配层
│   ├── react
│   ├── vue
├── form            # 表单能力（基于 Meta）
├── table           # 表格能力  
└── shared          # 通用工具与类型
```

---

## 🔌 Adapter / Bridge 机制

`meta-engine` **不直接依赖任何 UI 组件库**。

通过 Adapter，你只需要告诉引擎：

* 一个 `Input` 对应哪个真实组件
* props / events 如何映射
* 生命周期如何对齐

### Adapter 示例（概念）

```ts
export const antdAdapter = {
  components: {
    Input: AntdInput,
    Select: AntdSelect
  },
  mapProps(metaProps) {
    return { ...metaProps }
  }
}
```

同一份 Meta：

* 在 React + AntD
* 在 Vue + Arco
* 在 Angular + 自研组件

👉 **行为完全一致**。

---

## 🧠 Meta 示例（Form）

```json
{
  "type": "form",
  "fields": [
    {
      "name": "username",
      "label": "用户名",
      "component": "Input",
      "required": true
    },
    {
      "name": "role",
      "label": "角色",
      "component": "Select",
      "visibleWhen": {
        "field": "username",
        "notEmpty": true
      }
    }
  ]
}
```

---

## 🧰 技术选型建议

### 核心语言 & 构建

* **TypeScript**：强类型 + Meta / Schema 约束
* **tsup / unbuild**：多格式构建（esm / cjs）
* **pnpm workspace**：多包管理

### Schema / 校验（可选）

* `zod` / `valibot`：Schema 定义与推导
* `ajv`：JSON Schema 校验（兼容场景）

### 状态与响应式（内核）

* 自研轻量 Store（推荐）
* 或可选：`valtio` / `rxjs`

### 文档系统

* **VitePress**（官方推荐）
* 支持：

  * Meta 协议文档
  * 示例 Playground
  * 架构设计说明

---

## 📚 文档结构（VitePress）

```text
docs
├── guide
│   ├── introduction.md
│   ├── concepts
│   │   ├── meta-vs-schema.md
│   │   └── adapter.md
│   └── getting-started.md
├── api
│   ├── meta.md
│   ├── form.md
│   └── table.md
└── examples
    ├── react-antd
    └── vue-arco
```

---

## 🎯 适用场景

* 企业级中后台系统
* 多项目 / 多 UI 体系统一表单与表格能力
* 低代码 / 半低代码平台
* 可配置化运营后台

---

`meta-engine` 专注于：**复杂组件的抽象、协议与运行时能力**。

---

## 🤝 贡献

欢迎参与：

* Meta 协议设计
* Adapter 生态建设
* 示例与文档完善

---

## 📄 License

MIT
