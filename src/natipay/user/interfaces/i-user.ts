import { IUser } from '../../../users';

export interface INatipayUser extends IUser {
  currentContainerId?: string | null;
  currentContainerName?: string | null;
}
