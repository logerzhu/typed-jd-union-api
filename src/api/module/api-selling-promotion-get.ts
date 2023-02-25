import { JdUnionBase } from '../api-base'
export type GetPromotionSellingParams = {
  /** 请求入参*/
  req: {
    /** 推广物料url，例如活动链接、商品链接等；不支持仅传入skuid*/
    materialId: string

    /** 网站ID/APP ID，入口：京东联盟-推广管理-网站管理/APP管理-查看网站ID/APP ID（1、接口禁止使用导购媒体id入参；2、投放链接的网址或应用必须与传入的网站ID/AppID备案一致，否则订单会判“无效-来源与备案网址不符”）*/
    siteId: string

    /** 转链类型，1：长链， 2 ：短链 ，3： 长链+短链，默认短链，短链有效期60天*/
    chainType?: number

    /** 优惠券领取链接，在使用优惠券、商品二合一功能时入参，且materialId须为商品详情页链接*/
    couponUrl?: string

    /** 推广位id*/
    positionId?: number

    /** 子渠道标识，您可自定义传入字母、数字或下划线，最多支持80个字符，该参数会在订单行查询接口中展示（需申请权限，申请方法请见https://union.jd.com/helpcenter/13246-13247-46301）*/
    subUnionId?: string

    /**  系统扩展参数（需申请权限，申请方法请见https://union.jd.com/helpcenter/13246-13247-46301），最多支持40字符，参数会在订单行查询接口中展示*/
    ext1?: string

    /** 联盟子推客身份标识（不能传入接口调用者自己的pid）*/
    pid?: string

    /** 目标推客的联盟ID，工具商给推客转链使用。*/
    unionId?: number
  }
}

export type GetPromotionSellingResult = {
  /** 返回码*/
  code?: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 生成的推广目标链接，以短链接形式，有效期60天*/
    shortURL?: string

    /** 生成推广目标的长链，长期有效*/
    clickURL: string
  }
}
export class GetPromotionSellingAPI extends JdUnionBase {
  async getPromotionSelling(params: GetPromotionSellingParams) {
    return this.execute<GetPromotionSellingResult>(
      'jd.union.open.selling.promotion.get',
      params
    )
  }
}
