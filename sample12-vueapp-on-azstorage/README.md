# Azure Storage での静的 Web サイト ホスティング

テスト・動作確認用

## az cli
```bash
$ az version 
{
  "azure-cli": "2.47.0",
  "azure-cli-core": "2.47.0",
  "azure-cli-telemetry": "1.0.8",
  "extensions": {}
}
```

## 1. リソースグループ の作成

作成
```bash
RG_NAME=sample12-vue3app
LOCATION=japaneast
az group create --name $RG_NAME --location $LOCATION
```

削除
```bash
az group delete --name $RG_NAME
```

## 2. azure storage (静的サイトの有効化)

## azure storage の作成
```bash
STORAGE_ACCOUNT_NAME=sample12vue3app
az storage account create --name $STORAGE_ACCOUNT_NAME --resource-group $RG_NAME --location $LOCATION --sku Standard_LRS --kind StorageV2 --https-only true --allow-blob-public-access false
```

## 静的サイトの有効化
```bash
az storage blob service-properties update --account-name $STORAGE_ACCOUNT_NAME --static-website --404-document error.html --index-document index.html
```

## ファイルのアップロード

```bash
az storage blob upload-batch -s ./dist -d '$web' --account-name $STORAGE_ACCOUNT_NAME --overwrite
```

## urlの取得・確認
```bash
az storage account show -n $STORAGE_ACCOUNT_NAME -g $RG_NAME --query "primaryEndpoints.web" --output tsv
```

## アクセスしてみよう。※ブラウザからもアクセスして確認する
```bash
$ curl https://sample12vue3app.z11.web.core.windows.net/
this is index.

$ curl https://sample12vue3app.z11.web.core.windows.net/aaa
this is index.
```
