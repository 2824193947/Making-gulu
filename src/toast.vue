<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "g-toast"
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 35px;
$bg-color: rgba(0,0,0,0.74);

.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: $toast-height;
  line-height: 1.8;
  background: $bg-color;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
  font-size: $font-size;
  color: white;
}
</style>
