import { JdUnionBase } from '../api-base'
export type QueryBonusOrderParams = {
  /** 查询对象*/
  orderReq: {
    /** 时间类型（1.下单时间拉取、2.更新时间拉取）*/
    optType: number

    /** 订单开始时间，时间戳（毫秒），与endTime间隔不超过10分钟*/
    startTime: number

    /** 订单结束时间，时间戳（毫秒），与startTime间隔不超过10分钟*/
    endTime: number

    /** 页码，默认值为1*/
    pageNo: number

    /** 每页数量，上限100*/
    pageSize: number

    /** 与pageNo、pageSize组合使用。获取当前页最后一条记录的sortValue，下一页请求传入该值*/
    sortValue: string

    /** 奖励活动ID*/
    activityId?: number
  }
}

export type QueryBonusOrderResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    bonusOrderResp: {
      /** 联盟ID*/
      unionId: number

      /** 无效状态码，-1:无效、2:无效-拆单、3:无效-取消、4:无效-京东帮帮主订单、5:无效-账号异常、6:无效-赠品类目不返佣 等*/
      bonusInvalidCode: string

      /** 无效状态码对应的无效状态文案*/
      bonusInvalidText: string

      /** 实际支付金额*/
      payPrice: number

      /** 预估计佣金额*/
      estimateCosPrice: number

      /** 预估佣金*/
      estimateFee: number

      /** 实际计佣金额*/
      actualCosPrice: number

      /** 实际佣金*/
      actualFee: number

      /** 下单时间、时间戳（毫秒）*/
      orderTime: number

      /** 完成时间、时间戳（毫秒）*/
      finishTime: number

      /** 推广位ID*/
      positionId: number

      /** 订单号*/
      orderId: number

      /** 奖励状态，0:无效、1:有效*/
      bonusState: number

      /** 奖励状态文案*/
      bonusText: string

      /** 商品名称*/
      skuName: string

      /** 佣金比例，单位：%*/
      commissionRate: number

      /** 子联盟ID*/
      subUnionId: string

      /** pid*/
      pid: string

      /** 推客生成推广链接时传入的扩展字段*/
      ext1: string

      /** 母站长简称*/
      unionAlias: string

      /** 分成比例（单位：%）*/
      subSideRate: number

      /** 补贴比例（单位：%）*/
      subsidyRate: number

      /** 最终分佣比例（单位：%）=分成比例+补贴比例*/
      finalRate: number

      /** 活动名称*/
      activityName: string

      /** 父单的订单号：如一个订单拆成多个子订单时，原订单号会作为父单号，拆分的订单号为子单号存储在orderid中。若未发生拆单，该字段为0*/
      parentId: number

      /** skuId*/
      skuId: number

      /** 预估奖励金额：查询时间范围内，已付款且奖励有效，满足奖励规则的奖励金额*/
      estimateBonusFee: number

      /** 实际奖励金额：查询时间范围内，已付款或已完成（视具体规则），奖励有效且满足奖励规则的奖励金额*/
      actualBonusFee: number

      /** 奖励订单状态，1:已完成、2:已付款、3:待付款*/
      orderState: number

      /** 奖励订单状态，待付款/已付款/已完成*/
      orderText: string

      /** 排序值，按'下单时间'分页查询时使用*/
      sortValue: string

      /** 奖励活动ID*/
      activityId?: number
    }
  }[]
}
export class QueryBonusOrderAPI extends JdUnionBase {
  async queryBonusOrder(params: QueryBonusOrderParams) {
    return this.execute<QueryBonusOrderResult>(
      'jd.union.open.order.bonus.query',
      params
    )
  }
}
