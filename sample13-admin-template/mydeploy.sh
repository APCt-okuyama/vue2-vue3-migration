pnpm run build:pro
az storage blob upload-batch -s ./dist-pro -d '$web' --account-name $STORAGE_ACCOUNT_NAME --overwrite
az storage account show -n $STORAGE_ACCOUNT_NAME -g $RG_NAME --query "primaryEndpoints.web" --output tsv
# https://sample12vue3app.z11.web.core.windows.net/

# run autify
#autify web api execute-scenarios --project-id $AUTIFY_PROJECT_ID --execute-scenarios-request '{ 
#  "scenarios": [{"id": '"$AUTIFY_SCENARIO_ID"'}], 
#  "capabilities": [{"os": "Linux", "browser": "Chrome"}] 
#}'

#autify web api execute-scenarios --project-id $AUTIFY_PROJECT_ID --execute-scenarios-request '{ 
#  "scenarios": [{"id": '"$AUTIFY_SCENARIO_ID"'}], 
#  "capabilities": [{"os": "Windows Server", "browser": "Edge"}] 
#}'
