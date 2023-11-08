# azure blobにデプロイ

```bash
pnpm install
pnpm run dev
pnpm run build:pro -> dist-proができあがる
```


```bash
az storage blob upload-batch -s ./dist-pro -d '$web' --account-name $STORAGE_ACCOUNT_NAME --overwrite
az storage account show -n $STORAGE_ACCOUNT_NAME -g $RG_NAME --query "primaryEndpoints.web" --output tsv
```



# ログインの処理を確認する

全体的に今後の参考にする

## permission.ts
```javascript
router.beforeEach(async (to, from, next) => {
  start()
  loadStart()
  if (getStorage(appStore.getUserInfo)) {
:
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
  :
```

## router/index.ts
```javascript
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
```
## en.ts (i18n)
```
  login: {
    welcome: 'Welcome to the system',
    message: 'Backstage management system',
    username: 'Username',
    password: 'Password',
    register: 'Register',
    checkPassword: 'Confirm password',
    login: 'Sign in',
    otherLogin: 'Sign in with',
    remember: 'Remember me',
    hasUser: 'Existing account? Go to login',
    forgetPassword: 'Forget password',
    usernamePlaceholder: 'Please input username',
    passwordPlaceholder: 'Please input password',
    code: 'Verification code',
    codePlaceholder: 'Please input verification code'
  },
```
## views/Login/Login.vue
```javascript

```

## views/Login/components/LoginForm.vue
```javascript

```
