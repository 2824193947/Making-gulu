<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "container"
}
</script>

<style scoped>
.wrapper {
  flex-grow: 1;
}
</style>
