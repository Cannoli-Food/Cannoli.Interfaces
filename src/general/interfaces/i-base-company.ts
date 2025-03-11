import { EMemberRules } from "../../member";
import { EMemberType } from "../../member/enums/member-type.enum";

export interface IBaseCompany {
  companyId: string;
  companyName: string;

  containerId: string;
  containerName: string;

  groupId: string;
  groupName: string;

  rule: EMemberRules;
  type: EMemberType;

  createdAt: Date;
  updatedAt: Date;
}
