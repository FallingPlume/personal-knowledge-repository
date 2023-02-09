import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    ""
  ],
  "/java/": [
    "",
    {
      text: "Java 基础",
      prefix: "/java/Java 基础/",
      children: [
        "基础语法.md"
      ]
    },
    {
      text: "面试宝典",
      prefix: "/java/面试/",
      children: [
        "Java 基础.md"
      ]
    }
  ],
  "/unity/": [
    "",
    "三维数学.md",
    {
      text: "Input System 中文文档",
      link: "/unity/Input System 中文文档",
    }
  ],
  "/unity/Input System 中文文档/": [
    {
      text: "Input System 中文文档",
      link: "/unity/Input System 中文文档",
      children: [
        {
          text: "指引",
          prefix: "/unity/Input System 中文文档/指引",
          children: [
            "安装.md",
            "快速开始.md",
            "我如何....md",
            "从旧的输入系统迁移.md",
            "用于输入的 GameObject 组件.md",
            "UI 支持",
            "在编辑器中使用 Input System.md",
            "调试.md",
            "输入测试.md"
          ]
        },
        {
          text: "参考",
          children: []
        }
      ]
    }
  ]
});
