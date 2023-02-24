export class JdAPIError extends Error {
  readonly errCode: string

  constructor(errCode: string, message: string) {
    super(`ErrorCode:${errCode} Message:${message}`)
    this.errCode = errCode
  }
}
