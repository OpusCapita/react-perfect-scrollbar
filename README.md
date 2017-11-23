# React Perfect Scrollbar

### Description
React wrapper for [perfect-scrollbar](https://www.npmjs.com/package/perfect-scrollbar) with OpusCapita styles.

- Updated to latest `perfect-scrollbar` version.
- Based on https://github.com/goldenyz/react-perfect-scrollbar

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
