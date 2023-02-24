import { JdCrypto } from '../../cryptos'
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { JdAPIError } from '../../errors'
import qs from 'querystring'

export class JdUnionBase {
  readonly appKey: string
  readonly secretKey: string
  private axiosInstance: AxiosInstance

  constructor(options: { appKey: string; secretKey: string }) {
    this.appKey = options.appKey
    this.secretKey = options.secretKey
    this.axiosInstance = Axios.create({
      baseURL: 'https://api.jd.com/routerjson',
      timeout: 12000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
  }

  private async request(opts: AxiosRequestConfig): Promise<any> {
    try {
      const res = await this.axiosInstance.request(opts)
      if (res.status < 200 || res.status > 204) {
        throw new JdAPIError(
          '' + res.status,
          `url: ${opts.url}, status code: ${res.status}`
        )
      }
      console.log(res.data)
      if (res.data.error_response) {
        throw new JdAPIError('-1', JSON.stringify(res.data.error_response))
      }
      return res.data
    } catch (error) {
      console.error('JdRequestError:', opts, error)
      if (error instanceof JdAPIError) {
        throw error
      } else if (error.response) {
        throw new JdAPIError(error.response.status, '服务器内部错误')
      } else if (error.request) {
        throw new JdAPIError('406', '请求超时，请检查网络')
      } else {
        throw new JdAPIError('500', '未知错误')
      }
    }
  }

  async execute<T>(
    api: string,
    params: { [key: string]: any },
    successCode?: string
  ): Promise<T> {
    const data = {
      timestamp: JdCrypto.timestamp(),
      v: '1.0',
      sign_method: 'md5',
      format: 'json',
      app_key: this.appKey,
      '360buy_param_json': JSON.stringify(params),
      method: api
    }
    const responseData = await this.request({
      method: 'post',
      data: qs.stringify({
        ...data,
        sign: JdCrypto.sign(this.secretKey, data)
      })
    })
    const responseKey = `${api.replace(/\./g, '_')}_responce`
    const response = responseData[responseKey]
    const resultKey = api.substring(api.lastIndexOf('.') + 1) + 'Result'
    const result = JSON.parse(response[resultKey] || null)
    // 判断successCode是否匹配
    return result
  }
}
