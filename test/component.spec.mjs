import test from 'ava'
import { init, render } from '../src/index.mjs'

test.before(init)

test('render basic component', async t => {
  const comp = await render('basic-comp', () => import('./component.mjs'))
  t.is(comp.querySelector('p').textContent, 'Basic component')
})
