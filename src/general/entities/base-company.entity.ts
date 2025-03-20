import { EMemberRules, EMemberType } from "../../member";
import { IBaseCompany } from "../interfaces";

export class BaseCompanyEntity implements IBaseCompany {
  public companyId: string = '';
  public companyName: string = '';
  
  public containerId: string = '';
  public containerName: string = '';
  
  public groupId: string = '';
  public groupName: string = '';

  public rule: EMemberRules = EMemberRules.USER;
  public type: EMemberType = EMemberType.CUSTOMER;

  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();

  constructor(data?: Partial<BaseCompanyEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
