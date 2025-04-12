import { defineConfig } from 'vitepress'
import { Feed } from 'feed'
import { writeFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ['vitepress']
    },
    ssr: {
      noExternal: ['vitepress']
    }
  },
  title: "FE流星的博客",
  description: "A Personal Tech Blog",
  base: '/xixinglong/',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'alternate', type: 'application/rss+xml', href: '/feed.rss' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // Giscus
    ['script', {
      src: 'https://giscus.app/client.js',
      'data-repo': 'xixinglong/xixinglong.github.io',
      'data-repo-id': '',
      'data-category': 'General',
      'data-category-id': '',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-theme': 'preferred_color_scheme',
      'data-lang': 'zh-CN',
      crossorigin: 'anonymous',
      async: true
    }]
  ],

  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '标签', link: '/tags/' },
      { text: '分类', link: '/categories/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '技术教程',
          collapsed: false,
          items: [
            { text: 'Git基础教程', link: '/posts/git-basics' },
            { text: '前端开发常见问题', link: '/posts/frontend-development-tips' }
          ]
        },
        {
          text: '工具使用',
          collapsed: false,
          items: [
            { text: 'VSCode开发环境配置', link: '/posts/vscode-guide' }
          ]
        },
        {
          text: '技术分享',
          collapsed: false,
          items: [
            { text: 'Hello World', link: '/posts/hello-world' },
            { text: '第一篇博客文章', link: '/posts/first-post' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xixinglong' },
      { icon: 'rss', link: '/feed.rss' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-present'
    },

    // 文章元数据配置
    lastUpdatedText: '最后更新于',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
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
        }
      }
    }
  },

  buildEnd: async (config) => {
    const feed = new Feed({
      title: "技术博客",
      description: "A Personal Tech Blog",
      id: "https://xixinglong.github.io/",
      link: "https://xixinglong.github.io/",
      language: "zh-CN",
      image: "https://xixinglong.github.io/logo.png",
      favicon: "https://xixinglong.github.io/favicon.ico",
      copyright: "Copyright © 2024-present"
    })

    const posts = await config.pages
      .filter(page => page.relativePath?.startsWith('posts/'))
      .map(page => ({
        ...page,
        url: `https://xixinglong.github.io/${page.url}`
      }))

    posts.forEach(post => {
      feed.addItem({
        title: post.frontmatter?.title,
        id: post.url,
        link: post.url,
        description: post.frontmatter?.excerpt,
        content: post.frontmatter?.excerpt,
        date: new Date(post.frontmatter?.date)
      })
    })

    writeFileSync(join(config.outDir, 'feed.rss'), feed.rss2())
  }
})
