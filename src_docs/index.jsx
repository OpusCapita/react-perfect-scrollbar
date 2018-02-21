import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import ExampleContainer from './containers/example.container';

import './app.component.scss';
import './images/favicon.ico';

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Router>
        <Route path="/" component={Component} />
      </Router>
    </AppContainer>,
    document.getElementById('oc-examples'),
  );
};

renderApp(ExampleContainer);

// Webpack Hot Module Replacement API
/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept('./containers/example.container', () => {
    const Comp = require('./containers/example.container').default;
    renderApp(Comp);
  });
}
