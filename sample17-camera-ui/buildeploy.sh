npm run build
az storage blob upload-batch -s ./dist -d '$web' --account-name $STORAGE_ACCOUNT_NAME --overwrite

echo ""
echo ""
echo "ブラウザで↓↓↓↓にアクセスしてください"
az storage account show -n $STORAGE_ACCOUNT_NAME -g $RG_NAME --query "primaryEndpoints.web" --output tsv
echo ""
echo ""