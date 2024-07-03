import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '标识应用集成SOP',
    link: '/handleAppSOP/index.md'
  },
  {
    text: '标识解析SDK',
    items: [
      {
        text: 'V1.0',
        link: '/sdk/v1/introduction',
      },
      // {
      //   text: 'V1.0',
      //   link: '/sdk/v1/manual',
      // },
    ],
  },
  // {
  //   text: '二级节点OpenAPI',
  //   items: [
  //     {
  //       text: 'V5',
  //       link: '/openApi/v5/api-introduce.md',
  //     },
  //     {
  //       text: 'V3',
  //       link: '/openApi/v3/api-introduce.md',
  //     },
  //   ],
  // },
  {
    text: '企业节点IDHub',
    link: '/idhub/standard/introduce.md'
    // items: [
    //   {
    //     text: '标准版',
    //     link: '/idhub/standard/api-introduce.md',
    //   },
    //   {
    //     text: '兼容版',
    //     link: '/idhub/snms/api-introduce.md',
    //   },
    // ],
  },
]
