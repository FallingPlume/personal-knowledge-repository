import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "MiooYuki の 知识库",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  shouldPrefetch: false,

  head: [
    ["link", {rel: "preconnect", href: "https://fonts.googleapis.com"}],
    ["link", {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""}],
    ["link", {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC&display=swap"}]
  ]

});
