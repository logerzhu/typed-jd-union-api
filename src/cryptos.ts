import crypto from 'crypto'

export class JdCrypto {
  //格式化日期成 yyyy-MM-dd HH:mm:ss 格式
  static formatTimestamp(date: Date) {
    //格式化成两位有效数字
    const pad = (num: number) => (num < 10 ? '0' + num : '' + num)
    return (
      `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
        date.getDate()
      )}` +
      ` ${pad(date.getHours())}:${pad(date.getUTCMinutes())}:${pad(
        date.getSeconds()
      )}`
    )
  }

  static timestamp() {
    return JdCrypto.formatTimestamp(new Date())
  }

  static md5(s) {
    return crypto.createHash('md5').update(s).digest('hex')
  }

  static sign(secretKey: string, params: { [key: string]: string }) {
    const sorted = Object.keys(params).sort()
    let signStr = secretKey
    for (let i = 0, l = sorted.length; i < l; i++) {
      let k = sorted[i]
      signStr += k + params[k]
    }
    signStr += secretKey
    return JdCrypto.md5(signStr).toUpperCase()
  }
}
