import { EPayioRole } from '../enums/role.enum';

export interface IPayioPermission {
  active: boolean;
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  role: EPayioRole;
  tags: string[];
  updatedAt: Date;
}
