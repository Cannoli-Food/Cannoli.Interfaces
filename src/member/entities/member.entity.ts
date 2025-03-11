import { EMemberRules, EMemberType } from '../enums';
import { IMember } from '../interfaces';

export class MemberEntity implements IMember {
  public active: boolean = true;
  public companyId: string = '';
  public containerId: string = '';
  public createdAt: Date = new Date();
  public id: string = '';
  public updatedAt: Date = new Date();
  public companyName: string = '';
  public containerName: string = '';
  public email: string = '';
  public imageUrl: string | null = '';
  public internationalCode: string = '55';
  public name: string = '';
  public partnerId: string | null = '';
  public phoneNumber: string = '';
  public phoneNumberVerified: boolean = false;
  public phoneNumberVerifiedAt: Date | null = null;
  /**
   * @deprecated Use `imageUrl` instead
   */
  public photoUrl: string | null = '';
  public rule: EMemberRules = EMemberRules.USER;
  public tags: string[] = [];
  public type: EMemberType | null = EMemberType.CLIENT;

  /**
   * @deprecated Use `id` instead.
   */
  public uid: string = '';

  constructor(data?: Partial<MemberEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
