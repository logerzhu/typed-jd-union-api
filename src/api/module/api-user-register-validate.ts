import { JdUnionBase } from '../api-base'
export type ValidateRegisterUserParams = {
  /** 请求对象*/
  userStateReq: {
    /** userIdType对应的用户设备ID，userIdType和userId需同时传入*/
    userId: string

    /** 用户ID类型，当前userIdType支持的枚举值包括：8、16、32、64、128、32768。userIdType和userId需同时传入，且一一对应。userIdType各枚举值对应的userId含义如下：8(安卓移动设备Imei); 16(苹果移动设备Openudid)；32(苹果移动设备idfa); 64(安卓移动设备imei的md5编码，32位，大写，匹配率略低);128(苹果移动设备idfa的md5编码，32位，大写，匹配率略低); 32768(安卓移动设备oaid)；131072(安卓移动设备oaid的md5编码，32位，大写)；1048576（苹果移动设备caid）*/
    userIdType: number
  }
}

export type ValidateRegisterUserResult = {
  /** 返回码*/
  code: number

  /** 返回消息*/
  message: string

  /** 数据明细*/
  data: {
    /** 数据明细*/
    userResp: {
      /** 1、京东注册用户 ，2、非京东注册用户（包括未查询到身份的用户）*/
      jdUser: number
    }
  }
}
export class ValidateRegisterUserAPI extends JdUnionBase {
  async validateRegisterUser(params: ValidateRegisterUserParams) {
    return this.execute<ValidateRegisterUserResult>(
      'jd.union.open.user.register.validate',
      params
    )
  }
}
