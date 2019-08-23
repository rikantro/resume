// @flow
import type { ResumeEntity } from '../entities/resume';

export type ResumeFetchedAction = {|
  +type?: string,
  +data?: ResumeEntity
|}

export type ResumeFetchedFailedAction = {|
  +type?: string,
  +error?: string
|}

export type ResumeAction = ResumeFetchedAction | ResumeFetchedFailedAction;
export type PromiseAction = Promise<ResumeAction>;

export type Action = ResumeAction | PromiseAction;