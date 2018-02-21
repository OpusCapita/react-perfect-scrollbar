# React Perfect Scrollbar

### Description
React wrapper for [perfect-scrollbar](https://www.npmjs.com/package/perfect-scrollbar) with OpusCapita styles.

- Updated to latest `perfect-scrollbar` version.
- Based on https://github.com/goldenyz/react-perfect-scrollbar

### Installation
```
npm install @opuscapita/react-perfect-scrollbar
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-perfect-scrollbar)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
| Prop name          | Type          | Default        | Description                              |
| ------------------ | ------------- | -------------- | ---------------------------------------- |
| className          | string        |                | Extra class names                        |
| option             | object        |                | PerfectScrollbar options                 |
| containerRef       | function      |                | Ref for the container                    |
| onScrollY          | function      |                | onScollY callback                        |
| onScrollX          | function      |                | onScollX callback                        |
| onScrollUp         | function      |                | onScollUp callback                       |
| onScrollYDown      | function      |                | onScollDown callback                     |
| onScrollLeft       | function      |                | onScollLeft callback                     |
| onScrollRight      | function      |                | onScollRight callback                    |
| onYReachStart      | function      |                | onYReachStart callback                   |
| onYReachEnd        | function      |                | onYReachEnd callback                     |
| onXReachStart      | function      |                | onXReachStart callback                   |
| onXReachEnd        | function      |                | onXReachEnd callback                     |

### Code example
```jsx
import React from 'react';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

export default class ListView extends React.Component {
  render() {
    return (
      <PerfectScrollbar>
        <SomeList />
      </PerfectScrollbar>
    );
  }
}
```
