import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Meta Engine",
  lang: "zh-CN",
  lastUpdated: true,
  description:
    "是一个基于元数据（Meta）驱动的复杂组件管理引擎，用于构建企业级中后台系统中的 表单、表格、CRUD、搜索、页面编排等能力",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "vitepress-logo-mini.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/introduction", activeMatch: "/guide/" },
      { text: "API参考", link: "/api" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "介绍", link: "/guide/introduction" },
            { text: "设计思路", link: "/guide/design" },
          ],
        },
      ],
      "/api/": [
        {
          text: "API参考",
          items: [
            { text: "测试", link: "/api/one" },
            { text: "测试", link: "/api/two" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Lizixiong1/meta-engine" },
    ],
  },
});
