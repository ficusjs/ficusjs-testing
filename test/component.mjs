import { html, renderer } from '@ficusjs/renderers/htm-preact'
import { createCustomElement } from '@ficusjs/core/custom-element'

createCustomElement('basic-comp', {
  renderer,
  render () {
    return html`<p>Basic component</p>`
  }
})
