<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const radio1 = ref('1')

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    
    <div>radio buttonを試す</div>

    <div class="mb-2 flex items-center text-sm">
      <el-radio-group v-model="radio1" class="ml-4">
        <el-radio value="1" size="large">Option 1</el-radio>
        <el-radio value="2" size="large">Option 2</el-radio>
      </el-radio-group>
    </div>

    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
