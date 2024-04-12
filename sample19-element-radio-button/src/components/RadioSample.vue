<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  // setup(props) {
  //   const radio1 = ref('1')

  //   return {
  //     radio1
  //   }
  // }
  data(){
    return {
      radio1: '1'
    }
  }
})

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    
    <div>radio buttonを試す Option APIでの実装</div>

    <div class="mb-2 flex items-center text-sm">
      <el-radio-group v-model="radio1" class="ml-4" @change="(value:any)=>{console.log('change!' + value)}">
        <el-radio value="1" size="large">1</el-radio>
        <el-radio value="2" size="large">2</el-radio>
        <el-radio value="3" size="large">3</el-radio>
        <el-radio value="4" size="large">4</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
