京东开放平台京东联盟NodeJS API
===========

根据 [京东联盟API文档](https://union.jd.com/openplatform/api) 生成的带TypeScript类型定义和注释的SDK

## 模块状态
- [![NPM version](https://badge.fury.io/js/typed-jd-union-api.png)](http://badge.fury.io/js/typed-jd-union-api)

## 安装

```sh
$ npm install typed-jd-union-api
```

## Usage

```typescript
import {JdUnionAPI} from 'typed-jd-union-api'

async function run() {
  const client = new JdUnionAPI({
    appKey: 'xx',
    secretKey: 'xxx'
  })
  
  const result = await client.queryActivity({
    activityReq: { pageSize: 3 }
  })
  
  console.log(result.totalCount)
}
```