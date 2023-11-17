<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <h1>Element Plus の Themeを変更したい</h1>
  <p>まずはElement Plusをインストールする npm -i element-plus</p>
  <p>main.tsでimportして利用できるようにする</p>
  <p>テーマカラーを変更してみる</p>
  <p>公式はこちら https://element-plus.org/en-US/guide/theming.html</p>
  
  <h2>Element PlusのComponentを以下に並べる</h2>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
