import { JdUnionBase } from '../api-base'
export type QueryIntelligenceToolsPromotionParams = {
  /** 请求入参*/
  req: {
    /** 关键词*/
    title?: string

    /** 线报类型：1 单品；2 店铺活动；3 品类活动；4 其它*/
    type?: number

    /** 类目一ID，支持传多个类目筛选*/
    cid1List?: undefined

    /** 默认吐出未开始和进行中线报，1 未开始、2 进行中*/
    status?: number

    /** 1 精华，0 非精华*/
    essence?: string

    /** 默认为 1，最大 1000（必填字段）*/
    pageIndex?: number

    /** 默认为 10，最大 20（必填字段）*/
    pageSize?: number

    /** 目标推客的联盟ID*/
    unionId?: number

    /** 联盟id_应用id_推广位id，三段式*/
    pid?: string

    /** 子联盟ID（需申请，申请方法请见https://union.jd.com/helpcenter/13246-13247-46301），该字段为自定义参数，建议传入字母数字和下划线的格式*/
    subUnionId?: string

    /** 站点ID是指在联盟后台的推广管理中的网站Id、APPID（1、通用转链接口禁止使用社交媒体id入参；2、订单来源，即投放链接的网址或应用必须与传入的网站ID/AppID备案一致，否则订单会判“无效-来源与备案网址不符”）*/
    siteId?: number

    /** 推广位id*/
    positionId?: number
  }
}

export type QueryIntelligenceToolsPromotionResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据对象*/
    intelligenceResp?: {
      /** 线报内容*/
      reportContent?: string

      /** 线报类型：1 单品；2 店铺活动；3 品类活动；4 其它*/
      type?: number

      /** 类目信息*/
      cid1List?: undefined

      /** 1 未开始、2 进行中*/
      status?: number

      /** 1 精华，0 非精华*/
      essence?: number

      /** 线报开始时间,天维度，精确到时分秒，格式：yyyy-MM-dd HH:mm:ss*/
      startTime?: string

      /** 线报结束时间,天维度，精确到时分秒，格式：yyyy-MM-dd HH:mm:ss*/
      endTime?: string
    }
  }
}
export class QueryIntelligenceToolsPromotionAPI extends JdUnionBase {
  async queryIntelligenceToolsPromotion(
    params: QueryIntelligenceToolsPromotionParams
  ) {
    return this.execute<QueryIntelligenceToolsPromotionResult>(
      'jd.union.open.promotion.tools.intelligence.query',
      params
    )
  }
}
