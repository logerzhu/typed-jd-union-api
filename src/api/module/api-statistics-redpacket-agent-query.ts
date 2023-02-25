import { JdUnionBase } from '../api-base'
export type QueryAgentRedpacketStatisticsParams = {
  /** 请求入参*/
  effectDataAgentReq: {
    /** 京享红包活动Id，如不传则查询全部京享红包活动*/
    actId?: number

    /** 开始日期yyyy-MM-dd，不可超出最近90天*/
    startDate: string

    /** 结束时间yyyy-MM-dd，不可超出最近90天*/
    endDate: string

    /** 页码，起始1*/
    pageIndex: number

    /** 每页数，大于等于10且小于等于100的正整数*/
    pageSize: number

    /** 类型，出參数据按照指定纬度聚合（1推广位，2channelId，默认：1推广位）*/
    type?: number
  }
}

export type QueryAgentRedpacketStatisticsResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    redPacketEffectDataResp: {
      /** 数据日期*/
      tjDate?: string

      /** 京享红包活动ID*/
      actId?: number

      /** 京东联盟id*/
      unionId?: number

      /** 推广位*/
      positionId?: number

      /** 推广位名称*/
      promotionName?: string

      /** 京享红包活动页浏览次数*/
      showNum?: number

      /** 京享红包发放数量*/
      giveNum: number

      /** 京享红包使用数量*/
      useNum?: number

      /** 京享红包有效订单数量*/
      orderNum?: number

      /** 京享红包订单有效GMV*/
      orderPrice?: number

      /** 京享红包订单有效预估佣金*/
      orderFee?: number

      /** 渠道关系ID*/
      channelId?: number
    }
  }

  /** 总数量*/
  totalCount: number
}
export class QueryAgentRedpacketStatisticsAPI extends JdUnionBase {
  async queryAgentRedpacketStatistics(
    params: QueryAgentRedpacketStatisticsParams
  ) {
    return this.execute<QueryAgentRedpacketStatisticsResult>(
      'jd.union.open.statistics.redpacket.agent.query',
      params
    )
  }
}
