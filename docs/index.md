---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 工业互联网标识解析
  tagline: ''
  text: 开发说明文档
  image:
    src: /logo.png
    alt: 工业互联网标识解析
  actions:
    - text: 标识解析SDK
      link: /sdk/v2/introduction
    # - text: 二级节点OpenAPI
    #   link: /openApi/v5/api-introduce.md
    - text: 企业节点IDHub
      link: /idhub/standard/api-introduce.md
      theme: alt

features:
  - icon: <img src="/docs/sdk.png" />
    title: 工业互联网标识解析SDK
    details: 基于Java语言开发的工业互联网标识解析体系客户端软件开发工具包，应用通过集成 ID-SDK，快速对接标识解析、标识注册、标识维护等功能服务.
    link: /sdk/v2/introduction
    linkText: 快速开始
  # - icon: <img src="/docs/openApi.png" />
  #   title: 工业互联网标识解析二级节点OpenAPI
  #   details: 工业互联网标识解析二级节点OpenAPI提供HTTP REST风格接口进行标识操作，所有操作都采用UTF-8编码以确保兼容性和易用性，便于其他系统接入.
  #   link: /openApi/v5/api-introduce.md
  #   linkText: 快速开始
  - icon: <img src="/docs/idhub.png" />
    title: 工业互联网标识企业节点
    details: 开放IDHub标准版API接口，是为了让应用集成企业节点更便捷
    link: /idhub/standard/api-introduce.md
    linkText: 快速开始
  # - icon: 🧰
  #   title: 提效工具
  #   details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
  #   link: https://notes.fe-mm.com/efficiency/online-tools
  #   linkText: 提效工具
  # - icon: 🐞
  #   title: 踩坑记录
  #   details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
  #   link: https://notes.fe-mm.com/pit/npm
  #   linkText: 踩坑记录
  # - icon: 💯
  #   title: 吾志所向，一往无前。
  #   details: '<small class="bottom-small">一个想躺平的小开发</small>'
  #   link: https://notes.fe-mm.com/mao
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
.link-text-value {
  color: #00a98e !important;
}
</style>
