import postcss from "./postcss.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/css/main.scss"],
  postcss,
  app: {
    baseURL: "/nuxt/",
    head: {
      title: '上海想容',
      meta: [
        { name: 'description', content: '想容（上海）互联网技术有限公司是一家专注互联网产品服务的公司，致力于改变人们的工作和生活方式。我们认为”美的事物是永恒的喜悦“，将更美产品的体验和功能给到用户就是最美。' },
        { name: 'keywords', content: '上海想容，想容（上海）互联网技术有限公司，上海想容官网，app 开发，小程序开发，公众号开发，官网开发，后台开发，web3d开发，私人定制' },
      ],
      bodyAttrs: {
        class: 'body'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/nuxt/favicon.ico' }
      ],
      script: [ { children: 'console.log(\'Welcome xiangrong\')' } ]
    }
  },
});
