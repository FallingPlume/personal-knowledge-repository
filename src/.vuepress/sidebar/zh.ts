import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    ""
  ],
  "/java/": [
    "",
    {
      text: "Java 基础",
      prefix: "/java/javabase/",
      collapsible: true,
      children: ["基础语法.md"]
    },
    {
      text: "面试宝典",
      prefix: "/java/interview/",
      collapsible: true,
      children: ["Java 基础.md"]
    }
  ]
});
