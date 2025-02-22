// src/models/base.entity.ts
import { EPixKey } from '../enums';
import { IPixKeys } from '../interfaces/i-pix-keys';

export class PixKeyEntity implements IPixKeys {
  public active: boolean = true;
  public createdAt: Date = new Date();
  public description: string = '';
  public id: string = '';
  public isDefault: boolean = false;
  public key: string = '';
  public type: EPixKey = EPixKey.CPF;
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PixKeyEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
