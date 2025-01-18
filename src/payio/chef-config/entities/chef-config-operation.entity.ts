import { EBarcodeFormat, EPayioChefOperationMode, EPayioChefTabMode } from '../enums';
import { IPayioChefConfigOperation } from '../interfaces';

export class PayioChefConfigOperationEntity implements IPayioChefConfigOperation {
  // #region Properties (17)

  public barcodeFormat: EBarcodeFormat = EBarcodeFormat.CODE_6_PRICE_6;
  public barcodeInitialFlag: string = '2';
  public bipOnPrint: boolean = true;
  public headerMessages: string[] = [];
  public listItems: string[] = [];
  public multiOrder: boolean = false;
  public operationMode: EPayioChefOperationMode = EPayioChefOperationMode.SCALE;
  public printFormat: 'simple' | 'tabular' = 'simple';
  public showBarCode: boolean = true;
  public showNetWeight: boolean = true;
  public showOrderNumber: boolean = true;
  public showPricePerKg: boolean = true;
  public showTotalPrice: boolean = true;
  public startOrderIn: number = 1;
  public tabFormat: string | null = '';
  public tabMode: EPayioChefTabMode = EPayioChefTabMode.MANUAL;
  public urlLogo: string = '';

  // #endregion Properties (17)

  // #region Constructors (1)

  constructor(data?: Partial<PayioChefConfigOperationEntity>) {
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
