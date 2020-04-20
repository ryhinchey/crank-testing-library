import {renderer} from "@bikeshaving/crank/cjs/dom";
import {
  getQueriesForElement,
  prettyDOM
} from '@testing-library/dom'


const mountedContainers = new Set()

function render(ui,
  {
    container,
    baseElement = document.body,
  } = {},
) {
  if (!baseElement) {
    // default to document.body instead of documentElement to avoid output of potentially-large
    // head elements (such as JSS style blocks) in debug output
    baseElement = document.body
  }
  if (!container) {
    container = baseElement.appendChild(document.createElement('div'))
  }

  // we'll add it to the mounted containers regardless of whether it's actually
  // added to document.body so the cleanup method works regardless of whether
  // they're passing us a custom container or not.
  mountedContainers.add(container)
  
  renderer.render(ui, container)

  return {
    container,
    baseElement,
    // TODO: implement cleanup
    debug: (el = baseElement, maxLength, options) =>
      Array.isArray(el)
        ? // eslint-disable-next-line no-console
          el.forEach(e => console.log(prettyDOM(e, maxLength, options)))
        : // eslint-disable-next-line no-console,
          console.log(prettyDOM(el, maxLength, options)),
    ...getQueriesForElement(baseElement),
  }
}

// just re-export everything from dom-testing-library
export * from '@testing-library/dom'
export { render  }
