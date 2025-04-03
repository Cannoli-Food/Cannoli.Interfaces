import { EDocType, EFrom, IDesenfilaInfo, IInfo, ICannoliInfo } from '../../general';
import { ISponsorFee } from './i-sponsor-fee';
export interface ISponsor {
  id: string;
  fees: ISponsorFee[];
  createdAt: Date;
  name: string;
  doc: string;
  docType: EDocType;
  from: EFrom;
  desenfilaContainerId: string | null;
  desenfilaMerchantId: string | null;
  internationalCode: string;
  phoneNumer: string;
  email: string;
  natiRefId: string | null;
  cannoliRefId: string | null;
  natiInfo: IInfo;
  cannoliInfo: ICannoliInfo;
  desenfilaInfo: IDesenfilaInfo;
}
