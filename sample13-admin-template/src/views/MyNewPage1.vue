<script setup lang="ts">
import { ref } from 'vue'
import { ElButton } from 'element-plus'
// import { ElImageViewer } from 'element-plus'

// import { Error } from '@/components/Error'
// import { usePermissionStore } from '@/store/modules/permission'
// import { useRouter } from 'vue-router'

// const { push } = useRouter()

// const permissionStore = usePermissionStore()

// const errorClick = () => {
//   push(permissionStore.addRouters[0]?.path as string)
// }
const myMessage = ref('')
const clickButton = async () => {
  myMessage.value = '追加されたボタン1がクリックされました。'
}
</script>

<template>
  <!-- <Error type="403" @error-click="errorClick" /> -->
  <div>これは追加されたページ(MyNewPage1.vue)</div>
  <ElButton type="primary" @click="clickButton">新規に追加されたボタン1</ElButton>
  <div class="my-new-message">{{ myMessage }}</div>
</template>
