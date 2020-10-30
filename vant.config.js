module.exports = {
  name: 'vant',
  build: {
    skipInstall: ['lazyload'],
    site: {
      publicPath: process.env.PUBLIC_PATH || 'https://b.yzcdn.cn/vant/',
    },
    vetur: {
      tagPrefix: 'van-',
    },
  },
  site: {
    defaultLang: 'en-US',
    versions: [{
        label: '1.x',
        link: '/vant/1.x/',
      },
      {
        label: '3.x',
        link: '/vant/next/',
      },
    ],
    baiduAnalytics: {
      seed: 'ad6b5732c36321f2dafed737ac2da92f',
    },
    locales: {
      'zh-CN': {
        title: 'Vant',
        description: '轻量、可靠的移动端 Vue 组件库',
        logo: 'https://img.yzcdn.cn/vant/logo.png',
        langLabel: '中文',
        links: [{
            logo: 'https://b.yzcdn.cn/vant/logo/weapp.svg',
            url: '/vant-weapp',
          },
          {
            logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: 'https://github.com/youzan/vant',
          },
        ],
        searchConfig: {
          apiKey: '90067aecdaa2c85220e2783cd305caac',
          indexName: 'vant',
          placeholder: '搜索文档...',
          transformData(hits) {
            if (location.hostname === 'vant-contrib.gitee.io') {
              hits.forEach((hit) => {
                if (hit.url) {
                  hit.url = hit.url.replace(
                    'youzan.github.io',
                    'vant-contrib.gitee.io'
                  );
                }
              });
            }
          },
        },
        nav: [{
            title: '开发指南',
            items: [{
                path: 'home',
                title: '介绍',
              },
              {
                path: 'quickstart',
                title: '快速上手',
              },
              {
                path: 'changelog',
                title: '更新日志',
              },
              {
                path: 'theme',
                title: '定制主题',
              },
              {
                path: 'contribution',
                title: '开发指南',
              },
              {
                path: 'design',
                title: '设计资源',
              },
              {
                path: 'style-guide',
                title: '风格指南',
              },
              {
                path: 'locale',
                title: '国际化',
              },
            ],
          },
          {
            title: '基础组件',
            items: [{
              path: 'style',
              title: 'Style 内置样式',
            }, ],
          },
          {
            title: '表单组件',
            items: [{
                path: 'form',
                title: 'Form 表单',
              },
              {
                path: 'picker',
                title: 'Picker 选择器',
              },
            ],
          },
          {
            title: '导航组件',
            items: [{
              path: 'sidebar',
              title: 'Sidebar 侧边导航',
            }, ],
          },
        ],
      },
      'en-US': {
        title: 'Vant',
        description: 'Mobile UI Components built on Vue',
        logo: 'https://img.yzcdn.cn/vant/logo.png',
        langLabel: 'En',
        links: [{
            logo: 'https://b.yzcdn.cn/vant/logo/weapp.svg',
            url: '/vant-weapp',
          },
          {
            logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: 'https://github.com/youzan/vant',
          },
        ],
        searchConfig: {
          apiKey: '90067aecdaa2c85220e2783cd305caac',
          indexName: 'vant',
          placeholder: 'Search...',
        },
        nav: [{
            title: 'Essentials',
            items: [{
                path: 'home',
                title: 'Introduction',
              },
              {
                path: 'quickstart',
                title: 'Quickstart',
              },
              {
                path: 'changelog',
                title: 'Changelog',
              },
              {
                path: 'theme',
                title: 'Custom Theme',
              },
              {
                path: 'locale',
                title: 'Internationalization',
              },
            ],
          },
          {
            title: 'Basic Components',
            items: [{
              path: 'style',
              title: 'Built-in style',
            }, ],
          },
          {
            title: 'Form Components',
            items: [{
              path: 'picker',
              title: 'Picker',
            }, ],
          },
          {
            title: 'Navigation Components',
            items: [{
              path: 'sidebar',
              title: 'Sidebar',
            }, ],
          },


        ],
      },
    },
  },
};
