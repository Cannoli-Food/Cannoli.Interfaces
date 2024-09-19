import { EPaymentType } from '../enum/payment-type.enum';
export class IPaymentMethod {
  // #region Properties (8)

  public active: boolean;

  public createdAt: number;

  public id: string;

  public index: number;

  public method: 'app' | 'ondelivery';

  public name: string;

  public type: EPaymentType;

  public updatedAt: number;

  // #endregion Properties (8)

  // #region Constructors (1)

  constructor(obj: IPaymentMethod) {
    this.active = true;
    this.createdAt = Date.now();
    this.id = obj.id;
    this.index = obj.index;
    this.method = obj.method;
    this.name = obj.name;
    this.type = obj.type;
    this.updatedAt = Date.now();
  }

  // #endregion Constructors (1)
}