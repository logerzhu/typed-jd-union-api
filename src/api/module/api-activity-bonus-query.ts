import { JdUnionBase } from '../api-base'
export type QueryBonusActivityParams = {
  /** 请求入參*/
  req: {
    /** 奖励活动Id*/
    activityId?: number

    /** 奖励活动开始时间,开始时间为最近90天，时间戳（ms）*/
    beginTime: number

    /** 奖励活动结束时间，时间戳（ms）*/
    endTime: number

    /** 索引*/
    pageIndex: number

    /** 每页数量*/
    pageSize: number
  }
}

export type QueryBonusActivityResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    bonusActivityResp: {
      /** 活动id*/
      activityId: number

      /** 活动名称*/
      activityName: string

      /** 预热时间，时间戳（ms）*/
      prepareTime: number

      /** 开始时间，时间戳（ms）*/
      beginDate: number

      /** 结束时间，时间戳（ms）*/
      endDate: number

      /** 结算类型：1 一次结算，2 二次结算*/
      payType: number

      /** 一次结算时间，时间戳（ms）*/
      firstPayTime: number

      /** 一次结算比例*/
      firstPayRate: number

      /** 二次结算时间，时间戳（ms）*/
      secondPayTime: number

      /** 二次计算比例*/
      secondPayRate: number

      /** 活动规则*/
      pcDescUrl: string

      /** 活动概述*/
      remark: string
    }
  }[]

  /** 是否有更多*/
  hasMore: boolean
}
export class QueryBonusActivityAPI extends JdUnionBase {
  async queryBonusActivity(params: QueryBonusActivityParams) {
    return this.execute<QueryBonusActivityResult>(
      'jd.union.open.activity.bonus.query',
      params
    )
  }
}
