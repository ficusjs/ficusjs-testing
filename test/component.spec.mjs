import test from 'ava'
import { init, render } from '../src/index.mjs'

test.before(init)

test('render basic component', async t => {
  const comp = await render('basic-comp', () => import('./component.mjs'))
  t.is(comp.querySelector('p').textContent, 'Basic component')
})

test('render component with required props', async t => {
  const comp = await render('required-props', () => import('./required-props.mjs'), { name: 'test' })
  t.is(comp.querySelector('p').textContent, 'Required props: name = test')
})
