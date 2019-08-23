// @flow

import type { ResumeAction, PromiseAction } from './actions';
export type Dispatch = (action: ResumeAction | PromiseAction) => any;
