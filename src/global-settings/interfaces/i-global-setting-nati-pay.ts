import { EFrom, IDesenfilaInfo, IInfo, IMobyoInfo } from '../../general';

export interface IGlobalSettingNatiPay {
  id: string;
  info: {
    natiInfo: IInfo;
    desenfilaInfo: IDesenfilaInfo;
    mobyoInfo: IMobyoInfo;
    userName: EFrom.NATIPAY;
    email: string;
  };
}
