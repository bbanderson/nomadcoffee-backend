# 사전 지식

* * *

### 1. npm i graphql apollo-server

### 2. npm i @babel/{core,preset-env,node} // babel 자체, 개발환경에서 런타임 시 코드 업데이트, 콘솔에서의 js 실행기

### 3. touch babel.config.json
```js
{
    "presets": ["@babel/preset-env"]
}
```

### 4. npm i prisma (Deprecated : npm i @prisma/cli -D)

### 5. npx prisma init

### 6. npx prisma migrate dev (dev : 자동으로 client 생성, client : 데이터베이스와 어떻게 말하는가)

client는 Prisma 개발팀이 node_modules에 넣었습니다(node_modules/@prisma/client).
이는 prisma/schema.prisma에 우리가 정의한 Model을 기반으로 생성됩니다.
따라서 자동으로 @prisma/client에서 import 되며, Tooltip 역시 우리의 Model을 기반으로 만들어집니다.

#### 주의할 점
1. 스키마(schema.prisma 파일)를 수정하고 나면, typeDefs도 같이 업데이트 해주어야 한다.
2. 기본적으로 graphql은 optional, prisma에서는 required다.

### 7. npx prisma studio

### 8. npm i graphql-tools
typeDefs끼리 merge

* * *

# 클론 코딩 시작

기존 `prisma/` 폴더, `movies` 폴더, postgresql 안에 있는 `instaclone` DB를 지운 뒤,
DB 새로 생성 후 `npx prisma init`

schema.prisma를 변경할 때마다 migtrate 해야 한다.