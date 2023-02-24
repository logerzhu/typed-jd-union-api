import { applyMixins } from '../utils'
import { JdUnionBase, JdUnionGoods } from './module'

export interface JdUnionAPI extends JdUnionBase, JdUnionGoods {}

export class JdUnionAPI extends JdUnionBase {
  constructor(options: { appKey: string; secretKey: string }) {
    super(options)
  }
}

applyMixins(JdUnionAPI, [JdUnionGoods])

export * from './module'
