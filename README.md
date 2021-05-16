# 轱辘 Vue-UI
作者: 张凯宇

[![Build Status](https://www.travis-ci.com/2824193947/Making-gulu.svg?branch=master)](https://www.travis-ci.com/2824193947/Making-gulu)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/forcegulu?color=green&label=forcezhang&logo=npm)

## 介绍

这是我学习 Vue 过程中做的一个UI框架, 希望你体验一下

## 开始使用
1. 添加 CSS 样式
   
    使用本框架时, 请在 css 中开启 border-box
    
    ```
    *, *::before, *::after {box-sizing: border-box;}
    ```
    
    IE8 及以上浏览器都支持此样式。
    你还需要设置默认 颜色变量 以及 其他变量 (后续改为scss变量)
    ```
    :root {
       --button-height: 32px;
       --font-size: 14px;
       --button-bg: white;
       --button-active-bgc: #eee;
       --border-radius: 4px;
       --color: #333;
       --border-color: #999;
       --boeder-color-hover: #666;
    }
    ```
    IE15及以上浏览器都支持此样式。
   
2. 安装 forcegulu
```
npm i -S forcegulu
```

3. 引入 forcegulu
```
import { Button, Icon, ButtonGroup } from 'forcegulu'
import 'forcegulu/dist/index.css'

export default {
  name: 'App',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```
4. 引入 svg symbols
```
<script src="//at.alicdn.com/t/font_2544671_svb7b953ioh.js"></script>
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码



