import { JdUnionBase } from '../api-base'
export type QueryGiftcouponStatisticsParams = {
  /** 请求入参*/
  effectDataReq: {
    /** 查询该SKU您创建的推客礼金，以及该SKU您可推广的联盟礼金。 skuId和giftCouponKey二选一，不可同时入参。*/
    skuId: number

    /** 根据礼金批次ID精确查询礼金信息，请勿和createTime同时传入。 skuId和giftCouponKey二选一，不可同时入参。*/
    giftCouponKey: string

    /** 可查询此日期及以后创建的礼金，如不传则不限日期。 格式：yyyy-MM-dd*/
    createTime?: string

    /** 可查询此日期及以后下单的礼金效果数据，如不传则不限日期。 格式：yyyy-MM-dd*/
    startTime?: string

    /** 工具商传入推客的授权key，可帮助该推客查询礼金效果数据。（需联系运营开通工具商权限才能拿到数据）*/
    key?: string

    /** 推广类型：默认为1；1：本账号创建礼金 2：合作推广礼金（本账号可推广的联盟礼金和其他账号定向给本账号或本账号下PID推广的礼金）*/
    targetType?: number
  }
}

export type QueryGiftcouponStatisticsResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    giftCouponEffectDataResp?: {
      /** 礼金批次ID*/
      giftCouponKey?: string

      /** 礼金总张数*/
      amount?: number

      /** 已发放数量*/
      receiveNum?: number

      /** 已使用数量*/
      costNum?: number

      /** 预估佣金*/
      ygCommission?: number

      /** 礼金状态（1：正常，2：停止）*/
      status?: number

      /** 领取开始日期（yyyy-MM-dd HH:mm:ss）*/
      receiveStartTime?: string

      /** 领取结束日期（yyyy-MM-dd HH:mm:ss）*/
      receiveEndTime?: string

      /** 消费者领取后的有效期天数*/
      effectiveDays?: number

      /** 礼金实际消耗金额,订单中使用的礼金券面额总和*/
      costAmount?: number

      /** 礼金类型 1.联盟礼金；2.推客礼金*/
      type?: number

      /** skuIdList*/
      skuIdList?: number[]

      /** 是否限制每个推广链接仅可领取1张礼金：-1不限，1限制*/
      share?: number

      /** 是否允许通过内容平台推广，0：不允许，1：允许；默认为0*/
      contentMatch?: number

      /** 时间类型：1.相对时间，2.绝对时间*/
      expireType?: number

      /** 使用开始时间(yyyy-MM-dd HH:mi:ss)*/
      useStartTime?: string

      /** 使用结束时间(yyyy-MM-dd HH:mi:ss)*/
      useEndTime?: string

      /** 礼金面额*/
      denomination?: number

      /** 礼金名称*/
      couponTitle?: string

      /** 礼金状态（1：已停止，2：未开始，3：发放中，4：已结束，5：当天已结束，6：已抢光，7：当前时段已抢光，8：到达发放限额）*/
      showStatus?: number

      /** 限制使用平台：1-京东APP，1033-京东极速版*/
      limitPlatforms?: number[]

      /** contentMatch = 1 时此字段方生效，允许推广的媒体类型 -1：全部， 其他枚举值：17: 抖音,18: 快手,21: 微博,22: 知乎, 35: 斗鱼 ,38 : 手机QQ/全民K歌,43: 百家号图文,49: 微信小商店/腾讯微视，-1与其他枚举值互斥*/
      contentMatchMedias?: number[]

      /** 数据明细*/
      promoterList?: {
        /** 推广者信息*/
        giftCouponPromoterResp?: {
          /** 定向的名称*/
          targetName?: string

          /** 定向的联盟ID*/
          unionId?: number

          /** 定向的联盟pid*/
          pid?: string
        }
      }[]

      /** 是否仅在所选平台访问链接时展示礼金，0:否  1:是*/
      showInMedias?: number
    }
  }[]
}
export class QueryGiftcouponStatisticsAPI extends JdUnionBase {
  async queryGiftcouponStatistics(params: QueryGiftcouponStatisticsParams) {
    return this.execute<QueryGiftcouponStatisticsResult>(
      'jd.union.open.statistics.giftcoupon.query',
      params
    )
  }
}
