// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import theme from './styles';
import createStore from './store';
import type { Store } from './types/redux/store';

const store: Store = createStore();
const rootElement = document.getElementById('root');

if (rootElement != null) {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>,
    rootElement);
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
