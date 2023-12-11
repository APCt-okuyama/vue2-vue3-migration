<script setup lang="ts">
import { ref } from 'vue'
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
//defaultのフォント(Roboto ttf)を設定
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


defineProps<{ msg: string }>()

const count = ref(0)

const doPDFmake = () => {
  console.log('doPDFmake function has been called');
  var docDefinition = {
    content: 'This is an sample PDF printed with pdfMake'
  };
  pdfMake.createPdf(docDefinition).open();
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <button @click="doPDFmake()">do pdfmake</button>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
