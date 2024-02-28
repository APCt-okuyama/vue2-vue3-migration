<script setup lang="ts">
import { inject } from 'vue'
import { IApplicationInsights } from '@microsoft/applicationinsights-web'
//import { ref } from 'vue'

defineProps<{ msg: string }>()

const appInsights = inject<IApplicationInsights>('appInsights')

const clickButton2 = () => {
  console.log('div click!')
  if (appInsights) {
    appInsights.trackEvent({ name: 'my-customEvent-clickButtonFn' });
  }
}

const clickButton = () => {
  console.log('clickButton')
}

</script>

<template>
  <p style="color: red;">Azureのリソース(Application Insights, Log Analytics ワークスペースの２つ)を事前に作成しておく必要があります。</p>
  <h1>{{ msg }}</h1>
  <h2>これは 「リアル ユーザー監視(RUM) 」 と呼ばれるAzureの機能です。</h2>
  <h2>npm i --save @microsoft/applicationinsights-web</h2>
  <h2>npm i --save @microsoft/applicationinsights-clickanalytics-js</h2>
  <div>参考情報</div>
  <p>https://learn.microsoft.com/ja-jp/azure/azure-monitor/app/javascript-sdk?tabs=javascriptwebsdkloaderscript</p>

  <!-- button -->
  <h2>data-idで指定</h2>
  <button data-id="my-btn001">my-btn001</button>
  <div data-id="my-div001">
    <button data-id="my-btn002">my-btn002</button>
  </div>
  <button data-id="my-btn003">my-btn003</button>

  <p>div clickイベント</p>
  <div @click="clickButton2">div click button4</div>
  <div @click="clickButton2">div click button5</div>
  <div @click="clickButton2">div click button6</div>

  <!-- 
  <p>これより下はdata-id未設定</p>
  <div @click="clickButton">div button10</div>
  <div @click="clickButton">div button20</div>
  <div @click="clickButton">div button30</div> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
