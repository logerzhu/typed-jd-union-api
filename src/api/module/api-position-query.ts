import { JdUnionBase } from '../api-base'
export type QueryPositionParams = {
  /** 请求对象*/
  positionReq: {
    /** 需要查询的目标联盟id*/
    unionId: number

    /** 推客unionid对应的“授权Key”，在联盟官网-我的工具-我的API中查询，授权Key具有唯一性，有效期365天，删除或创建新的授权Key后原有的授权Key自动失效*/
    key: string

    /** 3：私域推广位，上限5000个，不在联盟后台展示，无对应 PID；4：联盟后台推广位，上限500个，会在推客联盟后台展示，可用于内容平台推广*/
    unionType: number

    /** 页码，上限100*/
    pageIndex: number

    /** 每页条数，上限100*/
    pageSize: number
  }
}

export type QueryPositionResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 页码*/
    pageNo: number

    /** 每页数量*/
    pageSize: number

    /** 返回结果*/
    result: {
      /** 返回结果*/
      positionResp: {
        /** 推广位ID*/
        id: number

        /** 站点ID，如网站ID/appID/snsID*/
        siteId: number

        /** 推广位名称*/
        spaceName: string

        /** 站点类型 1.网站推广位2.APP推广位3.导购媒体推广位4.聊天工具推广位*/
        type: number

        /** pid：仅uniontype传4时，展示pid；可用于内容平台推广*/
        pid?: string
      }
    }

    /** 总数*/
    total: number
  }
}
export class QueryPositionAPI extends JdUnionBase {
  async queryPosition(params: QueryPositionParams) {
    return this.execute<QueryPositionResult>(
      'jd.union.open.position.query',
      params
    )
  }
}
