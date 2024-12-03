import { EDesenfilaFrom, EDocType, IDesenfilaInfo, IInfo, IMobyoInfo } from '../../general';
import { ISponsorFee } from './i-sponsor-fee';
export interface ISponsor {
  id: string;
  fees: ISponsorFee[];
  createdAt: Date;
  name: string;
  doc: string;
  docType: EDocType;
  from: EDesenfilaFrom;
  desenfilaContainerId: string | null;
  desenfilaMerchantId: string | null;
  internationalCode: string;
  phoneNumer: string;
  email: string;
  natiRefId: string | null;
  mobyoRefId: string | null;
  natiInfo: IInfo;
  mobyoInfo: IMobyoInfo;
  desenfilaInfo: IDesenfilaInfo;
}
