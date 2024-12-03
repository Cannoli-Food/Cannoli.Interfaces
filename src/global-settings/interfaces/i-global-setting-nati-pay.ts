import { EDesenfilaFrom, IDesenfilaInfo, IInfo, IMobyoInfo } from '../../general';

export interface IGlobalSettingNatiPay {
  id: string;
  info: {
    natiInfo: IInfo;
    desenfilaInfo: IDesenfilaInfo;
    mobyoInfo: IMobyoInfo;
    userName: EDesenfilaFrom.NATIPAY;
    email: string;
  };
}
