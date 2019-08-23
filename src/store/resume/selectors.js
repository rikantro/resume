// @flow

import type { State } from '../../types/redux/states';
import type { ResumeEntity } from '../../types/entities/resume';
import type { OwnerEntity } from '../../types/entities/owner';
import type { CertificationEntity } from '../../types/entities/certification';
import type { JobEntity } from '../../types/entities/job';
import type { TechnicalSkillEntity } from '../../types/entities/technical.skill';
import type { SkillEntity } from '../../types/entities/skill';

const getResources = (state: State): ResumeEntity | void => 
  state.resume && state.resume.data ? state.resume.data : undefined;

export function isLoading(state: State): boolean {
  const resources = getResources(state);
  return resources ? false : !hasError(state);
}

export function hasError(state: State): boolean {
  return state.resume && typeof(state.resume.error) !== 'undefined';
}

export function getOwner(state: State): OwnerEntity | void {
  const resources = getResources(state);
  return resources ? resources.owner : undefined;
}

export function getSummary(state: State): string {
  const resources = getResources(state);
  return resources ? resources.summary : '';
}

export function getExperience(state: State): JobEntity[] {
  const resources = getResources(state);
  return resources ? resources.jobs : [];
}

export function getCertifications(state : State): CertificationEntity[] {
  const resources = getResources(state);
  return resources ? resources.certifications : [];
}

export function getTechnicalSkills(state: State): TechnicalSkillEntity[]{
  const resources = getResources(state);
  return resources ? resources.technical : [];
}

export function getLanguages(state: State): SkillEntity[] {
  const resources = getResources(state);
  return resources ? resources.languages : [];
}

export function getSkills(state: State): SkillEntity[] {
  const resources = getResources(state);
  return resources ? resources.skills : [];
}