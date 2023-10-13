# vue2 から vue3 へのマイグレーション調査

対象は vue ファイル数:73 (34694 line)
利用ライブラリ数: 22 + 26

## 参照情報

[Vue 3 以降ガイド(公式)](https://v3-migration.vuejs.org/ja/)
[ref1](https://zenn.dev/azukiazusa/articles/c8d76eb56f5fd8)
[ref2](https://zenn.dev/shippokun/articles/d14ce4989e3c4f)
[ref3](https://note.com/shunex/n/n50cd8e1ec4fe)
[ref4 vue2+vite](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/)

## 環境

```
$ node -v
v18.16.0
$ npm -v
9.6.7
apc-user:vue2-vue3-migration $ vue -V
@vue/cli 5.0.8
```

## DevTool

```
Vue 3 をサポートした Router, Devtools, test utils の新バージョン
ビルドツールチェーン: Vue CLI -> Vite
状態管理: Vuex -> Pinia
IDE サポート: Vetur -> Volar
新しいコマンドライン TypeScript サポート: vue-tsc
SSG: VuePress -> VitePress
JSX: @vue/babel-preset-jsx -> @vue/babel-plugin-jsx
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

利用できるけど微妙かも修正箇所は多い
※vue-property-decorator,vue-class-component はすでにメンテナンスモード

```json
package.json
    "vue-class-component": "^8.0.0-0",
    "vue-property-decorator": "^10.0.0-rc.3"
```

```typescript
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

動いているけど本当に Vue3 で動いているのか？確認方法がわからない

## sample2 (vue3 + class component)

## sample3 (element ui)

## sample4 (sample4-vue3-composition)

[これ](https://vue-composition-converter.vercel.app/) で composition 形式 に変換できる
※手動で手直しは必要だと思う
※他にもツールがありそうなので調査する
※小さなファイルからひとつずつ変換するのが良さそう　 Top.vue など大きなファイルは厳しい。

## sample5 vite

@vitejs/plugin-vue2 は only works with Vue@^2.7.0. なので断念。。。

## sample6 vite

[参考 URL](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/)

vue2+vite にできるけど、vue3 にしてから変更した方がよさそう

## sample7 vite で新規のプロジェクトを作成する

```
npm create vite@latest
```

```
npm init vite@latest vue3-vite-2nd-project -- --template vue-ts
```

## sample8 vue router

[参考 URL](https://router.vuejs.org/guide/migration/)

## sample9 vuex

Breaking Changes

## PJ で利用している package.json

```json
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
    "@types/file-saver": "^2.0.5",！！！利用していないので削除！！！
    "axios": "^0.21.4", ※最新にする？
    "axios-retry": "^3.3.1",※最新にする？
    "core-js": "^3.6.5",※最新にする？
★★ "element-ui": "^2.14.1",
    "fabric": "^5.3.0",　※最新
    "hooper": "^0.3.4",　※最新
    "html2canvas": "^1.4.1", ！！！利用していないので削除！！！
    "node-rsa": "^1.1.1",※最新
    "pdfmake": "^0.2.7",※最新
★★ "vue": "^2.6.11",　★★★※3系にする
    "vue-application-insights": "^1.0.7",
★　 "vue-class-component": "^7.2.3",※どうする。。。
    "vue-i18n": "^8.28.2",　※9.5.0があります
★　 "vue-property-decorator": "^8.4.2",※どうする。。。
★   "vue-router": "^3.2.0",　※4.2.5へ上げる
    "vue2-touch-events": "^3.2.2", ※vue3-touch-eventsに変更する
    "vuedraggable": "^2.24.3",※vue3のものに変更する
★    "vuex": "^3.4.0",※vue3のものに変更する pinia
    "vuex-persistedstate": "^4.0.0-beta.3",※vuex-persistedstate　3.x.xブランチに
    "vuex-smart-module": "^0.4.6"　※0.6.2 がsupport vue3となっている
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
    "eslint": "^6.7.2",　※最新は8.51.0
    "eslint-plugin-prettier": "^3.1.3",
    "eslint-plugin-vue": "^6.2.2",
    "lint-staged": "^9.5.0",
    "node-sass": "^8.0.0",
    "prettier": "^1.19.1",
    "sass-loader": "^10.2.1",
    "typescript": "~3.9.3",※★★★これも上げる？
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

## 対象ファイルの確認

vue ファイル数:73

```
$ find src -name "*.vue" | grep -c "\.vue$"
73
```

各ファイルの行数

```
$ find src -name "*.vue" | grep "\.vue$" | xargs wc -l
:
34694 total
```

ライブラリ数: 22 + 26

## package.json ライブラリ

vue-class-component vue3 でも利用可能？おすすめされていない※メンテナンスされていない

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
    "@types/file-saver": "^2.0.5", // 利用してないので削除
    "axios": "^0.21.4",
    "axios-retry": "^3.3.1",
    "core-js": "^3.6.5", //3.33.0　※viteにしたらbabelが不要になるので削除できるっぽい
    "element-ui": "^2.14.1", //element plus
    "fabric": "^5.3.0",
    "hooper": "^0.3.4",
    "html2canvas": "^1.4.1", // 利用してないので削除
    "node-rsa": "^1.1.1", // そのままでOK
    "pdfmake": "^0.2.7", // そのままでOK
    "vue": "^2.6.11",　//3に上げる
    "vue-application-insights": "^1.0.7",
    "vue-class-component": "^7.2.3", //vue3で利用するためにには "^8.0.0-0"
    "vue-i18n": "^8.28.2",
    "vue-property-decorator": "^8.4.2", //vue3で利用するためにには "^10.0.0-rc.3"
    "vue-router": "^3.2.0", //Vue Router 4
    "vue2-touch-events": "^3.2.2", //vue3-touch-events に変更
    "vuedraggable": "^2.24.3", //vue.draggable.next に変更
    "vuex": "^3.4.0", // Vuex 4に変更
    "vuex-persistedstate": "^4.0.0-beta.3", // vuex4に対応したブランチに変更
    "vuex-smart-module": "^0.4.6" // vuex4に対応したブランチに変更
  },
  "devDependencies": {
    "@types/fabric": "^5.3.3",
    "@types/html2canvas": "^1.0.0",//不要
    "@types/jest": "^24.0.19", //使ってないから一旦削除する？
    "@types/node-rsa": "^1.1.1",
    "@types/pdfmake": "^0.2.2",
    "@typescript-eslint/eslint-plugin": "^2.33.0",
    "@typescript-eslint/parser": "^2.33.0",
    "@vue/cli-plugin-babel": "~4.5.0",//viteにするなら削除
    "@vue/cli-plugin-eslint": "~4.5.0",//viteにするなら削除
    "@vue/cli-plugin-router": "~4.5.0",//viteにするなら削除
    "@vue/cli-plugin-typescript": "~4.5.0",//viteにするなら削除
    "@vue/cli-plugin-unit-jest": "~4.5.0",//viteにするなら削除
    "@vue/cli-plugin-vuex": "~4.5.0",//viteにするなら削除
    "@vue/cli-service": "~4.5.0",//viteにするなら削除
    "@vue/eslint-config-prettier": "^6.0.0",
    "@vue/eslint-config-typescript": "^5.0.2",
    "@vue/test-utils": "^1.0.3",
    "eslint": "^6.7.2",
    "eslint-plugin-prettier": "^3.1.3",
    "eslint-plugin-vue": "^6.2.2",
    "lint-staged": "^9.5.0",
    "node-sass": "^8.0.0",
    "prettier": "^1.19.1",
    "sass-loader": "^10.2.1", //viteにするなら削除
    "typescript": "~3.9.3", //これも上げる？
    "vue-template-compiler": "^2.6.11"// vue3にするときに削除
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

## リファクタ検討

現在の状態の説明

```
$ tree -L 3 src
src
├── @types
│   └── type.d.ts
├── App.vue
├── assets
│   ├── app.ico
│   ├── clickme.png
│   ├── docs
│   │   └── sample_terms_of_service.pdf
│   ├── icon
│   │   ├── counterplan.png
│   │   ├── disasterType.png
│   │   ├── filter.png
│   │   ├── money_black.png
│   │   ├── money_white.png
│   │   ├── occupation.png
│   │   ├── risk.png
│   │   ├── score.png
│   │   ├── search_black.png
│   │   ├── search_white.png
│   │   ├── serious.png
│   │   ├── source.png
│   │   └── workType.png
│   ├── json
│   │   ├── SourceCompany.json
│   │   └── TagProperty.json
│   ├── logo.png
│   └── menu.png
├── components
│   ├── Footer.vue
│   ├── Header.vue
│   ├── ImageCarousel.vue
│   ├── ImageEnlarge.vue
│   ├── ImageViewer.vue
│   ├── ListCalendar.vue
│   ├── TopDisasterCase.vue
│   ├── TopRecommend.vue
│   ├── TopRiskCase.vue
│   ├── dialog
│   │   ├── DisasterFileUploadOne.vue
│   │   ├── DisasterImageUpload.vue
│   │   ├── DisasterUserView.vue
│   │   ├── DocumentConfigItem.vue
│   │   ├── DocumentConfigView.vue
│   │   ├── ListDetail.vue
│   │   ├── OriginalDocViewer.vue
│   │   ├── TermsOfService.vue
│   │   ├── TopDetail.vue
│   │   ├── TopSave.vue
│   │   ├── TopSearchFilter.vue
│   │   ├── TopSearchFilterConfig.ts
│   │   ├── UserAccessData.vue
│   │   ├── UserAdd.vue
│   │   ├── UserEdit.vue
│   │   ├── UserEditPInfo.vue
│   │   ├── UserLicense.vue
│   │   ├── UserPartnerCompany.vue
│   │   ├── UserPassword.vue
│   │   ├── UserProject.vue
│   │   └── UserRemove.vue
│   ├── disaster
│   │   ├── Config.ts
│   │   ├── DisasterPDFPrint.vue
│   │   ├── DisasterPDFPrintDialog.vue
│   │   ├── TableHeader.vue
│   │   └── TableMultiItem.vue
│   ├── ds
│   │   ├── Disaster.vue
│   │   ├── KYSheets.vue
│   │   ├── Player.vue
│   │   └── Setup.vue
│   ├── ky
│   │   ├── Admin.vue
│   │   ├── KYSheetHeader.vue
│   │   ├── KYSheetWeatherInfo.vue
│   │   └── UserView.vue
│   └── parts
│       ├── DocumentTypeSelect.vue
│       ├── HandwritingSignature.vue
│       ├── KYSheetInstructionGuide.vue
│       ├── KYSheetUsageGuide.vue
│       └── SpeechInputButton.vue
├── element-variables.scss
├── locales
│   ├── en.json
│   └── ja.json
├── main.ts
├── router
│   └── index.ts
├── shims-tsx.d.ts
├── shims-vue.d.ts
├── store
│   ├── Auth.ts
│   ├── Config.ts
│   ├── Ky.ts
│   ├── Recommend.ts
│   ├── SASToken.ts
│   └── index.ts
├── type.d.ts
├── util
│   ├── ApiUtility.ts
│   ├── Common.ts
│   ├── CommonKYSheet.ts
│   ├── CommonPassword.ts
│   ├── CommonSASToken.ts
│   ├── Const.ts
│   └── pdfMake
│       ├── PDFDisasterCase.ts
│       ├── PDFKySheet.ts
│       ├── PDFMakeBase.ts
│       └── PDFSafetyInstruction.ts
└── views
    ├── Detail.vue
    ├── Error.vue
    ├── Initial.vue
    ├── Recommend.vue
    ├── Top.vue
    ├── cs
    │   ├── LogData.vue
    │   └── ManualSetting.vue
    ├── ds
    │   └── Index.vue
    ├── inquiry
    │   ├── Form.vue
    │   ├── Manual.vue
    │   └── News.vue
    ├── list
    │   ├── KYSheets.vue
    │   ├── SafetyInstruct.vue
    │   ├── SafetyInstructPDFPrint.vue
    │   └── SavedDisaster.vue
    ├── setting
    │   ├── AllBulkSettings.vue
    │   ├── DictionaryBulk.vue
    │   ├── DisasterBulk.vue
    │   ├── DisasterEdit.vue
    │   ├── DocumentConfig.vue
    │   ├── StructBulk.vue
    │   ├── ThumbnailBulk.vue
    │   ├── UserUIConfig.vue
    │   ├── UserUIConfigInstruction.vue
    │   └── UserUIConfigKySheet.vue
    └── user
        └── Management.vue

23 directories, 120 files
```
