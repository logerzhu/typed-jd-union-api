import { JdUnionBase } from '../api-base'
export type QueryPromotionStatisticsParams = {
  /** 请求入参*/
  promotionEffectDataReq: {
    /** 如果传入的skuId为自营商品则效果数据为这个skuId的推广效果，如果是pop商品则返回sku所属的spu的推广数据 （skuId和activityUrl只能二选一）*/
    skuId?: number

    /** 活动的长链接或者短链（skuId和activityUrl只能二选一）*/
    activityUrl?: string

    /** 数据的日期范围 （1：今日实时)， 默认为1*/
    timeType?: number

    /** 返回的数据类型（1：汇总数据 )，默认为1*/
    dataType?: number

    /** 返回的数据指标，需要返回多个指标时用英文逗号分隔，目前可用：  clickPv(点击量),estimateValidOrders(有效订单量),estimateValidGmv(有效订单金额),estimateValidFee(预估收入),refundOrders(退款订单量),completeOrders(完成订单量),completeGmv(完成订单金额),actualFee(实际收入)*/
    fields: string
  }
}

export type QueryPromotionStatisticsResult = {
  /** 返回码*/
  code?: number

  /** 返回消息*/
  message?: string

  /** 数据明细*/
  data?: {
    /** 数据明细*/
    promotionEffectDataResp?: {
      /** 联盟ID*/
      unionId?: number

      /** 商品ID*/
      skuId?: number

      /** 活动链接*/
      activityUrl?: string

      /** 数据的日期范围*/
      timeType?: number

      /** 返回的数据类型*/
      dataType?: number

      /** 如果（timeType=1）是汇总数据，当（dataType=1）为今日实时，则数据结果为当日0点至当前小时的汇总数据，time值格式为 2021-12-30 11:11*/
      time?: string

      /** 点击量*/
      clickPv?: number

      /** 有效订单量*/
      estimateValidOrders?: number

      /** 预估收入*/
      estimateValidFee?: number

      /** 有效订单金额*/
      estimateValidGmv?: number

      /** 退款订单量： 当日下单付款后又取消的订单量*/
      refundOrders?: number

      /** 完成订单量*/
      completeOrders?: number

      /** 完成订单金额*/
      completeGmv?: number

      /** 实际收入*/
      actualFee?: number
    }
  }
}
export class QueryPromotionStatisticsAPI extends JdUnionBase {
  async queryPromotionStatistics(params: QueryPromotionStatisticsParams) {
    return this.execute<QueryPromotionStatisticsResult>(
      'jd.union.open.statistics.promotion.query',
      params
    )
  }
}
