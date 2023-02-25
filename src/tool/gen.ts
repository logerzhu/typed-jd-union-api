import fs from 'fs'
import * as path from 'path'
import jdDefinitionToTS from './jd-def-tool'

type Element = {
  type: string
  name: string
  desc: string
  required: boolean
  elements: Element[] | null
}

function parseElement(data: any): Element {
  return {
    type: data.type,
    name: data.webPamer,
    desc: data.desc,
    required: data.required,
    elements:
      data.elements != null && data.elements.length > 0
        ? data.elements.map((e) => parseElement(e))
        : null
  }
}

function formatElement(element: Element) {
  const typeMap = { String: 'string', Number: 'number' }
  return `
  /** ${element.desc}*/
  ${element.name}${!element.required ? '?' : ''}:${
    element.elements != null
      ? `{
      ${element.elements.map((e) => formatElement(e)).join('')}
  }`
      : typeMap[element.type]
  }
  `
}

async function genTS() {
  const defFolder = path.join(__dirname, '../../json-def')
  const defFiles = fs.readdirSync(defFolder)

  const firstUppercase = (str: String) =>
    str.substring(0, 1).toUpperCase() + str.substring(1)
  const firstLowercase = (str: String) =>
    str.substring(0, 1).toLowerCase() + str.substring(1)

  const genFiles: { file: string; className: string }[] = []

  for (let defFile of defFiles) {
    const jsonDef = JSON.parse(
      fs.readFileSync(path.join(defFolder, defFile), 'utf8')
    )

    const fileName = `api-${jsonDef.data.apiInfoDTO.apiName
      .split('.')
      .slice(3)
      .join('-')}`
    fs.writeFileSync(
      path.join(__dirname, '../api/module', fileName + '.ts'),
      jdDefinitionToTS(jsonDef)
    )

    genFiles.push({
      file: fileName,
      className:
        jsonDef.data.apiInfoDTO.apiName
          .split('.')
          .slice(3)
          .reverse()
          .map((k) => firstUppercase(k))
          .join('') + 'API'
    })
  }

  fs.writeFileSync(
    path.join(__dirname, '../api/module', 'index.ts'),
    `${genFiles.map((g) => `export * from './${g.file}'`).join('\n')}`
  )

  fs.writeFileSync(
    path.join(__dirname, '../api', 'index.ts'),
    `
import {applyMixins} from '../utils'
import {JdUnionBase} from './api-base'
import {${genFiles.map((g) => g.className).join(',')}} from './module'

export interface JdUnionAPI extends JdUnionBase, ${genFiles
      .map((g) => g.className)
      .join(',')} {
}

export class JdUnionAPI extends JdUnionBase {
  constructor(options: { appKey: string; secretKey: string }) {
    super(options)
  }
}

applyMixins(JdUnionAPI, [${genFiles.map((g) => g.className).join(',')}])

export * from './module'
    `
  )
}

genTS().then(
  () => console.log('Done'),
  (err) => console.log(err)
)
