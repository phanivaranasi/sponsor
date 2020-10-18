import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';
import App from "./App";
import {createBrowserHistory} from 'history';
import configureStore from './store/configure';

import '../assets/style.css';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App  />
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById("openpatient")
);