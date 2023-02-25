import { JdUnionBase } from '../api-base'
export type GetGiftCouponParams = {
  /** 请求入参*/
  couponReq: {
    /** 商品skuId或落地页地址*/
    skuMaterialId: string

    /** 优惠券面额，最小不可低于1元，最大不可超过pop商品价格的80%，自营商品价格的50%。如：1或者1.00或者1.01*/
    discount: number

    /** 总数量*/
    amount: number

    /** 领取开始时间(yyyy-MM-dd HH)，区间为(创建当天0点直至未来6天内)，系统补充为yyyy-MM-dd HH:00:00*/
    receiveStartTime: string

    /** 领取结束时间(yyyy-MM-dd HH)，区间为(创建当前时间点直至未来6天内)，系统补充为yyyy-MM-dd HH:59:59*/
    receiveEndTime: string

    /** 消费者领取后n天内可用，时间天数1至7，当expireType=1时，必须设置该字段*/
    effectiveDays?: number

    /** 是否绑定同spu商品(1:是;0:否)，例如skuMaterialId输入一款37码的鞋，当isSpu选择1时，此款鞋的全部尺码均可推广这张礼金；当isSpu选择0时，此款鞋仅37码可推广这张礼金，其他鞋码不支持*/
    isSpu: number

    /** 使用时间类型：1.相对时间，需配合effectiveDays一同传入；2.绝对时间，需配合useStartTime和useEndTime一同传入*/
    expireType: number

    /** 消费者领取后的使用开始时间，格式：yyyy-MM-dd，系统补充为yyyy-MM-dd HH:00:00，当expireType=2时，必须设置该字段*/
    useStartTime?: string

    /** 消费者领取后的使用结束时间，格式：yyyy-MM-dd，系统补充为yyyy-MM-dd HH:59:59，当expireType=2时，必须设置该字段*/
    useEndTime?: string

    /** 每个礼金推广链接是否限制仅可领取1张礼金：-1不限，1限制*/
    share: number

    /** 是否允许通过内容平台推广，0：不允许，1：允许；默认为0*/
    contentMatch?: number

    /** 礼金名称*/
    couponTitle?: string

    /** contentMatch = 1 时此字段方生效，允许推广的媒体类型 -1：全部， 其他枚举值：17: 抖音,18: 快手,21: 微博,22: 知乎, 35: 斗鱼 ,38 : 手机QQ/全民K歌,43: 百家号图文,49: 微信小商店/腾讯微视，-1与其他枚举值互斥*/
    contentMatchMedias?: undefined

    /** 是否仅在所选平台访问链接时展示礼金，0:否  1:是*/
    showInMedias?: number

    /** 定向推广类型，默认为1，向运营申请定向功能后才能入参4,5,6并生效； 1.不定向推广  4:本账号推广-定向PID 5：合作账号推广-定向联盟ID 6:合作账号推广-定向PID*/
    targetType?: number

    /** json格式字符串；targetName为定向的合作方名称，targetValue为联盟ID或PID；定向本账号推广时入参PID，定向合作方推广时入参合作方名称和联盟ID或PID；targetType in (4,5,6) 时必填；*/
    childPromoters?: string
  }
}

export type GetGiftCouponResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 礼金批次ID，调用转链接口获取推广链接时，传入此参数可获得礼金推广链接*/
    giftCouponKey: string
  }
}
export class GetGiftCouponAPI extends JdUnionBase {
  async getGiftCoupon(params: GetGiftCouponParams) {
    return this.execute<GetGiftCouponResult>(
      'jd.union.open.coupon.gift.get',
      params
    )
  }
}
