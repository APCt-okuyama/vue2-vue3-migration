pnpm run build:pro
az storage blob upload-batch -s ./dist-pro -d '$web' --account-name $STORAGE_ACCOUNT_NAME --overwrite
az storage account show -n $STORAGE_ACCOUNT_NAME -g $RG_NAME --query "primaryEndpoints.web" --output tsv
