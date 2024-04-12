<script setup lang="ts">
import { ref } from 'vue'
import * as pdfMake from "pdfmake/build/pdfmake";
import { useI18n } from 'vue-i18n'
//import * as pdfFonts from "pdfmake/build/vfs_fonts";
//defaultのフォント(Roboto ttf)を設定
//(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
defineProps<{ msg: string }>()


const count = ref(0)
const testString1 = ref('aaa(KYT853)');
const { t } = useI18n()

const doPDFmake = () => {

  const currentHostname = window.location.hostname;
  console.log('currentHostname=' + currentHostname);
  const currentProtocol = window.location.protocol;
  console.log('currentProtocol=' + currentProtocol);
  const currentPort = window.location.port;
  console.log('currentPort=' + currentPort);
  const localPath = `${currentProtocol}//${currentHostname}:${currentPort}`;
  pdfMake.fonts = {
      //Google Fonts (NotoSansJP) ※それぞれのファイルが5MB以上あるので、サイズが大きくなる
      NotoSansJP: {
        normal: `${localPath}/font/NotoSansJP-Regular.ttf`,
        bold: `${localPath}/font/NotoSansJP-Bold.ttf`,
      },
    };
  console.log('doPDFmake function has been called');
  var docDefinition = {
    content: 
    [
      'This is an sample PDF printed with pdfMake 日本語 日本語 日本語 日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語日本語',
      {
        columns: [
          { fontSize: 7, text: "〇：" + testString1.value},
          { fontSize: 7, text: "△：" + t('message2.name') },
          { fontSize: 7, text: "×：" + t('message1.name') },
        ]
      }
    ],
    pageMargins: [25, 25, 25, 25], // 上: 40ポイント, 右: 60ポイント, 下: 40ポイント, 左: 60ポイント
    pageSize: 'A4', // A4サイズを指定
    // 横向き 'landscape 縦向き 'portrait'
    pageOrientation: 'portrait',
    defaultStyle: {
        font: 'NotoSansJP',
        fontSize: 12, // デフォルトのフォントサイズを指定
      },
  };
  pdfMake.createPdf(docDefinition).open();
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ $t('message1.name') }}</h1>
  <h1>{{ $t('message2.name') }}</h1>  
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
