import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import configureStore from './store/configure-store';
import App from './app';
import Todo from './page/todo';

export default function Routes() {
  const history = createHistory();
  const store = configureStore({ history });
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/todo" component={Todo} />
            <Route component={() => (<div>404 Not found</div>)} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </BrowserRouter>
  );
}
