// @flow
import { combineReducers } from 'redux';
import resumeReducer from './resume/reducers/resume';

import type { Reducer } from 'redux'
import type { State } from '../types/redux/states';
import type { Action } from '../types/redux/actions';

const rootReducer: Reducer<State, Action> = combineReducers({
  resume: resumeReducer,  
});

export default rootReducer;
