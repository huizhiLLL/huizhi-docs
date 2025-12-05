import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Huizhi",
  description: "Docs site for huizhi",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // Gitalk 配置：请填写你的 GitHub OAuth 与仓库信息
    gitalk: {
      clientID: 'Ov23linRmSKvEW9TVAms',
      clientSecret: 'e36dba98372c0407dfa92f4d14a47b44e8e556ca',
      repo: 'docs-gitalk',
      owner: 'huizhiLLL',
      admin: ['huizhiLLL'],
      distractionFreeMode: true
    },

    logo: '/favicon.ico',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/about' }
    ],

    sidebar: [
      {
        text:'关于本站',
        link:'/about'
      },
      {
        text: '会枝 Cubing',
        collapsed: true,
        items: [
          { text: '介绍', link: '/hzcubing/intro' },
          { text: '更新日志', link: '/hzcubing/changelog' }
        ]
      },
      {
        text:'魔方',
        collapsed: true,
        items: [
          { text: '资源导航' ,
            link:'/cube/resource-nav'}
             ,
            {
              text: '公式',
              collapsed: true,
              items: [
                { text: '正阶', link: '/cube/algorithm/standard' },
                { text: '异形', link: '/cube/algorithm/non-standard' },
                { text: '其他', link: '/cube/algorithm/other' }
              ]
            }
          ]
      },
      {
        text: 'CS',
        collapsed: true,
        items: [
          { text: 'CTF',
            collapsed: true,
            items: [
              { text: '导航', link: '/cs/ctf/ctf-nav' }
            ]
          },
          { text: 'Web',
            collapsed: true,
            items: [
              { text: '前端', link: '/cs/web/frontend' },
              { text: '后端', link: '/cs/web/backend' },
              { text: '部署', link: '/cs/web/service' }
            ]
           }
        ]
      },

      {
        text: '笔记',
        collapsed: true,
        items: [
          { text: '例子', link: '/notes/example' },
        ]
      },
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huizhiLLL' }
    ]
  }
})
