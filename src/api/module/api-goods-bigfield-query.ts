import { JdUnionBase } from '../api-base'
export type QueryBigfieldGoodsParams = {
  /**  请求入参*/
  goodsReq: {
    /** skuId集合，最多支持批量入参10个sku*/
    skuIds: number[]

    /** 查询域集合，不填写则查询全部，目目前支持：categoryInfo（类目信息）,imageInfo（图片信息）,baseBigFieldInfo（基础大字段信息）,bookBigFieldInfo（图书大字段信息）,videoBigFieldInfo（影音大字段信息）,detailImages（商详图）*/
    fields?: string[]
  }
}

export type QueryBigfieldGoodsResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    bigFieldGoodsResp: {
      /** skuId*/
      skuId: number

      /** 商品名称*/
      skuName: string

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

      /** 图片信息*/
      imageInfo: {
        /** 图片合集*/
        imageList: {
          /** 图片合集*/
          urlInfo: {
            /** 主图链接*/
            url: string
          }
        }[]
      }

      /** 基础大字段信息*/
      baseBigFieldInfo: {
        /** 商品介绍*/
        wdis: string

        /** 规格参数【废弃】*/
        propCode: string

        /** 包装清单(仅自营商品)*/
        wareQD: string

        /** 规格参数*/
        propGroups?: string
      }

      /** 图书大字段信息*/
      bookBigFieldInfo: {
        /** 媒体评论*/
        comments: string

        /** 精彩文摘与插图(插图)*/
        image: string

        /** 内容摘要(内容简介)*/
        contentDesc: string

        /** 产品描述(相关商品)*/
        relatedProducts: string

        /** 编辑推荐*/
        editerDesc: string

        /** 目录*/
        catalogue: string

        /** 精彩摘要(精彩书摘)*/
        bookAbstract: string

        /** 作者简介*/
        authorDesc: string

        /** 前言(前言/序言)*/
        introduction: string

        /** 产品特色*/
        productFeatures: string
      }

      /** 影音大字段信息*/
      videoBigFieldInfo: {
        /** 评论*/
        comments: string

        /** 商品描述(精彩剧照)*/
        image: string

        /** 内容摘要(内容简介)*/
        contentDesc: string

        /** 编辑推荐*/
        editerDesc: string

        /** 目录*/
        catalogue: string

        /** 包装清单*/
        box_Contents: string

        /** 特殊说明*/
        material_Description: string

        /** 说明书*/
        manual: string

        /** 产品特色*/
        productFeatures: string
      }

      /** 自营主skuId*/
      mainSkuId?: number

      /** 非自营商品Id*/
      productId?: number

      /** sku上下架状态      1：上架(可搜索，可购买)，      0：下架(可通过skuid搜索，不可购买)，      2：可上架（可通过skuid搜索，不可购买），      10：pop 删除（不可搜索，不可购买））*/
      skuStatus?: number

      /** g=自营，p=pop*/
      owner?: string

      /** 商详图*/
      detailImages?: string
    }
  }[]
}
export class QueryBigfieldGoodsAPI extends JdUnionBase {
  async queryBigfieldGoods(params: QueryBigfieldGoodsParams) {
    return this.execute<QueryBigfieldGoodsResult>(
      'jd.union.open.goods.bigfield.query',
      params
    )
  }
}
