import { INatiInfo, IDesenfilaInfo, IMobyoInfo, EDesenfilaFrom, NatiInfoEntity, DesenfilaInfoEntity, MobyoInfoEntity } from '../../general';
import { IFee } from '../../transaction';
import { IGlobalSettingNatiPay, IGlobalSettingTaxes } from '../interfaces';

export class GlobalSettingNatiPayEntity implements IGlobalSettingNatiPay {
  // #region Properties (1)
  public id: string = '';
  public info: {
    natiInfo: INatiInfo;
    desenfilaInfo: IDesenfilaInfo;
    mobyoInfo: IMobyoInfo;
    userName: EDesenfilaFrom.NATIPAY;
    email: string;
  } = {
    natiInfo: new NatiInfoEntity(),
    desenfilaInfo: new DesenfilaInfoEntity(),
    mobyoInfo: new MobyoInfoEntity(),
    userName: EDesenfilaFrom.NATIPAY,
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
