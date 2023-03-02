import { JdUnionBase } from '../api-base'
export type GetGoodsCategoryParams = {
  /** 请求对象*/
  req: {
    /** 父类目id(一级父类目为0) */
    parentId: number

    /** 类目级别(类目级别 0，1，2 代表一、二、三级类目)*/
    grade: number
  }
}

export type GetGoodsCategoryResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    categoryResp: {
      /** 类目Id*/
      id: number

      /** 类目名称*/
      name: string

      /** 类目级别(类目级别 0，1，2 代表一、二、三级类目)*/
      grade: number

      /** 父类目Id*/
      parentId: number
    }
  }[]
}
export class GetGoodsCategoryAPI extends JdUnionBase {
  async getGoodsCategory(params: GetGoodsCategoryParams) {
    return this.execute<GetGoodsCategoryResult>(
      'jd.union.open.category.goods.get',
      params
    )
  }
}
