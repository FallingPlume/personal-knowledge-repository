import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Numerous 的知识库",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  shouldPrefetch: false,
});
