import { EDesenfilaFrom, EDocType } from '../../general';
import { ISponsorFee } from './i-sponsor-fee';
export interface ISponsor {
  id: string;
  fees: ISponsorFee[];
  createdAt: Date;
  name: string;
  doc: string;
  docType: EDocType;
  from: EDesenfilaFrom;
  desenfilaRefId: string | null;
  internationalCode: string;
  phoneNumer: string;
  email: string;
  natiRefId: string | null;
  mobyoRefId: string | null;
}
