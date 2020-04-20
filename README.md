
# Crank Testing Library

[![Build Status](https://travis-ci.org/ryhinchey/crank-testing-library.svg?branch=master)](https://travis-ci.org/ryhinchey/crank-testing-library)

Simple Crank.js testing utilities that encourage good testing practices. Crank Testing Library is a lightweight adapter built on top of [DOM Testing Library](https://github.com/testing-library/dom-testing-library/).

## Installation

This module is distributed via `npm` and should be installed as one of your
project's `devDependencies`:

```
npm install --save-dev crank-testing-library 
```

## Usage

```js
  // Greeting.jsx
  
  /** @jsx createElement */
  import {createElement} from "@bikeshaving/crank";

  function Greeting({name="World"}) {
    return (
      <div >Hello {name}</div>
    );
  }
```

```js
// GreetingTest.spec.js

/** @jsx createElement */
import {createElement} from "@bikeshaving/crank";
import { render } from 'crank-testing-library';
import Greeting from './';

test('renders name', () => {    
  const { getByText } = render(<Greeting />);
  
  expect(getByText("Hello World")).toBeTruthy();
});
```