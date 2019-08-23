// @flow

import type { OwnerEntity } from './owner';
import type { JobEntity } from './job';
import type { SkillEntity } from './skill';
import type { TechnicalSkillEntity } from './technical.skill';
import type { CertificationEntity } from './certification';

export type ResumeEntity = {
  summary: string,
  owner: OwnerEntity,
  jobs: JobEntity[],
  technical: TechnicalSkillEntity[],
  skills: SkillEntity[],
  languages: SkillEntity[],
  certifications: CertificationEntity[]
}