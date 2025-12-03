import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Huizhi",
  description: "Docs site for huizhi",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/favicon.ico',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/hzcubing/index' }
    ],

    sidebar: [
      // 笔记分类
      {
        text: '会枝 Cubing',
        collapsed: false,
        items: [
          { text: '更新日志', link: '/hzcubing/changelog' }
        ]
      },

      // 示例分类
      {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/example-docs/markdown-examples' },
          { text: 'Runtime API Examples', link: '/example-docs/api-examples' },
        ]
      },
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huizhiLLL' }
    ]
  }
})
