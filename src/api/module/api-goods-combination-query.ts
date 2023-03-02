import { JdUnionBase } from '../api-base'
export type QueryCombinationGoodsParams = {
  /** 请求入参*/
  goodsReq?: {
    /** 优惠券批次ID（只支持一个)*/
    batchId?: number

    /** 是否转链,1:转链;0:不转链*/
    needClickUrl: number

    /** 推广位id*/
    positionId?: number

    /** 联盟子推客身份标识（不能传入接口调用者自己的pid）*/
    pid?: string

    /** 子渠道标识，仅支持传入字母、数字、下划线或中划线，最多80个字符（不可包含空格），该参数会在订单行查询接口中展示（需申请权限，申请方法请见https://union.jd.com/helpcenter/13246-13247-46301）*/
    subUnionId?: string

    /** 渠道关系ID*/
    channelId?: number

    /** 系统扩展参数*/
    ext?: string

    /** 页码，如果没传默认为第一页*/
    pageIndex: number

    /** 每页数量，单页最大20条*/
    pageSize: number
  }
}

export type QueryCombinationGoodsResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    combinationGoodsResp: {
      /** 凑单方案唯一ID*/
      combinationId: string

      /** 商品ID*/
      skuId: number

      /** 商品名称*/
      skuName: string

      /** 凑单商品URL*/
      url: string

      /** 转链链接*/
      clickURL?: string

      /** 商家Id*/
      shopId: number

      /** 店铺名称（或供应商名称）*/
      shopName: string

      /** 品牌code*/
      brandCode: string

      /** 品牌名*/
      brandName: string

      /** 一级类目ID*/
      cid1: number

      /** 一级类目名称*/
      cid1Name: string

      /** 二级类目ID*/
      cid2: number

      /** 二级类目名称*/
      cid2Name: string

      /** 三级类目ID*/
      cid3: number

      /** 三级类目名称*/
      cid3Name: string

      /** 商品原价（京东价） */
      wlPrice: number

      /** 凑单件数*/
      combinationNum: number

      /** 商品凑单价*/
      salePrice: number

      /** 近30日引入订单量(联盟spu粒度)*/
      inOrderCount30Days: number

      /** 佣金比例*/
      commissionRate: number

      /** 佣金金额*/
      commission: number

      /** 商品主图链接*/
      imageUrl: string

      /** 是否主SKU（1是/0否)*/
      mainSku: number

      /** 促销价类型，1：商品价格；2：拼购价格； 3：秒杀价格； 4：预售价格*/
      lowestPriceType: number

      /** 最低价/促销价*/
      lowestPrice: number

      /** 优惠券批次ID*/
      couponBatchId: number

      /** 优惠券面额*/
      discount: number

      /** 优惠券限额*/
      quota: number

      /** 券链接*/
      link: string

      /** 领取开始时间*/
      getStartTime: number

      /** 券领取结束时间(时间戳，毫秒)*/
      getEndTime: number

      /** 券有效使用开始时间*/
      useStartTime: number

      /** 券有效使用结束时间*/
      useEndTime: number

      /** 促销ID*/
      promotionLabelId: number

      /** 商品促销文案*/
      promotionLabel: string

      /** 促销开始时间*/
      promotionStartTime: number

      /** 促销结束时间*/
      promotionEndTime: number

      /** 凑单原总价格*/
      combinationOriginalPrice: number

      /** 凑单后总价格*/
      combinationSalePrice: number

      /** 凑单总佣金金额*/
      combinationCommission: number

      /** 凑单方案热度分*/
      hotScore: number

      /** 推荐理由*/
      recReason: string

      /** 凑单商品数据明细*/
      combinationGoodsInfoList: {
        /** 凑单商品数据明细*/
        combinationGoodsInfo: {
          /** 商品ID*/
          skuId: number

          /** 商品名称*/
          skuName: string

          /** 凑单商品URL*/
          url: string

          /** 转链链接*/
          clickURL?: string

          /** 商家Id*/
          shopId: number

          /** 店铺名称（或供应商名称）*/
          shopName: string

          /** 品牌code*/
          brandCode: string

          /** 品牌名*/
          brandName: string

          /** 一级类目ID*/
          cid1: number

          /** 一级类目名称*/
          cid1Name: string

          /** 二级类目ID*/
          cid2: number

          /** 二级类目名称*/
          cid2Name: string

          /** 三级类目ID*/
          cid3: number

          /** 三级类目名称*/
          cid3Name: string

          /** 商品原价（京东价）*/
          wlPrice: number

          /** 凑单件数*/
          combinationNum: number

          /** 商品凑单价*/
          salePrice: number

          /** 近30日引入订单量(联盟spu粒度)*/
          inOrderCount30Days: number

          /** 佣金比例*/
          commissionRate: number

          /** 佣金金额*/
          commission: number

          /** 商品主图链接*/
          imageUrl: string

          /** 是否主SKU（1是/0否）*/
          mainSku: number

          /** 促销价类型，1：商品价格；2：拼购价格； 3：秒杀价格； 4：预售价格*/
          lowestPriceType: number

          /** 最低价/促销价*/
          lowestPrice: number
        }
      }[]
    }
  }[]

  /** 有效商品总数量*/
  totalCount?: number
}
export class QueryCombinationGoodsAPI extends JdUnionBase {
  async queryCombinationGoods(params: QueryCombinationGoodsParams) {
    return this.execute<QueryCombinationGoodsResult>(
      'jd.union.open.goods.combination.query',
      params
    )
  }
}
