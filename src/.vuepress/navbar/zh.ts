import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "收集文档",
    link: "/收集文档.md",
    icon: "iconfont icon-document_fill"
  },
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
      {
        text: "其他",
        children:[
          {text: "阿里矢量图库", link: "https://www.iconfont.cn/", icon: "iconfont icon-eye-fill"}
        ]
      }
    ],
  }
]);
