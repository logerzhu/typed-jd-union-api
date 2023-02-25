import { JdUnionBase } from '../api-base'
export type QuerySupplyRowOrderParams = {
  /** 参数描述*/
  orderReq: {
    /** 页码*/
    pageIndex: number

    /** 每页包含条数，上限为500*/
    pageSize: number

    /** 订单时间查询类型(1：下单时间，2：完成时间（购买用户确认收货时间），3：更新时间*/
    type: number

    /** 开始时间 格式yyyy-MM-dd HH:mm:ss，与endTime间隔不超过1小时*/
    startTime: string

    /** 结束时间 格式yyyy-MM-dd HH:mm:ss，与startTime间隔不超过1小时*/
    endTime: string

    /** 支持出参数据筛选，逗号','分隔，目前可用：goodsInfo（商品信息）,categoryInfo(类目信息）*/
    fields?: string

    /** 订单号，当orderId不为空时，其他参数非必填*/
    orderId?: number
  }
}

export type QuerySupplyRowOrderResult = {
  /** 返回码*/
  code?: number

  /** 返回消息*/
  message?: string

  /** 数据明细*/
  data?: {
    /** 数据明细*/
    orderRowResp?: {
      /** 标记唯一订单行：订单+sku维度的唯一标识*/
      id?: string

      /** 订单号*/
      orderId?: number

      /** 父单的订单号：如一个订单拆成多个子订单时，原订单号会作为父单号，拆分的订单号为子单号存储在orderid中。若未发生拆单，该字段为0*/
      parentId?: number

      /** 下单时间,格式yyyy-MM-dd HH:mm:ss*/
      orderTime?: string

      /** 完成时间（购买用户确认收货时间）,格式yyyy-MM-dd HH:mm:ss*/
      finishTime?: string

      /** 更新时间,格式yyyy-MM-dd HH:mm:ss*/
      modifyTime?: string

      /** 推客ID*/
      unionId?: number

      /** 商品ID*/
      skuId?: number

      /** 商品名称*/
      skuName?: string

      /** 商品数量*/
      skuNum?: number

      /** 商品已退货数量*/
      skuReturnNum?: number

      /** 商品售后中数量*/
      skuFrozenNum?: number

      /** 商品单价*/
      price?: number

      /** 佣金比例(投放的广告主计划比例)*/
      commissionRate?: number

      /** 最终分佣比例（单位：%）*/
      finalRate?: number

      /** 预估计佣金额：由订单的实付金额拆分至每个商品的预估计佣金额，不包括运费，以及京券、东券、E卡、余额等虚拟资产支付的金额。该字段仅为预估值，实际佣金以actualCosPrice为准进行计算*/
      estimateCosPrice?: number

      /** 推客的预估佣金（预估计佣金额*佣金比例*最终比例），如订单完成前发生退款，此金额也会更新。*/
      estimateFee?: number

      /** 实际计算佣金的金额。订单完成后，会将误扣除的运费券金额更正。如订单完成后发生退款，此金额会更新。*/
      actualCosPrice?: number

      /** 推客分得的实际佣金（实际计佣金额*佣金比例*最终分佣比例）。如订单完成后发生退款，此金额会更新。*/
      actualFee?: number

      /** sku维度的有效码（-1：未知,2.无效-拆单,3.无效-取消,5.无效-账号异常,13.违规订单-其他,15.待付款,16.已付款,17.已完成（购买用户确认收货）,27. 违规订单-违反京东平台规则*/
      validCode?: number

      /** 一级类目id*/
      cid1?: number

      /** 二级类目id*/
      cid2?: number

      /** 三级类目id*/
      cid3?: number

      /** 商家ID*/
      popId?: number

      /** 预估结算时间，订单完成后才会返回，格式：yyyyMMdd，默认：0。表示最新的预估结算日期。当payMonth为当前的未来时间时，表示该订单可结算；当payMonth为当前的过去时间时，表示该订单已结算*/
      payMonth?: number

      /** 计佣扩展信息，表示结算月:每月实际佣金变化情况，格式：{20191020:10,20191120:-2}，订单完成后会有该值*/
      balanceExt?: string

      /** 数据签名，用来核对出参数据是否被修改，入参fields中写入sign时返回*/
      sign?: string

      /** 价保赔付金额：订单申请价保或赔付的金额，实际计佣金额已经减去此金额，您无需处理*/
      proPriceAmount?: number

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
      categoryInfo?: {
        /** 一级类目id*/
        cid1?: number

        /** 二级类目id*/
        cid2?: number

        /** 三级类目id*/
        cid3?: number

        /** 一级类目名称*/
        cid1Name?: string

        /** 二级类目名称*/
        cid2Name?: string

        /** 三级类目名称*/
        cid3Name?: string
      }

      /** 发货状态（10：待发货，20：已发货）*/
      expressStatus?: number

      /** 抖快外部订单号，若该字段为0，可联系联盟运营*/
      outSideOrderId?: string

      /** 达人昵称，下单时刻抖快达人的昵称快照，非抖快平台最新的达人昵称*/
      talentName?: string

      /** 1：抖音平台，2：快手平台*/
      applyPlatform?: number

      /** 达人在京东的唯一ID，可在“京东联盟-京红任务-小店达人”中搜索获取，不会随抖快达人昵称的改变而变化*/
      talentId?: string
    }
  }

  /** 是否还有更多,true：还有数据；false:已查询完毕，没有数据*/
  hasMore?: undefined
}
export class QuerySupplyRowOrderAPI extends JdUnionBase {
  async querySupplyRowOrder(params: QuerySupplyRowOrderParams) {
    return this.execute<QuerySupplyRowOrderResult>(
      'jd.union.open.order.row.supply.query',
      params
    )
  }
}
