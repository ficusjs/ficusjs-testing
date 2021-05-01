import { JSDOM } from 'jsdom'

export function init () {
  const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>')
  globalThis.dom = dom
  globalThis.Node = dom.Node
  globalThis.window = dom.window
  globalThis.document = dom.window.document
  globalThis.customElements = window.customElements
  globalThis.HTMLElement = window.HTMLElement
}

export async function render (tagName, importer) {
  await importer()
  const document = globalThis.document
  const basicComp = document.createElement(tagName)
  document.body.appendChild(basicComp)
  return basicComp
}
