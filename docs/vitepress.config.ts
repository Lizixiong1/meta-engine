import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Meta Engine',
  description: 'A framework-agnostic meta-driven engine for enterprise-grade complex UI systems',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'API', link: '/api/meta' },
      { text: 'Examples', link: '/examples/react-antd' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Concepts', link: '/guide/concepts/meta-vs-schema' },
            { text: 'Getting Started', link: '/guide/getting-started' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            { text: 'Meta', link: '/api/meta' },
            { text: 'Form', link: '/api/form' },
            { text: 'Table', link: '/api/table' }
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'React + AntD', link: '/examples/react-antd' },
            { text: 'Vue + Arco', link: '/examples/vue-arco' }
          ]
        }
      ]
    }
  }
})