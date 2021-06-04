# 轱辘 Vue-UI
作者: 张凯宇

[![Build Status](https://www.travis-ci.com/2824193947/Making-gulu.svg?branch=master)](https://www.travis-ci.com/2824193947/Making-gulu)

## 介绍

这是我学习 Vue 过程中做的一个UI框架, 希望你体验一下

## 开始使用
1. 添加 CSS 样式
   
    使用本框架时, 请在 css 中开启 border-box
    
    ```
    *, *::before, *::after {box-sizing: border-box;}
    ```
    
    IE8 及以上浏览器都支持此样式。
      
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
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码



