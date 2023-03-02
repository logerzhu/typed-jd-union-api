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
  const typeMap = {
    String: 'string',
    Number: 'number',
    Boolean: 'boolean',
    'String[]': 'string[]',
    'Number[]': 'number[]',
    'Boolean[]': 'boolean[]'
  }
  return `
  /** ${element.desc}*/
  ${element.name}${!element.required ? '?' : ''}:${
    element.elements != null
      ? `{
      ${element.elements.map((e) => formatElement(e)).join('')}
  }${element.type.endsWith('[]') ? '[]' : ''}`
      : typeMap[element.type]
  }
  `
}

export default function jdDefinitionToTS(jsonDef: any) {
  const apiInfo = {
    apiName: jsonDef.data.apiInfoDTO.apiName,
    znName: jsonDef.data.apiInfoDTO.znName,
    apiDesc: jsonDef.data.apiInfoDTO.apiDesc,
    params: parseElement(jsonDef.data.method.elements[1]),
    result: jsonDef.data.method.josResult.elements.map((e) => parseElement(e)),
    successCode:
      jsonDef.data.apiErrorsDTOS.find((d) => d.solution == '调用成功')?.code ||
      '200'
  }

  const firstUppercase = (str: String) =>
    str.substring(0, 1).toUpperCase() + str.substring(1)
  const firstLowercase = (str: String) =>
    str.substring(0, 1).toLowerCase() + str.substring(1)
  const apiKey = jsonDef.data.apiInfoDTO.apiName
    .split('.')
    .slice(3)
    .reverse()
    .map((k) => firstUppercase(k))
    .join('')

  const paramsTSD = `export type ${apiKey}Params = {
    ${formatElement(apiInfo.params)}
  }`

  const resultTSD = `export type ${apiKey}Result = {
    ${apiInfo.result[0].elements.map((e) => formatElement(e)).join('')}
  }`
  return `
    import { JdUnionBase } from '../api-base'
    ${paramsTSD}
    
    ${resultTSD}
    export class ${apiKey}API extends JdUnionBase {
      async ${firstLowercase(apiKey)}(params:${apiKey}Params){
        return this.execute<${apiKey}Result>('${apiInfo.apiName}', params)
      }
    }
    `
}
