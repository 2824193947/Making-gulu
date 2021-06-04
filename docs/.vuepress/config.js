module.exports = {
  base: '/Making-gulu/',
  title: '轱辘UI',
  description: '一个简约的UI框架',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: [ '/install/', '/get-started/' ],
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/grid',
          '/components/input',
          '/components/layout',
          '/components/popover',
          '/components/tabs',
          '/components/toast'
        ],
      }

    ]
  }
}
