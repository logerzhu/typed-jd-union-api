import { JdUnionBase } from '../api-base'
export type CreatePositionParams = {
  /** 请求对象*/
  positionReq: {
    /** 需要创建的目标联盟id*/
    unionId: number

    /** 推客unionid对应的“授权Key”，在联盟官网-我的工具-我的API中查询，授权Key具有唯一性，有效期365天，删除或创建新的授权Key后原有的授权Key自动失效*/
    key: string

    /** 3：私域推广位，上限5000个，不在联盟后台展示，无对应 PID；4：联盟后台推广位，上限500个，会在推客联盟后台展示，自动生成对应PID，可用于内容平台推广*/
    unionType: number

    /** 站点类型 1.网站推广位2.APP推广位3.导购媒体推广位4.聊天工具推广位*/
    type: number

    /** 推广位名称集合，英文,分割；上限50*/
    spaceNameList: undefined

    /** 站点ID：网站的ID/app ID/snsID 。当type非4(聊天工具)时，siteId必填*/
    siteId: number
  }
}

export type CreatePositionResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 推广位结果集合*/
    resultList: {
      /** 推广位结果，但是对应的pid不能作为母子分佣使用。*/
      result: string
    }

    /** 站点ID*/
    siteId: number

    /** 站点类型 1.网站推广位2.APP推广位3.导购媒体推广位4.聊天工具推广位*/
    type: number

    /** 联盟ID*/
    unionId: number

    /** pid结果集*/
    pid?: {
      /** pid结果，仅uniontype传4时，展示pid；可用于内容平台推广*/
      pid?: string
    }
  }
}
export class CreatePositionAPI extends JdUnionBase {
  async createPosition(params: CreatePositionParams) {
    return this.execute<CreatePositionResult>(
      'jd.union.open.position.create',
      params
    )
  }
}
