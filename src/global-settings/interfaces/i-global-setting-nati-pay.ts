import { EFrom, IDesenfilaInfo, IInfo, ICannoliInfo } from '../../general';

export interface IGlobalSettingNatiPay {
  id: string;
  info: {
    natiInfo: IInfo;
    desenfilaInfo: IDesenfilaInfo;
    cannoliInfo: ICannoliInfo;
    userName: EFrom.NATIPAY;
    email: string;
  };
}
