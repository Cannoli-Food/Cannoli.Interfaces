import { IDesenfilaContainerOrderPix } from '../interfaces';
export class DesenfilaContainerOrderPixEntity implements IDesenfilaContainerOrderPix {
  public qrCode: string = '';
  public image: string = '';
  public templateImage: string = '';

  constructor(data?: Partial<DesenfilaContainerOrderPixEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
