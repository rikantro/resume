// @flow

import type { ContactInfoEntity } from './contact.info';

export type OwnerEntity = {
  fullName: string,
  title: string,
  avatarUrl: string,
  contact: ContactInfoEntity,
}