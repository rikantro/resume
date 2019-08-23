// @flow

import { RESUME_FETCHED, RESUME_FETCHED_FAILURE } from './constants';
import api from './api';
import type { ResumeAction } from '../../types/redux/actions';
import type { ResumeEntity } from '../../types/entities/resume';
import type { Dispatch }  from '../../types/redux/dispatch';

const resumeFetched = (data: ResumeEntity): ResumeAction => ({
  type: RESUME_FETCHED,
  data
});

const resumeFetchedFailure = (error: string): ResumeAction => ({
  type: RESUME_FETCHED_FAILURE,
  error
});

export const getResume = () => (dispatch: Dispatch) =>
  api.getResume()
    .then((result: ResumeEntity) => dispatch(resumeFetched(result)))
    .catch((err: Error) => dispatch(resumeFetchedFailure(err.message)));