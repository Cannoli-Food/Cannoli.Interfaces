import { EDesenfilaFrom, IDesenfilaInfo, IMobyoInfo, INatiInfo } from '../../general';

export interface IGlobalSettingNatiPay {
  id: string;
  info: {
    natiInfo: INatiInfo;
    desenfilaInfo: IDesenfilaInfo;
    mobyoInfo: IMobyoInfo;
    userName: EDesenfilaFrom.NATIPAY;
    email: string;
  };
}
