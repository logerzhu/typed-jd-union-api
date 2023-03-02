import { JdUnionBase } from '../api-base'
export type QueryGoodsParams = {
  /** 请求入参*/
  goodsReqDTO: {
    /** 一级类目id*/
    cid1?: number

    /** 二级类目id*/
    cid2?: number

    /** 三级类目id*/
    cid3?: number

    /** 页码*/
    pageIndex?: number

    /** 每页数量，单页数最大30，默认20 */
    pageSize?: number

    /** skuid集合(一次最多支持查询20个sku)，数组类型开发时记得加[]*/
    skuIds?: number[]

    /** 关键词，字数同京东商品名称一致，目前未限制*/
    keyword?: string

    /** 商品券后价格下限*/
    pricefrom?: number

    /** 商品券后价格上限*/
    priceto?: number

    /** 佣金比例区间开始*/
    commissionShareStart?: number

    /** 佣金比例区间结束*/
    commissionShareEnd?: number

    /** 商品类型：自营[g]，POP[p]*/
    owner?: string

    /** 排序字段(price：单价, commissionShare：佣金比例, commission：佣金， inOrderCount30Days：30天引单量， inOrderComm30Days：30天支出佣金)*/
    sortName?: string

    /** asc,desc升降序,默认降序*/
    sort?: string

    /** 是否是优惠券商品，1：有优惠券*/
    isCoupon?: number

    /** 是否是拼购商品，1：拼购商品*/
    isPG?: number

    /** 拼购价格区间开始*/
    pingouPriceStart?: number

    /** 拼购价格区间结束*/
    pingouPriceEnd?: number

    /** 已废弃，请勿使用*/
    isHot?: number

    /** 品牌code*/
    brandCode?: string

    /** 店铺Id*/
    shopId?: number

    /** 1：查询内容商品；其他值过滤掉此入参条件。*/
    hasContent?: number

    /** 1：查询有最优惠券商品；其他值过滤掉此入参条件。（查询最优券需与isCoupon同时使用）*/
    hasBestCoupon?: number

    /** 联盟id_应用iD_推广位id*/
    pid?: string

    /** 支持出参数据筛选，逗号','分隔，目前可用：videoInfo(视频信息),hotWords(热词),similar(相似推荐商品),documentInfo(段子信息),skuLabelInfo（商品标签）,promotionLabelInfo（商品促销标签）,stockState（商品库存）,companyType（小店标识）*/
    fields?: string

    /** 10微信京东购物小程序禁售，11微信京喜小程序禁售*/
    forbidTypes?: string

    /** 京喜商品类型，1京喜、2京喜工厂直供、3京喜优选，入参多个值表示或条件查询*/
    jxFlags?: number[]

    /** 支持传入0.0、2.5、3.0、3.5、4.0、4.5、4.9，默认为空表示不筛选评分*/
    shopLevelFrom?: number

    /** 图书编号*/
    isbn?: string

    /** 主商品spuId*/
    spuId?: number

    /** 优惠券链接*/
    couponUrl?: string

    /** 京东配送 1：是，0：不是*/
    deliveryType?: number

    /** 资源位17：极速版商品*/
    eliteType?: number[]

    /** 是否秒杀商品。1：是*/
    isSeckill?: number

    /** 是否预售商品。1：是*/
    isPresale?: number

    /** 是否预约商品。1:是*/
    isReserve?: number

    /** 奖励活动ID*/
    bonusId?: number

    /** 区域地址（查区域价格）*/
    area?: string

    /** 是否全球购商品 1：是*/
    isOversea?: number
  }
}

export type QueryGoodsResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    goodsResp: {
      /** 类目信息*/
      categoryInfo: {
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

        /** 是否锁定佣金比例：1是，0否*/
        isLock?: number

        /** 计划开始时间（时间戳，毫秒）*/
        startTime?: number

        /** 计划结束时间（时间戳，毫秒）*/
        endTime?: number
      }

      /** 优惠券信息，返回内容为空说明该SKU无可用优惠券*/
      couponInfo: {
        /** 优惠券集合*/
        couponList: {
          /** 优惠券明细*/
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

            /** 券热度，值越大热度越高，区间:[0,10]*/
            hotValue: number

            /** 入参couponUrl优惠券链接搜索对应的券，1 是 ，0 否*/
            isInputCoupon?: number
          }
        }[]
      }

      /** 商品好评率*/
      goodCommentsShare: number

      /** 图片信息*/
      imageInfo: {
        /** 图片合集*/
        imageList: {
          /** 图片合集*/
          urlInfo: {
            /** 图片链接地址，第一个图片链接为主图链接,修改图片尺寸拼接方法：/s***x***_jfs/，例如：http://img14.360buyimg.com/ads/s300x300_jfs/t22495/56/628456568/380476/9befc935/5b39fb01N7d1af390.jpg*/
            url: string
          }
        }[]

        /** 白底图*/
        whiteImage?: string
      }

      /** 30天引单数量*/
      inOrderCount30Days: number

      /** 已废弃，请用owner*/
      isJdSale: number

      /** 商品落地页*/
      materialUrl: string

      /** 价格信息*/
      priceInfo: {
        /** 商品价格*/
        price: number

        /** 促销价*/
        lowestPrice?: number

        /** 促销价类型，1：商品价格；2：拼购价格； 3：秒杀价格； 4：预售价格*/
        lowestPriceType?: number

        /** 券后价（有无券都返回此字段，价格排序以此字段排序）*/
        lowestCouponPrice?: number

        /** 历史最低价天数（例：当前券后价最近180天最低）*/
        historyPriceDay?: number
      }

      /** 店铺信息*/
      shopInfo: {
        /** 店铺名称（或供应商名称）*/
        shopName: string

        /** 商家Id*/
        shopId: number

        /** 店铺等级*/
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

      /** 品牌code*/
      brandCode: string

      /** 品牌名*/
      brandName: string

      /** g=自营，p=pop*/
      owner: string

      /** 拼购信息*/
      pinGouInfo: {
        /** 拼购价格*/
        pingouPrice: number

        /** 拼购成团所需人数*/
        pingouTmCount: number

        /** 拼购落地页url*/
        pingouUrl: string

        /** 拼购开始时间(时间戳，毫秒)*/
        pingouStartTime: number

        /** 拼购结束时间(时间戳，毫秒)*/
        pingouEndTime: number
      }

      /** 视频信息*/
      videoInfo: {
        /** 视频集合*/
        videoList?: {
          /** 视频明细*/
          video?: {
            /** 宽*/
            width: number

            /** 高*/
            high: number

            /** 视频图片地址*/
            imageUrl: string

            /** 1:主图，2：商详*/
            videoType: number

            /** 播放地址*/
            playUrl: string

            /** low：标清，high：高清*/
            playType: string

            /** 时长(单位:s)*/
            duration?: number
          }
        }[]
      }

      /** 评价信息*/
      commentInfo?: {
        /** 评价集合*/
        commentList: {
          /** 评价列表*/
          comment: {
            /** 评价内容*/
            content: string

            /** 图片集合【废弃】*/
            imageList: {
              /** 图片集合【废弃】*/
              urlInfo: {
                /** 图片链接地址【废弃】*/
                url: string
              }
            }[]
          }
        }[]
      }

      /** 京喜商品类型，1京喜、2京喜工厂直供、3京喜优选（包含3时可在京东APP购买）*/
      jxFlags?: number[]

      /** 商品段子信息，emoji表情等*/
      documentInfo?: {
        /** 描述文案*/
        document: string

        /** 优惠力度文案*/
        discount?: string
      }

      /** 图书信息*/
      bookInfo?: {
        /** 图书编号*/
        isbn?: string
      }

      /** 扩展信息*/
      specInfo?: {
        /** 尺寸*/
        size?: string

        /** 颜色*/
        color?: string

        /** 自定义属性*/
        spec?: string

        /** 自定义属性名称*/
        specName?: string
      }

      /** 库存状态：1有货、0无货（供tob选品场景参考，toc场景不适用）*/
      stockState?: number

      /** 资源位17：极速版商品*/
      eliteType?: number[]

      /** 0普通商品，10微信京东购物小程序禁售，11微信京喜小程序禁售*/
      forbidTypes?: number[]

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
        }[]
      }

      /** 商品促销标签集*/
      promotionLabelInfoList?: {
        /** 商品促销标签*/
        promotionLabelInfo?: {
          /** 商品促销文案*/
          promotionLabel?: string

          /** 促销标签名称【废弃】*/
          lableName?: string

          /** 促销开始时间*/
          startTime?: number

          /** 促销结束时间*/
          endTime?: number

          /** 促销ID*/
          promotionLableId?: number

          /** 促销标签名称*/
          labelName?: string
        }
      }[]

      /** 双价格*/
      secondPriceInfoList?: {
        /** 双价格信息*/
        secondPriceInfo?: {
          /** 双价格类型：18新人价，2plus会员价格*/
          secondPriceType?: number

          /** 价格*/
          secondPrice?: number
        }
      }[]

      /** 秒杀信息*/
      seckillInfo?: {
        /** 秒杀价原价*/
        seckillOriPrice?: number

        /** 秒杀价*/
        seckillPrice?: number

        /** 秒杀开始时间(时间戳，毫秒)*/
        seckillStartTime?: number

        /** 秒杀结束时间(时间戳，毫秒)*/
        seckillEndTime?: number
      }

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

      /** 是否全球购商品 1：是*/
      isOversea?: number

      /** 2：POP自然人小店*/
      companyType?: number
    }
  }[]

  /** 有效商品总数量，上限10w*/
  totalCount: number

  /** 日常top10的热搜词，按小时更新*/
  hotWords?: string

  /** 相似推荐商品skuId集合*/
  similarSkuList?: number[]
}
export class QueryGoodsAPI extends JdUnionBase {
  async queryGoods(params: QueryGoodsParams) {
    return this.execute<QueryGoodsResult>('jd.union.open.goods.query', params)
  }
}
