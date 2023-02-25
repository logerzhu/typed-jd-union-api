import { JdUnionBase } from '../api-base'
export type QueryRowOrderSellingParams = {
  /** 请求入参*/
  req: {
    /** 页码*/
    pageIndex: number

    /**   每页包含条数，上限为500*/
    pageSize: number

    /** 子推客unionID，传入该值可查询子推客的订单，注意不可和key同时传入。（需联系运营开通PID权限才能拿到数据）*/
    childUnionId?: number

    /** 工具商传入推客的授权key，可帮助该推客查询订单，注意不可和childUnionid同时传入。（需联系运营开通工具商权限才能拿到数据）*/
    key?: string

    /** 订单时间查询类型(1：下单时间，2：完成时间（购买用户确认收货时间），3：更新时间*/
    type: number

    /** 开始时间 格式yyyy-MM-dd HH:mm:ss，与endTime间隔不超过1小时*/
    startTime: string

    /** 结束时间 格式yyyy-MM-dd HH:mm:ss，与startTime间隔不超过1小时*/
    endTime: string

    /** 支持出参数据筛选，逗号','分隔，目前可用：goodsInfo（商品信息）,categoryInfo(类目信息）*/
    fields?: string

    /** 订单号*/
    orderId?: number
  }
}

export type QueryRowOrderSellingResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    sellingOrderRowResp: {
      /** 标记唯一订单行*/
      id: string

      /** 订单号*/
      orderId: number

      /** 父单的订单ID，仅当发生订单拆分时返回， 0：未拆分，有值则表示此订单为子订单*/
      parentId: number

      /** 下单时间,格式yyyy-MM-dd HH:mm:ss*/
      orderTime: string

      /** 完成时间（购买用户确认收货时间）,格式yyyy-MM-dd HH:mm:ss*/
      finishTime: string

      /** 更新时间,格式yyyy-MM-dd HH:mm:ss*/
      modifyTime: string

      /** 下单设备 1.pc 2.无线*/
      orderEmt: number

      /** plus会员 1:是，0:否*/
      plus: number

      /** 推客ID*/
      unionId: number

      /** 商品ID*/
      skuId: number

      /** 商品名称*/
      skuName: string

      /** 商品数量*/
      skuNum: number

      /** 商品已退货数量*/
      skuReturnNum: number

      /** 商品售后中数量*/
      skuFrozenNum: number

      /** 商品单价*/
      price: number

      /** 佣金比例(投放的广告主计划比例)*/
      commissionRate: number

      /** 一级分成比例*/
      subSideRate: number

      /** 一级补贴比例*/
      subsidyRate: number

      /** 最终比例( (一级分佣比例+一级分成比例)*二级分佣比例)*/
      finalRate: number

      /** 预估计佣金额，即用户下单的金额(已扣除优惠券、白条、支付优惠、进口税，未扣除红包和京豆)，有时会误扣除运费券金额，完成结算时会在实际计佣金额中更正。如订单完成前发生退款，此金额也会更新。*/
      estimateCosPrice: number

      /** 推客的预估佣金（预估计佣金额*佣金比例*最终比例），如订单完成前发生退款，此金额也会更新。*/
      estimateFee: number

      /** 实际计算佣金的金额。订单完成后，会将误扣除的运费券金额更正。如订单完成后发生退款，此金额会更新。*/
      actualCosPrice: number

      /** 推客分得的实际佣金（实际计佣金额*佣金比例*最终比例）。如订单完成后发生退款，此金额会更新。*/
      actualFee: number

      /** sku维度的有效码（-1：未知,2.无效-拆单,3.无效-取消,4.无效-京东帮帮主订单,5.无效-账号异常,6.无效-赠品类目不返佣,7.无效-校园订单,8.无效-企业订单,9.无效-团购订单,10.无效-开增值税专用发票订单,11.无效-乡村推广员下单,13.无效-违规订单,14.无效-来源与备案网址不符,15.待付款,16.已付款,17.已完成)*/
      validCode: number

      /** 同跨店：2同店 3跨店*/
      traceType: number

      /** 推广位ID*/
      positionId: number

      /** 应用id（网站id、appid、社交媒体id）*/
      siteId: number

      /** 母账号简称*/
      unionAlias: string

      /** 格式:子推客ID_子站长应用ID_子推客推广位ID*/
      pid: string

      /** 一级类目id*/
      cid1: number

      /** 二级类目id*/
      cid2: number

      /** 三级类目id*/
      cid3: number

      /** 子联盟ID(需要联系运营开放白名单才能拿到数据)*/
      subUnionId: string

      /** 联盟标签数据（整型的二进制字符串，目前返回16位：0000000000000001。数据从右向左进行，每一位为1表示符合联盟的标签特征，第1位：红包，第2位：组合推广，第3位：拼购，第5位：有效首次购（0000000000011XXX表示有效首购，最终奖励活动结算金额会结合订单状态判断，以联盟后台对应活动效果数据报表https://union.jd.com/active为准）,第8位：复购订单，第9位：礼金，第10位：联盟礼金，第11位：推客礼金。例如：0000000000000001:红包订单，0000000000000010:组合推广订单，0000000000000100:拼购订单，0000000000011000:有效首购，0000000000000111：红包+组合推广+拼购等）*/
      unionTag: string

      /** 商家ID*/
      popId: number

      /** 推客生成推广链接时传入的扩展字段（需要联系运营开放白名单才能拿到数据）。*/
      ext1: string

      /** 预估结算时间 格式：yyyyMMdd，默认：0，表示最新的预估结算日期*/
      payMonth: string

      /** 招商团活动id*/
      cpActId: number

      /** 站长角色：1 推客  2 团长*/
      unionRole: number

      /** 礼金分摊金额*/
      giftCouponOcsAmount: number

      /** 礼金批次ID*/
      giftCouponKey: string

      /** 计佣扩展信息，表示结算月:每月实际佣金变化情况，格式：{20191020:10,20191120:-2}，注意：有完成时间的，才会有这个值*/
      balanceExt: string

      /** 敏感数据签名*/
      sign?: string

      /** 价保金额*/
      proPriceAmount?: number

      /** 发货状态（10：待发货，20：已发货）*/
      expressStatus: number

      /** 团长渠道ID，仅限招商团长管理渠道使用，团长开通权限后才可使用。*/
      rid?: number

      /** 商品信息，入参传入fields，goodsInfo获取*/
      goodsInfo?: {
        /** sku主图链接*/
        imageUrl?: string

        /** g=自营，p=pop*/
        owner?: string

        /** 自营商品主Id（owner=g取此值）*/
        mainSkuId?: number

        /** 非自营商品主Id（owner=p取此值）*/
        productId?: number

        /** 店铺名称（或供应商名称）*/
        shopName?: string

        /** 店铺Id*/
        shopId?: number
      }

      /** 类目信息,入参传入fields，categoryInfo获取*/
      categoryInfo: {
        /** 一级类目id*/
        cid1?: number

        /** 二级类目id*/
        cid2: number

        /** 三级类目id*/
        cid3?: number

        /** 一级类目名称*/
        cid1Name?: string

        /** 二级类目名称*/
        cid2Name?: string

        /** 三级类目名称*/
        cid3Name?: string
      }

      /** 汇率*/
      exchangeRate?: number

      /** 汇率单位*/
      exchangeRateUnit?: string
    }
  }

  /** 是否还有更多,true：还有数据；false:已查询完毕，没有数据*/
  hasMore: undefined
}
export class QueryRowOrderSellingAPI extends JdUnionBase {
  async queryRowOrderSelling(params: QueryRowOrderSellingParams) {
    return this.execute<QueryRowOrderSellingResult>(
      'jd.union.open.selling.order.row.query',
      params
    )
  }
}
