import { createI18n } from 'vue-i18n';

//初期値
const messages = {
  ja: {
    message1: { name: "これはテスト用の文字列です(KYT853)" },
    message2: { name: "これはテスト用の文字列です（KYT853）" },    
  },
};

const i18n = createI18n({
  // const i18n = new VueI18n({
  locale: 'ja', // デフォルトのロケールはja設定
  //allowComposition: true,
  globalInjection: true,
  legacy: false, //setup関数を利用する場合はfalseにする
  messages,
});

export default i18n;