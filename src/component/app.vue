<template>
  <div>
    公共头部
    <router-view></router-view>
    公共底部
  </div>
</template>

<script>
// 导出组件配置
export default {
    data() {
        return {
            title: 'Hello World!'
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 30px;
    color: red;
}
</style>