import { JdUnionBase } from '../api-base'
export type QueryBonusActivityStatisticsParams = {
  /** 请求对象*/
  req: {
    /** 奖励活动Id*/
    activityId: number
  }
}

export type QueryBonusActivityStatisticsResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 结果对象*/
  data: {
    /** 站长ID*/
    unionId: number

    /** 活动ID*/
    activityId: number

    /** 预估有效订单数*/
    estimateValidNum: number

    /** 预估计佣金额(GMV)*/
    estimateCosPrice: number

    /** 预估奖励金额*/
    estimateBonus: number

    /** 实际有效订单数*/
    actualValidNum: number

    /** 实际计佣金额(GMV)*/
    actualCosPrice: number

    /** 实际奖励金额*/
    actualBonus: number

    /** 结算uv*/
    uv?: number
  }
}
export class QueryBonusActivityStatisticsAPI extends JdUnionBase {
  async queryBonusActivityStatistics(
    params: QueryBonusActivityStatisticsParams
  ) {
    return this.execute<QueryBonusActivityStatisticsResult>(
      'jd.union.open.statistics.activity.bonus.query',
      params
    )
  }
}
