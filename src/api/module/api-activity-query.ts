import { JdUnionBase } from '../api-base'
export type QueryActivityParams = {
  /** 请求入参*/
  activityReq: {
    /** 页码，默认1*/
    pageIndex?: number

    /** 每页数量，默认20，上限50*/
    pageSize?: number

    /** 活动物料ID，1：营销日历热门会场；2：营销日历热门榜单；6：PC站长端官方活动*/
    poolId?: number

    /** 按单个日期查询活动，查询日期范围为过去或未来15天。建议按日期依次查询当天及未来的活动*/
    activeDate?: string
  }
}

export type QueryActivityResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    activityResp: {
      /** 活动落地页-PC*/
      urlPC?: string

      /** 活动落地页-移动端*/
      urlM?: string

      /** 活动主题*/
      title?: string

      /** 活动利益点*/
      advantage?: string

      /** 活动开始时间*/
      startTime?: number

      /** 活动结束时间*/
      endTime?: number

      /** 商品资源位id，调用京粉精选商品查询接口传入此参数可获取活动SKU*/
      eliteId?: number

      /** 推荐指数，从1到5，越高越好*/
      recommend?: number

      /** 活动素材下载链接*/
      downloadUrl?: string

      /** 活动素材提取码*/
      downloadCode?: string

      /** 活动更新时间*/
      updateTime?: number

      /** 活动规则、描述、说明*/
      content?: string

      /** 活动标签，1：大促活动；2：佣金提升活动；3：常规活动*/
      tag?: string

      /** 活动状态，1：未开始；2：进行中；3：已结束*/
      actStatus?: number

      /** 主推开始时间*/
      promotionStartTime?: number

      /** 主推结束时间*/
      promotionEndTime?: number

      /** 活动推广平台，1：仅支持PC推广；2：仅支持移动端推广；3：PC和移动端均支持推广*/
      platformType?: number

      /** 图片集*/
      imgList?: {
        /** 图片对象*/
        image?: {
          /** 图片尺寸*/
          widthHeight?: string

          /** 图片名称*/
          imgName?: string

          /** 图片链接*/
          imgUrl?: string
        }
      }

      /** 活动ID*/
      id?: number

      /** 类目集*/
      categoryList?: {
        /** 类目*/
        activityCategory?: {
          /** 类目Id*/
          categoryId?: number

          /** 类目级别(需枚举，当前京挑客活动全部为一级类目)*/
          type?: number
        }
      }
    }
  }

  /** 总数量*/
  totalCount?: number
}
export class QueryActivityAPI extends JdUnionBase {
  async queryActivity(params: QueryActivityParams) {
    return this.execute<QueryActivityResult>(
      'jd.union.open.activity.query',
      params
    )
  }
}
