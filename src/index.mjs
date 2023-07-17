import { JSDOM } from 'jsdom'

export function init (options = {}) {
  const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>', options)
  globalThis.dom = dom
  globalThis.Node = dom.Node
  globalThis.window = dom.window
  globalThis.document = dom.window.document
  globalThis.customElements = window.customElements
  globalThis.HTMLElement = window.HTMLElement
}

export async function render (tagName, importer, attrs = {}) {
  await importer()
  const document = globalThis.document
  const basicComp = document.createElement(tagName)
  Object.entries(attrs).forEach(([key, value]) => {
    basicComp.setAttribute(key, value)
  })
  document.body.appendChild(basicComp)
  return basicComp
}
