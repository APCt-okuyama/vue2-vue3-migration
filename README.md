# vue2 から vue3 へのマイグレーション調査

## 参照情報

[Vue 3 以降ガイド(公式)](https://v3-migration.vuejs.org/ja/)
[ref1](https://zenn.dev/azukiazusa/articles/c8d76eb56f5fd8)
[ref2](https://zenn.dev/shippokun/articles/d14ce4989e3c4f)
[ref3](https://note.com/shunex/n/n50cd8e1ec4fe)

## 環境

```
$ node -v
v18.16.0
$ npm -v
9.6.7
apc-user:vue2-vue3-migration $ vue -V
@vue/cli 5.0.8
```

## サンプルのプロジェクトを作成して変換を試す

```
vue create sample
```

以下を利用している

```
element-ui
class-style component
```

## sample1 (class component)

利用できるけど微妙かも

```
<script lang="ts">
//import { Prop } from 'vue-property-decorator';
import { Options, Vue } from 'vue-class-component';
@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  //@Prop() private msg!: string;
  private msg!: string;
}
</script>
```

## sample2 (vue3 + class component)

## sample3 (element ui)

## PJ で利用している package.json

```
{
  "name": "specta-kytool-client",
  "version": "2.6.0",
  "private": true,
  "scripts": {
    "serve": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",
    "build": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build",
    "test:unit": "vue-cli-service test:unit",
    "lint": "vue-cli-service lint"
  },
  "main": "background.js",
  "dependencies": {
    "@microsoft/applicationinsights-web": "^3.0.2",
    "@types/file-saver": "^2.0.5",
    "axios": "^0.21.4",
    "axios-retry": "^3.3.1",
    "core-js": "^3.6.5",
    "element-ui": "^2.14.1",
    "fabric": "^5.3.0",
    "hooper": "^0.3.4",
    "html2canvas": "^1.4.1",
    "node-rsa": "^1.1.1",
    "pdfmake": "^0.2.7",
    "vue": "^2.6.11",
    "vue-application-insights": "^1.0.7",
    "vue-class-component": "^7.2.3",
    "vue-i18n": "^8.28.2",
    "vue-property-decorator": "^8.4.2",
    "vue-router": "^3.2.0",
    "vue2-touch-events": "^3.2.2",
    "vuedraggable": "^2.24.3",
    "vuex": "^3.4.0",
    "vuex-persistedstate": "^4.0.0-beta.3",
    "vuex-smart-module": "^0.4.6"
  },
  "devDependencies": {
    "@types/fabric": "^5.3.3",
    "@types/html2canvas": "^1.0.0",
    "@types/jest": "^24.0.19",
    "@types/node-rsa": "^1.1.1",
    "@types/pdfmake": "^0.2.2",
    "@typescript-eslint/eslint-plugin": "^2.33.0",
    "@typescript-eslint/parser": "^2.33.0",
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-plugin-typescript": "~4.5.0",
    "@vue/cli-plugin-unit-jest": "~4.5.0",
    "@vue/cli-plugin-vuex": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/eslint-config-prettier": "^6.0.0",
    "@vue/eslint-config-typescript": "^5.0.2",
    "@vue/test-utils": "^1.0.3",
    "eslint": "^6.7.2",
    "eslint-plugin-prettier": "^3.1.3",
    "eslint-plugin-vue": "^6.2.2",
    "lint-staged": "^9.5.0",
    "node-sass": "^8.0.0",
    "prettier": "^1.19.1",
    "sass-loader": "^10.2.1",
    "typescript": "~3.9.3",
    "vue-template-compiler": "^2.6.11"
  },
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "vue-cli-service lint",
      "git add"
    ]
  }
}
```
