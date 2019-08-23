// @flow

import type { Store as ReduxStore } from 'redux';
import type { Action } from './actions';
import type { State } from './states';

export type Store = ReduxStore<State, Action>;
