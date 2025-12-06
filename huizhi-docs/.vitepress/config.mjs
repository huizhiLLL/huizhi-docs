import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Huizhi",
  description: "Docs site for huizhi",
  lang: 'zh',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    lastUpdatedText: '最后更新',

    // 右侧目录配置
    outline: {
      level: [2, 4], // 显示 h2 和 h3 标题
      label: '目录' // 目录标题
    },

    footer: {
      message: 'Powered by <a href="https://vitepress.dev" target="_blank">VitePress</a>',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

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
      { text: '主页', link: '/'},
      { text: '文档',
        collapsed: false,
        items: [
          { text: 'hzcubing', link: '/hzcubing/intro' },
          { text: '魔方', link: '/cube/resource-nav' },
          { text: 'CS', link: '/cs/cs-intro-nav' },
          { text: '笔记', link: '/notes/example' },]
      }
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
