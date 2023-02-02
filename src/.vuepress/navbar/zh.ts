import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "文档", icon: "iconfont icon-document_fill", link: "/java/" },
  {
    text: "工具",
    icon: "iconfont icon-tools",
    children: [
      {
        text: "搜索工具",
        children:[
          {text: "百度搜索", link: "https://www.baidu.com", icon: "iconfont icon-baidu"},
          {text: "百度开发者搜索", link: "https://kaifa.baidu.com/", icon: "iconfont icon-baidu"},
          {text: "Google 搜索", link: "https://www.google.com/", icon: "iconfont icon-logo-google"},
          {text: "Bing 搜索", link: "https://www.bing.com/", icon: "iconfont icon-Bing"},
        ]
      },
    ],
  },
]);
