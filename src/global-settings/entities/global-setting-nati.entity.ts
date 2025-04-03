import { DesenfilaInfoEntity, EFrom, IDesenfilaInfo, IInfo, ICannoliInfo, InfoEntity, CannoliInfoEntity } from '../../general';
import { IGlobalSettingNatiPay } from '../interfaces';

export class GlobalSettingNatiPayEntity implements IGlobalSettingNatiPay {
  // #region Properties (1)
  public id: string = '';
  public info: {
    natiInfo: IInfo;
    desenfilaInfo: IDesenfilaInfo;
    cannoliInfo: ICannoliInfo;
    userName: EFrom.NATIPAY;
    email: string;
  } = {
    natiInfo: new InfoEntity(),
    desenfilaInfo: new DesenfilaInfoEntity(),
    cannoliInfo: new CannoliInfoEntity(),
    userName: EFrom.NATIPAY,
    email: '',
  };

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(data?: Partial<GlobalSettingNatiPayEntity>) {
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
