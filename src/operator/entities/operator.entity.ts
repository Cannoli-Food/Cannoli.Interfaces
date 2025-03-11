import { IBaseCompany } from '../../general';
import { IOperator } from '../interfaces';

export class OperatorEntity implements IOperator {
  public active: boolean = true;
  public id: string = '';
  public companies: IBaseCompany[] = [];
  public name: string = '';
  public doc: string | null = null;
  public email: string | null = null;
  public internationalCode: string = '+55';
  public phoneNumber: string | null = '';
  public phoneNumberVerified: boolean = false;
  public phoneNumberVerifiedAt: Date | null = null;
  public imageUrl: string | null = null;
  public tags: string[] = [];
  public username: string = '';
  public password: string = '';
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();

  constructor(data?: Partial<OperatorEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
