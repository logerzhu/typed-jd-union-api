import { JdUnionBase } from '../api-base'
export type QueryGoodsSellingParams = {
  /** 请求入参*/
  req: {
    /** 京东skuId集合，最多100个*/
    skuIds: number[]
  }
}

export type QueryGoodsSellingResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    sellingGoodsResp: {
      /** 京东skuId*/
      skuId: number

      /** 商品名称*/
      skuName: string

      /** 落地页*/
      materialUrl: string

      /** 自营：g；非自营：p*/
      owner: string

      /** 主图链接*/
      imageUrl: string

      /** 图片链接集合*/
      imgList: string[]

      /** 一级类目ID*/
      cid1: number

      /** 二级类目ID*/
      cid2: number

      /** 三级类目ID*/
      cid3: number

      /** 一级类目名称*/
      cid1Name: string

      /** 二级类目名称*/
      cid2Name: string

      /** 三级类目名称*/
      cid3Name: string

      /** 30天销量*/
      inOrderCount30Days: number

      /** 好评数*/
      goodComments: number

      /** 无线价格*/
      wlPrice: number

      /** 促销价格*/
      lowestPrice: number

      /** 无线佣金比例*/
      wlCommissionShare: number

      /** 无线佣金*/
      wlCommission: number

      /** 优惠券集合*/
      couponList: {
        /** 优惠券集合*/
        coupon: {
          /** 优惠券链接*/
          link: string

          /** 优惠券额度*/
          discount: number

          /** 消费限额*/
          quota: number

          /** 1：是；0：否*/
          isBest: number
        }
      }[]

      /** 店铺*/
      shopInfo?: {
        /** 店铺名称*/
        shopName?: string

        /** 店铺类型：0国内，1海外*/
        shopType?: number
      }

      /** 优惠码列表，目前仅商羚海外站有该字段*/
      promotionCodeList?: {
        /** 优惠码列表*/
        promotionCode?: {
          /** 优惠码名称*/
          promoName?: string

          /** 优惠码code*/
          promoCode?: string

          /** 开始时间*/
          beginTime?: number

          /** 结束时间*/
          endTime?: number

          /** 可用总次数*/
          totalCnt?: number

          /** 促销类型，1直降，2满减，3满折*/
          promoType?: number

          /** 优惠码状态,1有效，0失效*/
          state?: number

          /** 优惠方式，直降金额*/
          directReduceAmount?: string
        }
      }[]

      /** 币种：USD代表美元，CNY代表人民币*/
      currency?: string
    }
  }[]
}
export class QueryGoodsSellingAPI extends JdUnionBase {
  async queryGoodsSelling(params: QueryGoodsSellingParams) {
    return this.execute<QueryGoodsSellingResult>(
      'jd.union.open.selling.goods.query',
      params
    )
  }
}
