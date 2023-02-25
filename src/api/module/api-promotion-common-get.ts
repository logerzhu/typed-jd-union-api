import { JdUnionBase } from '../api-base'
export type GetCommonPromotionParams = {
  /** 请求入参*/
  promotionCodeReq: {
    /** 推广物料url，例如活动链接、商品链接等；不支持仅传入skuid*/
    materialId: string

    /** 网站ID/APP ID，入口：京东联盟-推广管理-网站管理/APP管理-查看网站ID/APP ID（1、接口禁止使用导购媒体id入参；2、投放链接的网址或应用必须与传入的网站ID/AppID备案一致，否则订单会判“无效-来源与备案网址不符”）*/
    siteId: string

    /** 推广位id*/
    positionId?: number

    /** 子渠道标识，仅支持传入字母、数字、下划线或中划线，最多80个字符（不可包含空格），该参数会在订单行查询接口中展示（需申请权限，申请方法请见https://union.jd.com/helpcenter/13246-13247-46301）*/
    subUnionId?: string

    /** 系统扩展参数（需申请权限，申请方法请见https://union.jd.com/helpcenter/13246-13247-46301），最多支持40字符，参数会在订单行查询接口中展示*/
    ext1?: string

    /** 【已废弃】请勿再使用*/
    protocol?: number

    /** 联盟子推客身份标识（不能传入接口调用者自己的pid）*/
    pid?: string

    /** 优惠券领取链接，在使用优惠券、商品二合一功能时入参，且materialId须为商品详情页链接*/
    couponUrl?: string

    /** 礼金批次号*/
    giftCouponKey?: string

    /** 渠道关系ID*/
    channelId?: number
  }
}

export type GetCommonPromotionResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 生成的目标推广链接，长期有效*/
    clickURL: string

    /** 京口令（匹配到红包活动有效配置才会返回京口令）*/
    jCommand?: string
  }
}
export class GetCommonPromotionAPI extends JdUnionBase {
  async getCommonPromotion(params: GetCommonPromotionParams) {
    return this.execute<GetCommonPromotionResult>(
      'jd.union.open.promotion.common.get',
      params
    )
  }
}
