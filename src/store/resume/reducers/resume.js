// @flow

import { RESUME_FETCHED, RESUME_FETCHED_FAILURE } from '../constants';
import type { ResumeAction } from '../../../types/redux/actions';
import type { ResumeState } from '../../../types/redux/states';

export default function resumeReducer(state : ResumeState = {}, action : ResumeAction = {}): ResumeState {

  switch (action.type) {
    case RESUME_FETCHED:
      return action.data ? { ...state, data: action.data } : state;

    case RESUME_FETCHED_FAILURE:      
      return action.error ? { error: action.error } : state;

    default:
      return state;

  }
}