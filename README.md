# Vertically Aligned

Small (<1kb) and native web component designed to verically align elements on a page.

## Why?

Seems like vertically align is still an issue? I still see a lot of people joking/complaining about this, so I guess this component will have an audience.

![](docs/tweets.png)


## How to use it

On your regular websites just include the script and use the component

```html
    <vertically-aligned>
      <h1> content !!! </h1>
    </vertically-aligned>
```

On react,preact and similar frameworks you can import the component and use it:

```javascript

import React, { Component } from 'react';
import 'vertically-aligned';

class HelloWorld extends Component {
  render() {
    return (
      <vertically-aligned>
       <h1>Hello World, React!</h1>
      </vertically-aligned>
  ); 
  } 
} 

export default HelloWorld;
```

## No Flex? No problem!

Add the attribute `noFlex` to the HTML tag and it will use table styles.

```html
    <vertically-aligned noFlex>
      <h1> content !!! </h1>
    </vertically-aligned>
```