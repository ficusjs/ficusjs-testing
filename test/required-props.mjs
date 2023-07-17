import { html, renderer } from '@ficusjs/renderers/htm-preact'
import { createCustomElement } from '@ficusjs/core/custom-element'

createCustomElement('required-props', {
  renderer,
  props: {
    name: {
      type: String,
      required: true
    }
  },
  render () {
    return html`<p>Required props: name = ${this.props.name}</p>`
  }
})
