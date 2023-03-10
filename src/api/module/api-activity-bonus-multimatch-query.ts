import { JdUnionBase } from '../api-base'
export type QueryMultimatchBonusActivityParams = {
  /** 请求入參*/
  batchUserMatchActivityRequest: {
    /** 用户ID类型，传入此参数可获得个性化推荐结果。当前userIdType支持的枚举值包括：8、16、32、64、128、32768。userIdType和userId需同时传入，且一一对应。userIdType各枚举值对应的userId含义如下：8(安卓移动设备Imei); 16(苹果移动设备Openudid)；32(苹果移动设备idfa); 64(安卓移动设备imei的md5编码，32位，大写，匹配率略低);128(苹果移动设备idfa的md5编码，32位，大写，匹配率略低); 32768(安卓移动设备oaid); 131072(安卓移动设备oaid的md5编码，32位，大写)*/
    userIdType: number

    /** userIdType对应的批量用户设备ID,最多20个*/
    userIds: string[]
  }
}

export type QueryMultimatchBonusActivityResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    batchUserMatchActivityResponse: {
      /** 用户ID类型，传入此参数可获得个性化推荐结果。当前userIdType支持的枚举值包括：8、16、32、64、128、32768。userIdType和userId需同时传入，且一一对应。userIdType各枚举值对应的userId含义如下：8(安卓移动设备Imei); 16(苹果移动设备Openudid)；32(苹果移动设备idfa); 64(安卓移动设备imei的md5编码，32位，大写，匹配率略低);128(苹果移动设备idfa的md5编码，32位，大写，匹配率略低); 32768(安卓移动设备oaid); 131072(安卓移动设备oaid的md5编码，32位，大写)*/
      userIdType: number

      /** userIdType对应的用户设备ID*/
      userId: string

      /** 数据明细*/
      userMatchActivityList: {
        /** 数据明细*/
        userMatchActivityResponse: {
          /** 奖励活动id*/
          activityId: number

          /** 开始时间，时间戳（ms）*/
          beginTime: number

          /** 结束时间，时间戳（ms）*/
          endTime: number
        }
      }[]
    }
  }[]
}
export class QueryMultimatchBonusActivityAPI extends JdUnionBase {
  async queryMultimatchBonusActivity(
    params: QueryMultimatchBonusActivityParams
  ) {
    return this.execute<QueryMultimatchBonusActivityResult>(
      'jd.union.open.activity.bonus.multimatch.query',
      params
    )
  }
}
