import { JdUnionBase } from '../api-base'
export type QueryMaterialGoodsParams = {
  /** 请求入参*/
  goodsReq: {
    /** 频道ID：1.猜你喜欢、2.实时热销、3.大额券、4.9.9包邮、1001.选品库*/
    eliteId: number

    /** 页码*/
    pageIndex?: number

    /** 每页数量，最大10*/
    pageSize?: number

    /** 该字段无效，请勿传入*/
    sortName?: string

    /** 该字段无效，请勿传入*/
    sort?: string

    /** 联盟id_应用id_推广位id，三段式，联盟子推客身份标识（不能传入接口调用者自己的pid）*/
    pid?: string

    /** 子渠道标识，（需申请，申请方法请见https://union.jd.com/helpcenter/13246-13247-46301），该字段为自定义参数，仅支持传入字母、数字、下划线或中划线，最多80个字符 （不可包含空格）*/
    subUnionId?: string

    /** 站点ID是指在联盟后台的推广管理中的网站Id、APPID（1、通用转链接口禁止使用社交媒体id入参；2、订单来源，即投放链接的网址或应用必须与传入的网站ID/AppID备案一致，否则订单会判“无效-来源与备案网址不符”）*/
    siteId?: string

    /** 推广位id*/
    positionId?: string

    /** 系统扩展参数，无需传入*/
    ext1?: string

    /** 预留字段，请勿传入*/
    skuId?: number

    /** 1：只查询有最优券商品，不传值不做限制*/
    hasCoupon?: number

    /** 用户ID类型，传入此参数可获得个性化推荐结果。当前userIdType支持的枚举值包括：8、16、32、64、128、32768。userIdType和userId需同时传入，且一一对应。userIdType各枚举值对应的userId含义如下：8(安卓移动设备Imei); 16(苹果移动设备Openudid)；32(苹果移动设备idfa); 64(安卓移动设备imei的md5编码，32位，大写，匹配率略低);128(苹果移动设备idfa的md5编码，32位，大写，匹配率略低); 32768(安卓移动设备oaid); 131072(安卓移动设备oaid的md5编码，32位，大写)*/
    userIdType?: number

    /** userIdType对应的用户设备ID，传入此参数可获得个性化推荐结果，userIdType和userId需同时传入*/
    userId?: string

    /** 支持出参数据筛选，逗号','分隔，目前可用：videoInfo(视频信息),hotWords(热词),similar(相似推荐商品),documentInfo(段子信息)，skuLabelInfo（商品标签），promotionLabelInfo（商品促销标签）,companyType（小店标识）*/
    fields?: string

    /** 10微信京东购物小程序禁售，11微信京喜小程序禁售*/
    forbidTypes?: string

    /** 该字段无效，请勿传入*/
    orderId?: string

    /** 选品库id（仅对eliteId=1001有效，且必传）*/
    groupId?: number

    /** groupId创建者的UnionId*/
    ownerUnionId?: number

    /** 类型 0:选品库*/
    benefitType?: number
  }
}

export type QueryMaterialGoodsResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    materialGoodsResp: {
      /** 类目信息*/
      categoryInfo: {
        /** 一级类目ID*/
        cid1: number

        /** 一级类目名称*/
        cid1Name: string

        /**  二级类目ID*/
        cid2: number

        /** 二级类目名称*/
        cid2Name: string

        /** 三级类目ID*/
        cid3: number

        /** 三级类目名称*/
        cid3Name: string
      }

      /** 评论数*/
      comments: number

      /** 佣金信息*/
      commissionInfo: {
        /** 佣金*/
        commission: number

        /** 佣金比例*/
        commissionShare: number

        /** 券后佣金，（促销价-优惠券面额）*佣金比例*/
        couponCommission?: number

        /** plus佣金比例，plus用户购买推广者能获取到的佣金比例*/
        plusCommissionShare?: number
      }

      /** 优惠券信息，返回内容为空说明该SKU无可用优惠券*/
      couponInfo: {
        /** 优惠券合集*/
        couponList: {
          /** 优惠券合集*/
          coupon: {
            /** 券种类 (优惠券种类：0 - 全品类，1 - 限品类（自营商品），2 - 限店铺，3 - 店铺限商品券)*/
            bindType: number

            /** 券面额*/
            discount: number

            /** 券链接*/
            link: string

            /** 券使用平台 (平台类型：0 - 全平台券，1 - 限平台券)*/
            platformType: number

            /** 券消费限额*/
            quota: number

            /** 领取开始时间(时间戳，毫秒)*/
            getStartTime: number

            /** 券领取结束时间(时间戳，毫秒)*/
            getEndTime: number

            /** 券有效使用开始时间(时间戳，毫秒)*/
            useStartTime: number

            /** 券有效使用结束时间(时间戳，毫秒)*/
            useEndTime: number

            /** 最优优惠券，1：是；0：否，购买一件商品可使用的面额最大优惠券*/
            isBest: number
          }
        }
      }

      /** 商品好评率*/
      goodCommentsShare: number

      /** 图片信息*/
      imageInfo: {
        /** 图片合集*/
        imageList: {
          /** 图片合集*/
          urlInfo: {
            /** 图片链接地址，第一个图片链接为主图链接*/
            url: string
          }
        }

        /** 白底图*/
        whiteImage?: string
      }

      /** 30天引单数量*/
      inOrderCount30Days: number

      /** 价格信息*/
      priceInfo: {
        /** 商品价格*/
        price: number

        /** 促销价*/
        lowestPrice?: number

        /** 促销价类型，1：商品价格；2：拼购价格； 3：秒杀价格； 4：预售价格*/
        lowestPriceType?: number

        /** 券后价（有无券都返回此字段）*/
        lowestCouponPrice?: number
      }

      /** 店铺信息*/
      shopInfo: {
        /** 店铺名称（或供应商名称）*/
        shopName: string

        /** 店铺Id*/
        shopId: number

        /** 店铺评分*/
        shopLevel?: number

        /** 1：京东好店  https://img12.360buyimg.com/schoolbt/jfs/t1/80828/19/2993/908/5d14277aEbb134d76/889d5265315e11ed.png*/
        shopLabel?: string

        /** 用户评价评分（仅pop店铺有值）*/
        userEvaluateScore?: string

        /** 用户评价评级（仅pop店铺有值）*/
        commentFactorScoreRankGrade?: string

        /** 物流履约评分（仅pop店铺有值）*/
        logisticsLvyueScore?: string

        /** 物流履约评级（仅pop店铺有值）*/
        logisticsFactorScoreRankGrade?: string

        /** 售后服务评分（仅pop店铺有值）*/
        afterServiceScore?: string

        /** 售后服务评级（仅pop店铺有值）*/
        afsFactorScoreRankGrade?: string

        /** 店铺风向标（仅pop店铺有值）*/
        scoreRankRate?: string
      }

      /** 商品ID*/
      skuId: number

      /** 商品名称*/
      skuName: string

      /** 已废弃，请勿使用*/
      isHot: number

      /** spuid，其值为同款商品的主skuid*/
      spuid: number

      /**  品牌名*/
      brandCode: string

      /** g=自营，p=pop*/
      owner: string

      /** 拼购信息*/
      pinGouInfo: {
        /** 拼购价格*/
        pingouPrice: number

        /** 拼购成团所需人数*/
        pingouTmCount: number

        /** 拼购开始时间(时间戳，毫秒)*/
        pingouStartTime?: number

        /** 拼购结束时间(时间戳，毫秒)*/
        pingouEndTime?: number
      }

      /** 资源信息*/
      resourceInfo: {
        /** 频道id*/
        eliteId: number

        /** 频道名称*/
        eliteName: string
      }

      /** 30天引单数量(sku维度)*/
      inOrderCount30DaysSku: number

      /** 秒杀信息*/
      seckillInfo?: {
        /** 秒杀价原价*/
        seckillOriPrice: number

        /** 秒杀价*/
        seckillPrice: number

        /** 秒杀开始时间(时间戳，毫秒)*/
        seckillStartTime?: number

        /** 秒杀结束时间(时间戳，毫秒)*/
        seckillEndTime?: number
      }

      /** 京喜商品类型，1京喜、2京喜工厂直供、3京喜优选*/
      jxFlags?: undefined

      /** 视频信息*/
      videoInfo?: {
        /** 视频集合*/
        videoList?: {
          /** 视频集合*/
          video?: {
            /** 宽*/
            width: number

            /** 高*/
            high: number

            /** 视频图片地址*/
            imageUrl: string

            /** 1:主图，2：商详*/
            videoType: number

            /** low：标清，high：高清*/
            playType: string

            /** 时长(单位:s)*/
            duration: number

            /** 播放地址*/
            playUrl: string
          }
        }
      }

      /** 推广信息*/
      promotionInfo: {
        /** 长链推广（转链长链接，无需调用转链接口）*/
        clickURL: string
      }

      /** 图书信息*/
      bookInfo?: {
        /** 图书编号*/
        isbn?: string
      }

      /** 0普通商品，10微信京东购物小程序禁售，11微信京喜小程序禁售*/
      forbidTypes?: undefined

      /** 京东配送 1：是，0：不是*/
      deliveryType?: number

      /** 商品标签*/
      skuLabelInfo?: {
        /** 0：不支持；  1或null：支持7天无理由退货；  2：支持90天无理由退货；  4：支持15天无理由退货；  6：支持30天无理由退货；*/
        is7ToReturn?: number

        /** 1：放心购商品*/
        fxg?: number

        /** 放心购商品子标签集合*/
        fxgServiceList?: {
          /** 放心购商品子标签，此字段值可能为空*/
          characteristicServiceInfo?: {
            /** 服务名称*/
            serviceName?: string
          }
        }
      }

      /** 商品促销标签集*/
      promotionLabelInfoList?: {
        /** 商品促销标签*/
        promotionLabelInfo?: {
          /** 商品促销文案*/
          promotionLabel?: string

          /** 促销标签名称*/
          lableName?: string

          /** 促销开始时间*/
          startTime?: number

          /** 促销结束时间*/
          endTime?: number

          /** 促销ID*/
          promotionLableId?: number
        }
      }

      /** 落地页*/
      materialUrl?: string

      /** 预售信息*/
      preSaleInfo?: {
        /** 预售价格*/
        currentPrice?: number

        /** 订金金额（定金不能超过预售总价的20%）*/
        earnest?: number

        /** 预售支付类型：1.仅全款 2.定金、全款均可 5.一阶梯仅定金*/
        preSalePayType?: number

        /** 1: 定金膨胀  2: 定金立减*/
        discountType?: number

        /** 定金膨胀金额（定金可抵XXX）【废弃】*/
        depositWorth?: number

        /** 立减金额*/
        preAmountDeposit?: number

        /** 定金开始时间*/
        preSaleStartTime?: number

        /** 定金结束时间*/
        preSaleEndTime?: number

        /** 尾款开始时间*/
        balanceStartTime?: number

        /** 尾款结束时间*/
        balanceEndTime?: number

        /** 预计发货时间*/
        shipTime?: number

        /** 预售状态（0 未开始；1 预售中；2 预售结束；3 尾款进行中；4 尾款结束）*/
        preSaleStatus?: number

        /** 定金膨胀金额（定金可抵XXX）*/
        amountDeposit?: number
      }

      /** 预约信息*/
      reserveInfo?: {
        /** 预约价格*/
        price?: number

        /** 预约类型：  1：预约购买资格（仅预约的用户才可以进行购买）；  5：预约抽签（仅中签用户可购买）*/
        type?: number

        /** 1：等待预约  2：预约中  3：等待抢购/抽签中  4：抢购中  5：抢购结束*/
        status?: number

        /** 预定开始时间*/
        startTime?: number

        /** 预定结束时间*/
        endTime?: number

        /** 抢购开始时间*/
        panicBuyingStartTime?: number

        /** 抢购结束时间*/
        panicBuyingEndTime?: number
      }

      /** 预留字段*/
      addCartPrice?: number

      /** 双价格*/
      secondPriceInfoList?: {
        /** 双价格信息*/
        secondPriceInfo?: {
          /** 双价格类型：18新人价，2plus会员价格*/
          secondPriceType?: number

          /** 价格*/
          secondPrice?: number
        }
      }

      /** 是否全球购商品 1：是*/
      isOversea?: number

      /** 2：POP自然人小店*/
      companyType?: number
    }
  }

  /** 有效商品总数量*/
  totalCount: number
}
export class QueryMaterialGoodsAPI extends JdUnionBase {
  async queryMaterialGoods(params: QueryMaterialGoodsParams) {
    return this.execute<QueryMaterialGoodsResult>(
      'jd.union.open.goods.material.query',
      params
    )
  }
}
