![img](./autify-blob-top.png)

```
第８回
タイトル
Autifyのココがポイント：ローカルリプレイとか、テストシナリオの編集容易性
内容
作成したテストシナリオの編集中に、手元のブラウザ環境上で再生できて、編集が簡単とか、その辺を紹介

```

# はじめに

こんにちは。ACS 事業部の奥山です。

第８回では「ローカルリプレイ」、「テストシナリオの編集容易性」について紹介します。

# ローカルリプレイ（ここにレコーディング）
公式の[説明はこちら](https://help.autify.com/docs/ja/local-replay?highlight=%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%83%AA%E3%83%97%E3%83%AC%E3%82%A4)になります。
追加したいシナリオの位置まで自動で移動してくれるので、編集が非常に楽になります。

操作は非常に簡単で追加したい位置で「ここにレコーディング」をクリックするだけです。
![image](./001.png)
実際に動いているところみてみましょう。
![image](./002.gif)
ブラウザが立ち上がり、自動でログインして、指定した位置（今回の場合は4番目のステップ）まで移動しレコーディングを開始します。
ステップとして追加したい操作を行い「完了」をクリックします。
![image](./003.png)
赤枠で囲った部分が追加されました。簡単ですね。
長いシナリオを編集する場合、この機能は非常に便利です。

# テストシナリオの編集容易性
テストのシナリオは一度作成して完成ではありません。テストは`実行` => `確認` => `シナリオの修正(必要であれば)`を繰り返す必要があります。
![image](./004_test_cycle_basic.png)  

シナリオの品質はテストにとって最も重要な要素の一つです。品質の高いテストシナリオを作成・維持するためには、編集が容易であることが求められます。Autifyではテストシナリオの編集はプログラミングの知識がなくてもGUI操作で簡単に行えます。このセクションではその編集の容易性を紹介したいと思います。

　追加
　変更
　削除
　
# 最後に

私達 ACS 事業部は Azure・AKS を活用した内製化のご支援をしております。ご相談等ありましたらぜひご連絡ください。

[https://www.ap-com.co.jp/cloudnative/?utm_source=blog&utm_medium=article_bottom&utm_campaign=cloudnative:embed:cite]

また、一緒に働いていただける仲間も募集中です！  
切磋琢磨しながらスキルを向上できる、エンジニアには良い環境だと思います。ご興味を持っていただけたら嬉しく思います。

[https://www.ap-com.co.jp/recruit/info/requirements.html?utm_source=blog&utm_medium=article_bottom&utm_campaign=recruit:embed:cite]

<fieldset style="border:4px solid #95ccff; padding:10px">
本記事の投稿者: [奥山 拓弥](https://techblog.ap-com.co.jp/archive/author/mountain1415)  
</fieldset>
