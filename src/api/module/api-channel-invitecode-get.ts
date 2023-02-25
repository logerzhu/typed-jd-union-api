import { JdUnionBase } from '../api-base'
export type GetInvitecodeChannelParams = {
  /** 请求入参*/
  channelInviteReq: {
    /** 邀请类型：0-渠道邀请*/
    inviteType: number

    /** 备案场景：0-通用备案*/
    channelType: number
  }
}

export type GetInvitecodeChannelResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 邀请码*/
    inviteCode: string
  }
}
export class GetInvitecodeChannelAPI extends JdUnionBase {
  async getInvitecodeChannel(params: GetInvitecodeChannelParams) {
    return this.execute<GetInvitecodeChannelResult>(
      'jd.union.open.channel.invitecode.get',
      params
    )
  }
}
