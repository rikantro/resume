// @flow

import type { ResumeEntity } from '../entities/resume';

export type ResumeState = {
  data?: ResumeEntity,
  error: string
}

export type State = {
  resume: ResumeState 
};
