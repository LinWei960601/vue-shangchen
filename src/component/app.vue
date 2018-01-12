<template>
  <main>
    <h1>{{ title }}</h1>
  </main>
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