import { JdUnionBase } from '../api-base'
export type GetRelationChannelParams = {
  /** 请求入参*/
  channelRelationGetReq: {
    /** 邀请码*/
    inviteCode: string

    /** 备注名：仅支持传入中文、字母、数字、下划线或中划线，最多15个字符*/
    note?: string
  }
}

export type GetRelationChannelResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 渠道关系ID*/
    channelId: number
  }
}
export class GetRelationChannelAPI extends JdUnionBase {
  async getRelationChannel(params: GetRelationChannelParams) {
    return this.execute<GetRelationChannelResult>(
      'jd.union.open.channel.relation.get',
      params
    )
  }
}
