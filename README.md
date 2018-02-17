# React Perfect Scrollbar

### Description
React wrapper for [perfect-scrollbar](https://www.npmjs.com/package/perfect-scrollbar) with OpusCapita styles.

- Updated to latest `perfect-scrollbar` version.
- Based on https://github.com/goldenyz/react-perfect-scrollbar

### Demo
View the [DEMO](https://opuscapita.github.io/react-perfect-scrollbar)

### Dependencies
| Package            | Version       |
| ------------------ | ------------- |
| perfect-scrollbar  | 1.3.0         |

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
