import { JdUnionBase } from '../api-base'
export type QueryRelationChannelParams = {
  /** 请求入参*/
  channelRelationQueryReq: {
    /** 页码，默认1*/
    pageIndex?: number

    /** 每页数量，默认100，上限100*/
    pageSize?: number

    /** 渠道关系ID*/
    channelId?: number
  }
}

export type QueryRelationChannelResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data?: {
    /** 数据明细*/
    channelRelationQueryResp?: {
      /** 渠道关系ID*/
      channelId: number

      /** 备案时间，格式：yyyy-MM-dd HH:mm:ss*/
      createTime?: string

      /** 备注名：仅支持传入中文、字母、数字、下划线或中划线，最多20个字符*/
      note?: string
    }
  }

  /** 总数*/
  totalCount?: number
}
export class QueryRelationChannelAPI extends JdUnionBase {
  async queryRelationChannel(params: QueryRelationChannelParams) {
    return this.execute<QueryRelationChannelResult>(
      'jd.union.open.channel.relation.query',
      params
    )
  }
}
