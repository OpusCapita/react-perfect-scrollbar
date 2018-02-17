import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import ComponentView from './components/component-view';

import './app.component.scss';

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

renderApp(ComponentView);

// Webpack Hot Module Replacement API
/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept('./components/component-view', () => {
    const Comp = require('./components/component-view').default;
    renderApp(Comp);
  });
}
