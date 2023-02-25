import { JdUnionBase } from '../api-base'
export type GetBysubunionidPromotionParams = {
  /** 请求入参*/
  promotionCodeReq: {
    /** 推广物料url，例如活动链接、商品链接、联盟链接（包含微信shortlink形式）等；不支持仅传入skuid*/
    materialId: string

    /** 子渠道标识，仅支持传入字母、数字、下划线或中划线，最多80个字符（不可包含空格），该参数会在订单行查询接口中展示（需申请权限，申请方法请见https://union.jd.com/helpcenter/13246-13247-46301）*/
    subUnionId?: string

    /** 推广位ID*/
    positionId?: number

    /** 联盟子推客身份标识（不能传入接口调用者自己的pid）*/
    pid?: string

    /** 优惠券领取链接，在使用优惠券、商品二合一功能时入参，且materialId须为商品详情页链接*/
    couponUrl?: string

    /** 转链类型，1：长链， 2 ：短链 ，3： 长链+短链，默认短链，短链有效期60天*/
    chainType?: number

    /** 礼金批次号*/
    giftCouponKey?: string

    /** 渠道关系ID*/
    channelId?: number

    /** 是否生成短口令，1：生成，默认不生成（需申请权限，申请方法请见https://union.jd.com/helpcenter/13246-13247-46301）*/
    command?: number

    /** 微信小程序ShortLink类型（需向cps-qxsq@jd.com申请权限）*/
    weChatType?: number
  }
}

export type GetBysubunionidPromotionResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 生成的推广目标链接，以短链接形式，有效期60天*/
    shortURL: string

    /** 生成推广目标的长链，长期有效*/
    clickURL: string

    /** 需要权限申请，京口令（匹配到红包活动有效配置才会返回京口令）*/
    jCommand?: string

    /** 需要权限申请，短口令*/
    jShortCommand?: string

    /** 微信小程序ShortLink（需向cps-qxsq@jd.com申请权限）*/
    weChatShortLink?: string
  }
}
export class GetBysubunionidPromotionAPI extends JdUnionBase {
  async getBysubunionidPromotion(params: GetBysubunionidPromotionParams) {
    return this.execute<GetBysubunionidPromotionResult>(
      'jd.union.open.promotion.bysubunionid.get',
      params
    )
  }
}
