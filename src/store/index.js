// @flow

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import type { Store } from '../types/redux/store';

export default (): Store =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

