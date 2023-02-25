import { JdUnionBase } from '../api-base'
export type StopGiftCouponParams = {
  /** 请求入参*/
  couponReq: {
    /** 礼金批次ID*/
    giftCouponKey: string
  }
}

export type StopGiftCouponResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string
}
export class StopGiftCouponAPI extends JdUnionBase {
  async stopGiftCoupon(params: StopGiftCouponParams) {
    return this.execute<StopGiftCouponResult>(
      'jd.union.open.coupon.gift.stop',
      params
    )
  }
}
