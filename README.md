# FicusJS testing

<img src="img/ficus-icon-optimised.svg" alt="FicusJS" width="150" align="right">

The [FicusJS testing](https://www.npmjs.com/package/@ficusjs/testing) package provides lightweight helper functions for web component testing.

This package provides browser globals such as `window` and `document` using [jsdom](https://www.npmjs.com/package/jsdom) which is an implementation of many browser APIs ideal for testing but is not an actual browser.

We recommend using a tool such as [Cypress](https://www.cypress.io/) for browser end-to-end tests.

## Running tests

This package contains functions intended for a NodeJS environment and not a real browser. It is therefore, best used for fast iteration.

The functions can be used with any NodeJS testing framework.

The following functions are available in the [FicusJS testing](https://www.npmjs.com/package/@ficusjs/testing) package.

- `init` - a function for initializing the test environment
- `render` - a function to render a web component for testing

### init function

The `init` function initializes the NodeJS environment ready for testing.

Simply call `init` in your set-up hook.

```js
import test from 'ava'
import { init, render } from '@ficusjs/testing'

test.before(init)

// if passing options to JSDOM
test.before(() => init({ runScripts: 'dangerously' }))
```

The `init` function accepts the following optional arguments:

| Name       | Type     | Description                           |
|------------|----------|---------------------------------------|
| `options`  | `object` | An object of options to pass to JSDOM |

### render function

The `render` function will create a new web component instance for testing.

It returns a DOM instance of the component.

```js
import test from 'ava'
import { init, render } from '@ficusjs/testing'

test.before(init)

test('render basic component', async t => {
    const comp = await render('basic-comp', () => import('../src/component.mjs'), { foo: 'bar' })
    t.is(comp.querySelector('p').textContent, 'Basic component with bar')
})
```

The `render` function accepts the following arguments:

| Name       | Type       | Description                                                            |
|------------|------------|------------------------------------------------------------------------|
| `tagName`  | `string`   | The web component tag name                                             |
| `importer` | `function` | A function that registers a web component. This can return a `Promise` |
| `attrs`    | `object`   | An optional object of attributes to set on the component instance      |

## Browser globals

The following browser globals are available when using the [FicusJS testing](https://www.npmjs.com/package/@ficusjs/testing) package.

- `dom`
- `Node`
- `window`
- `document`
- `navigator`
- `customElements`
- `HTMLElement`

## Testing components

Testing web components can be done in a number of ways.

- verifying that a component renders without throwing using a "smoke test"
- shallow rendering and testing component output
- full rendering and testing component lifecycle and state changes

It is a good idea to start with creating basic smoke tests for your components.

Testing that a component mounts and ensures that it doesn't throw during rendering provides a lot of value with very little effort.

## License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

## Contributing to FicusJS

Any kind of positive contribution is welcome! Please help us to grow by contributing to the project.

If you wish to contribute, you can work on any features you think would enhance the library. After adding your code, please send us a Pull Request.

> Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our [CODE OF CONDUCT](CODE_OF_CONDUCT.md), and the process for submitting pull requests to us.

## Support

We all need support and motivation. FicusJS is not an exception. Please give this project a ⭐️ to encourage and show that you liked it. Don't forget to leave a star ⭐️ before you move away.

If you found the library helpful, please consider [sponsoring us](https://github.com/sponsors/ficusjs).
