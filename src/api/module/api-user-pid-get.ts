import { JdUnionBase } from '../api-base'
export type GetPidUserParams = {
  /** 查询对象*/
  pidReq: {
    /** 联盟ID*/
    unionId: number

    /** 子站长ID*/
    childUnionId: number

    /** 推广类型,1APP推广 2聊天工具推广 */
    promotionType: number

    /** 子站长的推广位名称，如不存在则创建，不填则由联盟根据母账号信息创建 */
    positionName?: string

    /** 媒体名称，即子站长的app应用名称，推广方式为app推广时必填，且app名称必须为已存在的app名称 */
    mediaName: string
  }
}

export type GetPidUserResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: string
}
export class GetPidUserAPI extends JdUnionBase {
  async getPidUser(params: GetPidUserParams) {
    return this.execute<GetPidUserResult>('jd.union.open.user.pid.get', params)
  }
}
