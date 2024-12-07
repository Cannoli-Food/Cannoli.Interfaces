import { DesenfilaInfoEntity, EFrom, IDesenfilaInfo, IInfo, IMobyoInfo, InfoEntity, MobyoInfoEntity } from '../../general';
import { IGlobalSettingNatiPay } from '../interfaces';

export class GlobalSettingNatiPayEntity implements IGlobalSettingNatiPay {
  // #region Properties (1)
  public id: string = '';
  public info: {
    natiInfo: IInfo;
    desenfilaInfo: IDesenfilaInfo;
    mobyoInfo: IMobyoInfo;
    userName: EFrom.NATIPAY;
    email: string;
  } = {
    natiInfo: new InfoEntity(),
    desenfilaInfo: new DesenfilaInfoEntity(),
    mobyoInfo: new MobyoInfoEntity(),
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
