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
    }
  ]
});
