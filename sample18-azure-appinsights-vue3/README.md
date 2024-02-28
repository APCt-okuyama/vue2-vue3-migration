# Azure Application Insights with Vue 3

Vue3で Azure Application Insights を利用してみよう。(ブログにする)

参考: https://www.isoroot.jp/blog/4941/
https://learn.microsoft.com/ja-jp/azure/azure-monitor/app/


クリック分析自動収集プラグインを有効にする


```bash
npm i --save @microsoft/applicationinsights-web
npm i --save @microsoft/applicationinsights-clickanalytics-js
```

# (azure cli) SUBSCRIPTION_IDの確認
```bash
$ az account list --query "[].{name:name, subscriptionId:id}" --output table
```

# Azure Application Insightsの設定
log analytics workspaceの作成
```bash
export RG_NAME=sample12-vue3app-okym
export LOCATION=japaneast
az group create --name $RG_NAME --location $LOCATION
#log analytics workspaceの作成
export WORKSPACE_NAME=sample18appi-logw
az monitor log-analytics workspace create -g $RG_NAME --workspace-name $WORKSPACE_NAME
#application insightsの作成
export APPINSIGHTS_NAME=sample18appi-ai
az monitor app-insights component create --app $APPINSIGHTS_NAME --location $LOCATION --kind web -g $RG_NAME --application-type web --workspace $WORKSPACE_NAME
```


# Application Insights 接続文字列の取得
```bash
export SUBSCRIPTION_ID=<subscription_id>
export RG_NAME=<resource_group_name>
export APPINSIGHTS_NAME=<app_insights_name>
export MYAPPINSIGHTS_CONNECTSTRING=$(az monitor app-insights component show --subscription $SUBSCRIPTION_ID --resource-group $RG_NAME --app $APPINSIGHTS_NAME --query connectionString --output tsv)
```

# Azure Blob Storageの設定
```
export RG_NAME=sample12-vue3app-okym
export LOCATION=japaneast
export STORAGE_ACCOUNT_NAME=sample18appivue3
```


```bash
#リソース作成
az group create --name $RG_NAME --location $LOCATION
#az group delete --name $RG_NAME

#azure storage の作成
az storage account create --name $STORAGE_ACCOUNT_NAME --resource-group $RG_NAME --location $LOCATION --sku Standard_LRS --kind StorageV2 --https-only true --allow-blob-public-access false

#静的サイトの有効化
az storage blob service-properties update --account-name $STORAGE_ACCOUNT_NAME --static-website --404-document error.html --index-document index.html
```

SPAのデプロイ
```bash
az storage blob upload-batch -s ./dist -d '$web' --account-name $STORAGE_ACCOUNT_NAME --overwrite
#URLの確認
az storage account show -n $STORAGE_ACCOUNT_NAME -g $RG_NAME --query "primaryEndpoints.web" --output tsv
```
# KQL (sample)

data-id が指定されているイベントと指定されていないイベントの数を集計する
```
customEvents 
| summarize 
    count_specified = countif(name has 'specified'), 
    count_not_specified = countif(name !has 'specified')
```



