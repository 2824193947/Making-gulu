---
title: Toast
---

# Toast


<ClientOnly>
  <toast-demos-1></toast-demos-1>
</ClientOnly>

```java
<style>
.gulu-toast {
    z-index: 30;
}
</style>
<g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
```
<ClientOnly>
  <toast-demos-2></toast-demos-2>
</ClientOnly>

<ClientOnly>
  <toast-demos-3></toast-demos-3>
</ClientOnly>
