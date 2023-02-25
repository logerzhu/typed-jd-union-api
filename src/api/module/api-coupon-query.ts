import { JdUnionBase } from '../api-base'
export type QueryCouponParams = {
  /** 优惠券链接集合；上限10（GET请求）；上限50（POST请求或SDK调用）*/
  couponUrls: undefined
}

export type QueryCouponResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    couponResp: {
      /** 券领取结束时间(时间戳，毫秒)*/
      takeEndTime: number

      /** 券领取开始时间(时间戳，毫秒)*/
      takeBeginTime: number

      /** 券剩余张数*/
      remainNum: number

      /** 券有效状态*/
      yn: string

      /** 券总张数*/
      num: number

      /** 券消费限额*/
      quota: number

      /** 券链接*/
      link: string

      /** 券面额*/
      discount: number

      /** 券有效使用开始时间(时间戳，毫秒)*/
      beginTime: number

      /** 券有效使用结束时间(时间戳，毫秒)*/
      endTime: number

      /** 券使用平台*/
      platform: string
    }
  }
}
export class QueryCouponAPI extends JdUnionBase {
  async queryCoupon(params: QueryCouponParams) {
    return this.execute<QueryCouponResult>('jd.union.open.coupon.query', params)
  }
}
