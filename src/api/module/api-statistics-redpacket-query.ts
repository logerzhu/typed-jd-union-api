import { JdUnionBase } from '../api-base'
export type QueryRedpacketStatisticsParams = {
  /** 请求入参*/
  effectDataReq: {
    /** 京享红包活动Id，如不传则查询全部京享红包活动*/
    actId?: number

    /** 推广位ID，支持联盟后台推广位和API创建的私域推广位*/
    positionId?: number

    /** 开始日期yyyy-MM-dd，不可超出最近90天*/
    startDate: string

    /** 结束时间yyyy-MM-dd，不可超出最近90天*/
    endDate: string

    /** 页码，起始1*/
    pageIndex: number

    /** 每页数，大于等于10且小于等于100的正整数*/
    pageSize: number

    /** 工具商传入推客的授权key，可帮助该推客京享红包的效果数据。（需联系运营开通工具商权限才能拿到数据）*/
    key?: string

    /** 类型（1推广位，2channelId，默认：1推广位）*/
    type?: number

    /** 子渠道ID集合(最多一次查询50个)*/
    channelIds?: number[]
  }
}

export type QueryRedpacketStatisticsResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    redPacketEffectDataResp?: {
      /** 数据日期*/
      tjDate?: string

      /** 京享红包活动ID*/
      actId?: number

      /** 推广位*/
      positionId?: number

      /** 推广位名称，推广位名称，私域推广位为0*/
      promotionName?: string

      /** 京享红包活动页浏览次数*/
      showNum?: number

      /** 京享红包发放数量*/
      giveNum?: number

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
  }[]

  /** 总数量*/
  totalCount?: number
}
export class QueryRedpacketStatisticsAPI extends JdUnionBase {
  async queryRedpacketStatistics(params: QueryRedpacketStatisticsParams) {
    return this.execute<QueryRedpacketStatisticsResult>(
      'jd.union.open.statistics.redpacket.query',
      params
    )
  }
}
